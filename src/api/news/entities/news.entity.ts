import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class NewsEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  imageUrl: string;
}
