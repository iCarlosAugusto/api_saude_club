import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdatePartnerInput {
  
  @IsNotEmpty({ message: "Id é obrigatório"})
  @IsString({message: "O Id precisa ser uma string"})
  @Field(() => String)
  id: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email inválido',  })
  @Field(() => String, { nullable: true })
  email: string;

  @IsOptional({ message: 'O nome é obrigatória' })
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  phoneNumber: string;
  
  @IsOptional()
  @Field(() => String, { nullable: true })
  specialties: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  address: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  servicePrice: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  jobDescription: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  photo: string;
}
