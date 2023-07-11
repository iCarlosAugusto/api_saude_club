import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePartnerInput } from './dto/create-partner.input';
import { UpdatePartnerInput } from './dto/update-partner.input';
import { FindOneParnetInput } from './dto/find-one-partner.input';
import { Partner, Client } from '@prisma/client';
import { FindAllParnerstInput } from './dto/find-all-partners.input';
import { UpdatePasswordPartnerInput } from './dto/update-password-partner.input';
import { PartnerRepository } from 'src/repositories/partner.repository';
import { FindClientsPartnerInput } from './dto/find-clients-partner.input';

@Injectable()
export class PartnersService {

  constructor(private partnerRepository: PartnerRepository){}

  async create(data: CreatePartnerInput) {
    const partner = await this.partnerRepository.create(data); 
    return partner;
  }

  async findOne(data: FindOneParnetInput){
    const partner = await this.partnerRepository.findOneById(data);
    return partner;
  }

  async findAll(data: FindAllParnerstInput){
    const partner = await this.partnerRepository.findAll(data);
    return partner;
  }

  async update(data: UpdatePartnerInput): Promise<Partner> {
    const partnerExists = await this.findOne({id: data.id});
    if(!partnerExists) throw new Error("Parceiro não encontrado");
    const partnerUpdated = await this.partnerRepository.update(data);
    return partnerUpdated
  }

  async updatePassword({ id, currentPassword, newPassword }: UpdatePasswordPartnerInput): Promise<Partner> {
    const partnerExists = await this.partnerRepository.findOneById({id});
    if(!partnerExists) throw new Error("Parceiro não encontrado");
    const updatedPartnerPassword = await this.partnerRepository.updatePassword({id, currentPassword, newPassword});
    return updatedPartnerPassword;
  }

  async findClientsPartner(data: FindClientsPartnerInput) {
    const partner = await this.partnerRepository.findOneById({id: data.partnerId});
    if(!partner) throw new HttpException(
      'Não foi possível criar a aula pelo id do parceiro fornecido',
      HttpStatus.BAD_REQUEST,
    );
    const clients = await this.partnerRepository.findClientsPartner(data);
    return clients;
  }
}
