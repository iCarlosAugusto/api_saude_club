import { InputType, Int, Field } from '@nestjs/graphql';
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
export class FindAllClientConsultsInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  clientId: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, {nullable: true})
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
