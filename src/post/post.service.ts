import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entities/category.entity';
import { Post } from './entities/post.entity';
import slugify from 'slugify';

@Injectable()
export class PostService {

  constructor(
    @Inject('POST_REPOSITORY')
    private readonly repository: Repository<Post>,
    private readonly categoryService: CategoryService
  ) {}

  async create(data: CreatePostDto) {

    const category = await this.categoryService.findOne(data.category);

    const post = await this.repository.create({
      ...data,
      slug: slugify(data.title, { lower: true }),
      category: category
    });

    await this.repository.insert(post);

    return post; 
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    const post = await this.repository.findOneBy({ id });

    if(!post) throw new NotFoundException('Post not found');

    return post;
  }

  async update(id: number, data: UpdatePostDto) {
    
    const category = await this.categoryService.findOne(data.category);

    const post = await this.repository.preload({
      id,
      ...data,
      category
    })

    if(!post) throw new NotFoundException('Post not found');

    await this.repository.update(id, post);

    return post;
  }

  async remove(id: number) {
    const post = await this.findOne(id);

    return await this.repository.remove(post);
  }
}
