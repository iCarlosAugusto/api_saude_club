import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AdminEntity {

  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  identification: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phoneNumber
}
