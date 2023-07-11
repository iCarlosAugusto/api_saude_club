import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateClientInput {
  @Field(() => String, {nullable: true})
  id?: string;

  @IsEmail({}, { message: 'Email inválido' })
  @Field(() => String)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  identification: string;

  @IsNotEmpty({ message: 'O nome é obrigatória' })
  @Field(() => String)
  name: string;

  @IsNotEmpty({ message: 'O número para contato é obrigatória' })
  @Field(() => String)
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  partnerId: string;
  
}
