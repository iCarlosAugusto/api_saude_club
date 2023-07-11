import { Module } from '@nestjs/common';
import { NewsRepository } from 'src/repositories/news.repository';
import { PrismaService } from '../users/services/prima.service';
import { NewsResolver } from './news.resolver';
import { NewsService } from './news.service';

@Module({
  providers: [NewsModule, NewsResolver, NewsService, NewsRepository, PrismaService],
})
export class NewsModule {}
