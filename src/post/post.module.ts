import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { DatabaseModule } from 'src/database/database.module';
import { providers } from 'src/providers';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [DatabaseModule, CategoryModule],
  controllers: [PostController],
  providers: [...providers, PostService]
})
export class PostModule {}
