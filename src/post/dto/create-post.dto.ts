import { IsArray, IsBoolean, IsDate, IsDateString, IsInt, IsLowercase, IsNotEmpty, IsOptional, IsString, Length, MaxLength, ValidateIf } from "class-validator";
import { Category } from "src/category/entities/category.entity";

export class CreatePostDto {

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsBoolean()
  @IsOptional()
  published: boolean;

  @IsDateString()
  @ValidateIf(obj => obj.published)
  @IsNotEmpty()
  @Length(19, 19)
  publishedAt: Date;

  @IsInt()
  @IsNotEmpty()
  category: number;

  @IsArray()
  @IsLowercase({ each: true })
  tags: string[];
}
