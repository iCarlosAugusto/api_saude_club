import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FindOneParnetInput {
  
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
