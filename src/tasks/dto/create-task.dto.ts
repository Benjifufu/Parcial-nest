import {
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTaskDto {
  @IsString()
  @Transform(({ value }) => {
    const input: unknown = value;
    return typeof input === 'string' ? input.trim() : input;
  })
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsMongoId()
  user!: string;
}
