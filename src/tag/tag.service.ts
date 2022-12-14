import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {

  constructor(
    @Inject('TAG_REPOSITORY')
    private readonly repository: Repository<Tag>,
  ) { }

  async findByName(tags: string[]) {
    if (!tags) return [];

    let result = [];
    for(const name of tags) {
      let _tag = await this.repository.findOneBy({ name });

        if (!_tag)
          _tag = await this.create(name);

      result.push(_tag);  
    }

    return result;
  }

  // Function with Promisse.all
  async _findByName(nameTags: string[]) {
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
