import { Injectable } from '@nestjs/common';
import { AdminRepository } from './repository/adminRepository';
import { CreateAdminInput } from './dto/create-admin.input';


@Injectable()
export class AdminService {
  constructor(private adminRepository: AdminRepository) {}

  async create(createAdminInput: CreateAdminInput) {
    return await this.adminRepository.create(createAdminInput);
  }
}
