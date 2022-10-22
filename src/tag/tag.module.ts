import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { providers } from 'src/providers';
import { TagService } from './tag.service';

@Module({
  imports: [DatabaseModule],
  providers: [...providers, TagService],
  exports: [TagService],
})
export class TagModule {}
