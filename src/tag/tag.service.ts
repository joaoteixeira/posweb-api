import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {

  constructor(
    @Inject('TAG_REPOSITORY')
    private readonly repository: Repository<Tag>,
  ) { }

  async findOne(nameTags: string[]) {
    if (!nameTags) return [];
    
    return await Promise.all(
      nameTags.map(async (name) => {
        let tag = await this.repository.findOneBy({ name });

        if (!tag)
          tag = await this.create(name);
        return tag;
      })
    );
  }

  private async create(name: string) {
    return await this.repository.save({ name });
  }
}
