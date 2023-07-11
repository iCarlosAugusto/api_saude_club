import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateClassInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  description : string;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  lots: number;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  startAt: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  address: string; 
  
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  place: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  bannerImage: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  teacherName: string;
  
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  companyId: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  dateTimestamp: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  date: string;
}
