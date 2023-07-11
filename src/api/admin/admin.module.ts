import { Module } from '@nestjs/common';
import { PrismaService } from '../users/services/prima.service';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { AdminRepository } from './repository/adminRepository';


@Module({
  providers: [AdminResolver, AdminService,  PrismaService, AdminRepository]
})
export class AdminModule {}