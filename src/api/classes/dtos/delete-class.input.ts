import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class DeleteClassInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  classId: string;

}
