import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FindOneConsultInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  id: string;
}
