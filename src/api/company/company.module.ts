import { Module } from '@nestjs/common';
import { PrismaService } from '../users/services/prima.service';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from './company.service';
import { PartnerRepository } from 'src/repositories/partner.repository';
import { CompanyRepository } from 'src/repositories/company.repository';
import { EmailService } from 'src/utils/email.service';
import { ClassRepository } from 'src/repositories/class.repository';
import { ClientRepository } from 'src/repositories/client.repository';

@Module({
  providers: [
    CompanyResolver,
    CompanyService,
    PrismaService,
    PartnerRepository,
    CompanyRepository,
    EmailService,
    ClassRepository,
    ClientRepository,
  ],
})
export class CompanyModule {}
