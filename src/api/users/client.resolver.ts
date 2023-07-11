import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UpdatePasswordClientInput } from './dto/update-password-client.input';
import { ClientEntity } from './entities/client.entity';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { ClientService } from './client.service';
import { ResetClientPasswordInput } from './dto/reset-client-password.input';

@Resolver(() => ClientEntity)
export class ClientResolver {
  constructor(private readonly clientsService: ClientService) {}

  @Mutation(() => ClientEntity)
  createClient(@Args('createClientInput') createClientInput: CreateClientInput) {
    return this.clientsService.create(createClientInput);
  }

  @Query(() => ClientEntity)
  findOneClient(@Args('id', { type: () => String }) id: string) {
    return this.clientsService.findOne(id);
  }

  @Query(() => [ClientEntity])
  findAllClient() {
    return this.clientsService.findAll();
  }

  @Mutation(() => ClientEntity)
  updateClient(@Args('updateClientInput') updateClientInput: UpdateClientInput) {
    return this.clientsService.update(updateClientInput);
  }

  @Mutation(() => ClientEntity)
  updatePasswordClient(@Args('updatePasswordInput') updatePasswordInput: UpdatePasswordClientInput) {
    return this.clientsService.updatePassword(updatePasswordInput)
  }

  @Mutation(() => String)
  resetClientPassword(
    @Args('resetClientPassword') resetClientPassword: ResetClientPasswordInput
  ) {
    return this.clientsService.resetPassword(resetClientPassword);
  } 
}
