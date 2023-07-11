import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateClientInput {
  @Field(() => String)
  id?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email inválido' })
  @Field(() => String, { nullable: true })
  email: string;
  
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  photo: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  phoneNumber: string;
}
