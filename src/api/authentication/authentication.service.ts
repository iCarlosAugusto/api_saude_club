import { Injectable } from '@nestjs/common';
import { AuthenticationInput } from './dto/authentication.input';
import { AuthenticationRepository } from './repository/authentication.repository';

@Injectable()
export class AuthenticationService {
  constructor(private authenticationRepository: AuthenticationRepository) {}

  async authenticate(authenticateInput: AuthenticationInput) {
    return await this.authenticationRepository.authenticate(authenticateInput);
  }
}
