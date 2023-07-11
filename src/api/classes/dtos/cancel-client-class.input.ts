import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CancelClientClassInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  classId: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  clientId: string;
}
