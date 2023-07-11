import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AdminEntity } from './entities/admin.entity';
import { AdminService } from './admin.service';
import { CreateAdminInput } from './dto/create-admin.input';

@Resolver(() => AdminEntity)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() =>  AdminEntity)
  createAdmin(
    @Args('createAdminInput') createAdminInput: CreateAdminInput,
  ) {
    return this.adminService.create(createAdminInput);
  }
}
