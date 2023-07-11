import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../api/users/services/prima.service';
import { UpdatePasswordClientInput } from '../api/users/dto/update-password-client.input';
import { IClientRepository } from '../api/users/repositories/IUserRepository';
import { CreateClientInput } from '../api/users/dto/create-client.input';
import { UpdateClientInput } from '../api/users/dto/update-client.input';
import { ClientEntity } from '../api/users/entities/client.entity';
import { Client } from '@prisma/client';
import { EmailService } from 'src/utils/email.service';

@Injectable()
class ClientRepository implements IClientRepository {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  async create(data: CreateClientInput) {
    const firstPartnerPassword = Math.floor(1000 + Math.random() * 9000).toString();

    const isClientRepeted = await this.prisma.client.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!!isClientRepeted) {
      throw new HttpException(
        'Esse email já é usado por outro usuário. Por favor, tente outro.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const client = await this.prisma.client.create({ 
      data: {
        password: firstPartnerPassword,
        ...data
      }
    });
    await this.emailService.sendEmailToResetPassword({
      email: data.email,
      newPassword: firstPartnerPassword
    });
    return client;
  }

  async findOne(id: string) {
    const Client = await this.prisma.client.findFirst({
      where: {
        id: id,
      },
    });
    return Client;
  }

  async findOneByEmail(email: string){
    const client = await this.prisma.client.findFirst({
      where: {
        email
      }
    })
    return client;
  }

  async findAll(): Promise<Client[]> {
    const Clients = await this.prisma.client.findMany();
    return Clients;
  }

  async update(data: UpdateClientInput): Promise<Client> {
    const updateClient = await this.prisma.client.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        email: data.email,
        photo: data.photo,
        phoneNumber: data.phoneNumber,
      },
    });
    return updateClient;
  }

  async resetPassword(id: string, newPassword: string){
    const client = await this.prisma.client.update({
      where: {
        id
      },
      data: {
        password: newPassword
      }
    });
    return client;
  }

  async updatePassword({
    id,
    currentPassword,
    newPassword,
  }: UpdatePasswordClientInput): Promise<Client> {
    const client = await this.prisma.client.findUnique({
      where: {
        id: id,
      },
    });
    if (client.password !== currentPassword) {
      throw new HttpException('Senha atual incorreta', 404);
    }
    console.log("PASSOU!");
    const updatedPasswordClient = await this.prisma.client.update({
      where: {
        id: id,
      },
      data: {
        password: newPassword,
      },
    });

    return updatedPasswordClient;
  }
}

export { ClientRepository };
