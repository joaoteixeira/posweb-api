import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private readonly repository: Repository<Category>,
  ) {}

  async create(data: CreateCategoryDto) {

    const category = await this.repository.create(data);

    await this.repository.insert(category);

    return category; 
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.repository.findOneBy({ id });

    if(!category) throw new NotFoundException('Category not found');

    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
