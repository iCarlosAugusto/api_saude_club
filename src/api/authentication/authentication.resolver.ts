import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { AuthenticationInput } from './dto/authentication.input';
import { AuthenticationEntity } from './entities/authentication.entity';

@Resolver(() => AuthenticationEntity)
export class AuthenticationResolver {
  constructor(private readonly authenticateService: AuthenticationService) {}

  @Mutation(() =>  AuthenticationEntity, { nullable: true })
  authenticate(
    @Args('authenticateInput') authenticateInput: AuthenticationInput,
  ) {
    return this.authenticateService.authenticate(authenticateInput);
  }
}
