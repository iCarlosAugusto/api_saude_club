import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateNewsInput {
  
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  description: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  imageUrl: string;
}
