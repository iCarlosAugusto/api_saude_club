import { InputType, Field } from '@nestjs/graphql';
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator';

@InputType()
export class UpdateCompanyInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  id: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, {nullable: true})
  name: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  @Field(() => [String], {nullable: true} )
  availableDay: string[];

  @IsString()
  @IsNotEmpty()
  @Field(() => String, {nullable: true})
  bannerImage: string;
}
