import { InputType, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class FindAllPartnerConsultsInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  partnerId: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { defaultValue: false })
  isFinished?: boolean;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { defaultValue: 0 })
  skip?: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { nullable: true })
  startDateTimestamp?: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { nullable: true })
  limitDateTimestamp?: number;
}
