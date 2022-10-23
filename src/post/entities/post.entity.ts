import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Tag } from '../../tag/entities/tag.entity';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column()
  slug: string;

  @Column()
  published: boolean;

  @Column()
  publishedAt: Date;

  @Column()
  createdAt: Date;

  @ManyToOne(type => Category, { eager: true })
  @JoinColumn()
  category: Category;

  @ManyToMany(type => Tag)
  @JoinColumn()
  tags: Tag[];
}
