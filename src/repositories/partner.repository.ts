import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/api/users/services/prima.service';
import { CreatePartnerInput } from '../api/partners/dto/create-partner.input';
import { Partner } from '@prisma/client';
import { UpdatePartnerInput } from '../api/partners/dto/update-partner.input';
import { FindOneParnetInput } from '../api/partners/dto/find-one-partner.input';
import { FindAllParnerstInput } from '../api/partners/dto/find-all-partners.input';
import { UpdatePasswordPartnerInput } from '../api/partners/dto/update-password-partner.input';
import { EmailService } from 'src/utils/email.service';
import { FindClientsPartnerInput } from 'src/api/partners/dto/find-clients-partner.input';

@Injectable()
export class PartnerRepository {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  async create(data: CreatePartnerInput): Promise<Partner> {
    const firstPartnerPassword = Math.floor(
      1000 + Math.random() * 9000,
    ).toString();

    const partner = await this.prisma.partner.create({
      data: {
        identification: data.identification,
        password: firstPartnerPassword,
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
        address: data.address,
        jobDescription: data.jobDescription,
        servicePrice: data.servicePrice,
        specialties: data.specialties,
      },
    });
    await this.emailService.sendEmailToResetPassword({
      email: data.email,
      newPassword: firstPartnerPassword,
    });
    return partner;
  }

  async update(data: UpdatePartnerInput): Promise<Partner> {
    const partnerUpdated = await this.prisma.partner.update({
      where: { id: data.id },
      data: {
        address: data.address,
        jobDescription: data.jobDescription,
        servicePrice: data.servicePrice,
        specialties: data.specialties,
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
        photo: data.photo,
      },
    });
    return partnerUpdated;
  }

  async updatePassword({
    id,
    currentPassword,
    newPassword,
  }: UpdatePasswordPartnerInput): Promise<Partner> {
    const partner = await this.prisma.partner.findUnique({
      where: {
        id: id,
      },
    });
    if (partner.password !== currentPassword)
      throw new Error('Senha atual incorreta');
    const updatedPasswordPartner = await this.prisma.partner.update({
      where: {
        id: id,
      },
      data: {
        password: newPassword,
      },
    });

    return updatedPasswordPartner;
  }

  async findOneById({ id }: FindOneParnetInput): Promise<Partner> {
    const partner = await this.prisma.partner.findUnique({
      where: {
        id,
      },
    });
    return partner;
  }

  async findAll({ skip }: FindAllParnerstInput): Promise<Partner[]> {
    const partners = await this.prisma.partner.findMany({
      skip: skip == null ? 0 : skip,
      take: 10,
    });
    return partners;
  }

  //REFAZER
  async findClientsPartner({ partnerId }: FindClientsPartnerInput) {
    const { clients } = await this.prisma.partner.findFirst({
      select: {
        clients: true,
      },
      where: {
        id: partnerId,
      },
    });
    return clients;
  }
}
