import { Module } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { PartnersResolver } from './partners.resolver';
import { PrismaService } from '../users/services/prima.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailService } from 'src/utils/email.service';
import { PartnerRepository } from 'src/repositories/partner.repository';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
          user: 'carlosaugustodelimavieira@gmail.com',
          pass: 'vjtvdjyohvxatpbv',
        },
      },
    }),
  ],
  providers: [
    PartnersResolver,
    PartnersService,
    PrismaService,
    PartnerRepository,
    EmailService,
  ],
})
export class PartnersModule {}
