import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthenticationInput } from '../dto/authentication.input';
import { PrismaService } from 'src/api/users/services/prima.service';

@Injectable()
export class AuthenticationRepository {
  constructor(private prisma: PrismaService) {}

  async authenticate({ identification, password, email }: AuthenticationInput) {
    const user = await this.prisma.client.findFirst({
      where: {
        OR: [
          {
            email,
            password,
          },
          {
            identification,
            password,
          },
        ],
      },
    });

    if (user != null) return { user };

    const partner = await this.prisma.partner.findFirst({
      where: {
        OR: [
          {
            email,
            password,
          },
          {
            identification,
            password,
          },
        ],
      },
    });
    if (partner != null) return { partner };

    const admin = await this.prisma.admin.findFirst({
      where: {
        OR: [
          {
            email,
            password,
          },
          {
            identification,
            password,
          },
        ],
      },
    });
    if (admin != null) return { admin };
    throw new NotFoundException('Nenhum usuário encontrado');
  }
}
