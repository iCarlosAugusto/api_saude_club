import { Module } from '@nestjs/common';
import { PrismaService } from './services/prima.service';
import { ClientRepository } from '../../repositories/client.repository';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';
import { EmailService } from 'src/utils/email.service';

@Module({
  providers: [ClientResolver, ClientService, PrismaService, ClientRepository, EmailService],
})
export class ClientsModule {}
