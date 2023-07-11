import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, ValidateIf, IsOptional } from 'class-validator';

@InputType()
export class AuthenticationInput {

  @IsString()
  @IsOptional()
  @IsEmail()
  @Field(() => String)
  @ValidateIf((o) =>!o.identification)
  email: string;

  @IsString()
  @IsOptional()
  @ValidateIf((o) => !o.email)
  @Field(() => String)
  identification: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  password: string; 
}
