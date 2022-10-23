import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {

  @ApiProperty({
    type: 'string',
    example: 'backend'
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    type: 'boolean',
    default: true
  })
  @IsBoolean()
  @IsOptional()
  status: boolean;
}
