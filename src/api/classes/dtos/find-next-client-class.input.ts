import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FindNextClientClassInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  clientId: string;

}