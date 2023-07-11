import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PartnersService } from './partners.service';
import { PartnerEntity } from './entities/partner.entity';
import { CreatePartnerInput } from './dto/create-partner.input';
import { UpdatePartnerInput } from './dto/update-partner.input';
import { FindOneParnetInput } from './dto/find-one-partner.input';
import { FindAllParnerstInput } from './dto/find-all-partners.input';
import { UpdatePasswordPartnerInput } from './dto/update-password-partner.input';
import { ClientEntity } from '../users/entities/client.entity';
import { FindClientsPartnerInput } from './dto/find-clients-partner.input';

@Resolver(() => PartnerEntity)
export class PartnersResolver {
  constructor(private readonly partnersService: PartnersService) {}

  @Query(() => PartnerEntity, {nullable: true})
  findOnePartner(@Args('findOnePartnerInput') findOnePartnerInput: FindOneParnetInput) {
    return this.partnersService.findOne(findOnePartnerInput);
  }

  @Query(() => [PartnerEntity], {nullable: true})
  findAllPartners(@Args('findAllPartnersInput') findAllParnerstInput: FindAllParnerstInput) {
    return this.partnersService.findAll(findAllParnerstInput);
  }

  @Mutation(() => PartnerEntity)
  createPartner(@Args('createPartnerInput') createPartnerInput: CreatePartnerInput) {
    return this.partnersService.create(createPartnerInput);
  }

  @Mutation(() => PartnerEntity)
  updatePartner(@Args('updatePartnerInput') updatePartnerInput: UpdatePartnerInput) {
    return this.partnersService.update(updatePartnerInput);
  }

  @Mutation(() => PartnerEntity)
  updatePasswordPartner(@Args('updatePasswordInput') updatePasswordInput: UpdatePasswordPartnerInput) {
    return this.partnersService.updatePassword(updatePasswordInput)
  }

  @Query(() => [ ClientEntity ], { nullable: true })
  findAllClientsPartner(@Args('findAllClientsPartnerInput') findAllClientsPartnerInput: FindClientsPartnerInput) {
    return this.partnersService.findClientsPartner(findAllClientsPartnerInput);
  }
}
