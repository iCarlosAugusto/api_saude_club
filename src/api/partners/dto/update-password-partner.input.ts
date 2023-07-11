import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdatePasswordPartnerInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha atual é obrigatória' })
  @Field(() => String)
  currentPassword: string;

  @IsString()
  @IsNotEmpty({ message: 'A nova senha é obrigatória' })
  @Field(() => String)
  newPassword: string;
}
