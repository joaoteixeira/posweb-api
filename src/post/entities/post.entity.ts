import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import slugify from 'slugify';
import { Category } from "src/category/entities/category.entity";

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
}
