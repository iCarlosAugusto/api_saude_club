import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FindCompanyByPartnerIdInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  partnerId: string;

}