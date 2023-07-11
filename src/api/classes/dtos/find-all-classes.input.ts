import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FindAllClassesInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  companyId: string;

  date: string;
}
