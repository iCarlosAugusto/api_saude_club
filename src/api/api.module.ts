import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CompanyModule } from './company/company.module';
import { ConsultsModule } from './consults/consults.module';
import { NewsModule } from './news/news.module';
import { PartnersModule } from './partners/partners.module';
import { ServicesModule } from './services/services.module';
import { ClientsModule } from './users/client.module';
import { ClassModule } from './classes/class.module';


@Module({
  imports: [
    AdminModule,
    AuthenticationModule,
    CompanyModule,
    ConsultsModule,
    NewsModule,
    PartnersModule,
    ServicesModule,
    ClientsModule,
    ClassModule,
  ],
})
export class ApiModule {}
