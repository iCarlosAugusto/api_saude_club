import { ObjectType, Field } from '@nestjs/graphql';
import { ConsultEntity } from 'src/api/consults/entities/consult.entity';

@ObjectType()
export class PartnerEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  identification: string;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  specialties: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  servicePrice: string;

  @Field(() => String)
  jobDescription: string;

  @Field(() => [ConsultEntity], { nullable: true })
  consults: ConsultEntity[];
}
