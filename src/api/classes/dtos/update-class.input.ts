import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateClassInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  classId: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  description: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  lots: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  startAt: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  date: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  dateTimestamp: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  address: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  place: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  bannerImage: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  teacherName: string;
}
