import { Module } from '@nestjs/common';
import { PrismaService } from '../users/services/prima.service';
import { AuthenticationResolver } from './authentication.resolver';
import { AuthenticationService } from './authentication.service';
import { AuthenticationRepository } from './repository/authentication.repository';

@Module({
  providers: [AuthenticationResolver, AuthenticationService,  PrismaService, AuthenticationRepository]
})
export class AuthenticationModule {}