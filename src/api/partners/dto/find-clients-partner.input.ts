import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FindClientsPartnerInput {
  
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  partnerId: string;
}
