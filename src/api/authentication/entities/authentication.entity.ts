import { ObjectType, Field } from '@nestjs/graphql';
import { AdminEntity } from 'src/api/admin/entities/admin.entity';
import { PartnerEntity } from 'src/api/partners/entities/partner.entity';
import { ClientEntity } from 'src/api/users/entities/client.entity';


@ObjectType()
export class AuthenticationEntity {

  @Field(() => PartnerEntity, { nullable: true })
  partner?: PartnerEntity;

  @Field(() => ClientEntity, { nullable: true})
  user?: ClientEntity;

  @Field(() => AdminEntity, { nullable: true})
  admin?: AdminEntity;
}
