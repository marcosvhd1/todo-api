import { IsOptional, IsString } from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends CreateTodoDto {
  @IsString()
  @IsOptional()
  finishedAt?: string;
}
