import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from 'src/services/todo.service';
import { Todo } from '@prisma/client';
import { CreateTodoDto } from 'src/dtos/create-todo.dto';
import { UpdateTodoDto } from 'src/dtos/update-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.todoService.todos({});
  }

  @Get(':id')
  async getTodoById(@Param('id') id: string): Promise<Todo> {
    return this.todoService.todo({ id: Number(id) });
  }

  @Post()
  async createTodo(@Body() todoData: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTodo(todoData);
  }

  @Patch(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() todoData: UpdateTodoDto,
  ): Promise<Todo> {
    return this.todoService.updateTodo({
      where: { id: Number(id) },
      data: todoData,
    });
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<Todo> {
    return this.todoService.deleteTodo({ id: Number(id) });
  }
}
