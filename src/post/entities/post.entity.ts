import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../category/entities/category.entity';

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

  @ManyToOne(type => Category)
  @JoinColumn()
  category: Category;
}
