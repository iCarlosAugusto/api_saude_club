import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ClientEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  identification: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  partnerId: string;
}
