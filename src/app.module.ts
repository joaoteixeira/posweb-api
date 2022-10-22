import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [DatabaseModule, UserModule, PostModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
