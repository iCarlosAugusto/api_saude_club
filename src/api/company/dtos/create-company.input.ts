import { InputType, Field } from '@nestjs/graphql';
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator';

@InputType()
export class CreateCompanyInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  @Field(() => [String])
  availableDay: string[];

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  bannerImage: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  partnerId: string;
}
