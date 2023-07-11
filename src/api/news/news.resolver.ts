import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { NewsEntity } from './entities/news.entity';
import { CreateNewsInput } from './dtos/create-news.input';
import { NewsService } from './news.service';

@Resolver()
export class NewsResolver {
  constructor(private readonly newsService: NewsService) {}

  @Mutation(() => NewsEntity)
  createNews(@Args('createNewsInput') createNewsInput: CreateNewsInput) {
    return this.newsService.create(createNewsInput);
  }

  @Query(() => NewsEntity )
  async findNews() {
    console.log("chamado!");
    return await this.newsService.findAll();
  }
}
