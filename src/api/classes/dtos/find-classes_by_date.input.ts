import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class FindAllClassesByDateInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  companyId: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  date: string;
}
