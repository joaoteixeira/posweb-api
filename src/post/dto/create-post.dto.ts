import { Category } from "src/category/entities/category.entity";

export class CreatePostDto {
  title: string;

  description: string;

  author: string;

  published: boolean;

  publishedAt: Date;

  category: number;

  tags: string[];
}
