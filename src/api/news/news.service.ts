import { Injectable } from '@nestjs/common';
import { CreateNewsInput } from './dtos/create-news.input';
import { NewsRepository } from 'src/repositories/news.repository';

@Injectable()
export class NewsService {

  constructor(private newsRepository: NewsRepository){}

  async create(data: CreateNewsInput) {
    const news = await this.newsRepository.create(data); 
    return news;
  }

  async findAll() {
    const news = await this.newsRepository.findAll();
    return news[0];
  }
}
