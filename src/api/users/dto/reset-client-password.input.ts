import { InputType, Field } from '@nestjs/graphql';
import {  IsNotEmpty, IsString, IsEmail } from 'class-validator';

@InputType()
export class ResetClientPasswordInput {
  
  @IsEmail()
  @IsNotEmpty({ message: 'Email é obrigatório' })
  @Field(() => String)
  email: string;
}
