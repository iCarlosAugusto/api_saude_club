import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FindCompaniesByDateInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  date: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  partnerId: string;

}
