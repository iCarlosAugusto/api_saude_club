import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class FindAllParnerstInput {
  
  @IsOptional()
  @IsNumber()
  @Field(() => Int)
  skip: number;
}
