import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { DatabaseModule } from 'src/database/database.module';
import { providers } from 'src/providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [...providers, CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
