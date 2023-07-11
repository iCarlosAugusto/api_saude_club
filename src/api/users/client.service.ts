import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from './services/prima.service';
import { UpdatePasswordClientInput } from './dto/update-password-client.input';
import { ClientRepository } from '../../repositories/client.repository';
import { CreateClientInput } from './dto/create-client.input';
import { Client } from '@prisma/client';
import { UpdateClientInput } from './dto/update-client.input';
import { ResetClientPasswordInput } from './dto/reset-client-password.input';
import { EmailService } from 'src/utils/email.service';

@Injectable()
export class ClientService {
  constructor(
    private prisma: PrismaService, 
    private clientRepository: ClientRepository,
    private emailService: EmailService,
  ) {}

  async create(data: CreateClientInput): Promise<Client> {
    const client = await this.clientRepository.create(data);
    return client;
  }

  async findOne(id: string): Promise<Client> {
    const client = await this.clientRepository.findOne(id);
    if(!client){
      throw new Error('Cliente não encontrado');
    }
    return client;
  }

  async findAll(): Promise<Client[]> {
    const clients = await this.clientRepository.findAll();
    return clients;
  }

  async update(updateClientInput: UpdateClientInput): Promise<Client> {
    const isClientExists = await this.clientRepository.findOne(updateClientInput.id);
    if(!isClientExists) throw new Error("Cliente não encontrado");
    const updatedClient = await this.clientRepository.update(updateClientInput);
    return updatedClient;
  }

  async updatePassword({ id, currentPassword, newPassword }: UpdatePasswordClientInput): Promise<Client> {
    const isClientExists = await this.clientRepository.findOne(id);
    if(!isClientExists) throw new HttpException("Cliente não encontrado", 404);
    const updatedClintPassword = await this.clientRepository.updatePassword({id, currentPassword, newPassword});
    return updatedClintPassword;
  }

  async resetPassword({ email }: ResetClientPasswordInput) {
    const newPassword = Math.floor(1000 + Math.random() * 9000).toString();

    const client = await this.clientRepository.findOneByEmail(email);
    if(!client) throw new HttpException("Email não encontrado em nossa base de dados", 404);

    await this.clientRepository.resetPassword(client.id, newPassword);

    await this.emailService.sendEmailToResetPassword({
      email,
      newPassword 
    });
    return 'Sucesso!';
  }
}
