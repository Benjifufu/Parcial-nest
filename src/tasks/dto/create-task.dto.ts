// src/tasks/dto/create-task.dto.ts
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  title: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsMongoId()
  user: string;
}
