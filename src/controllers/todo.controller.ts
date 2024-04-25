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

interface TodoDataToCreate {
  title: string;
  content?: string;
}

interface TodoDataToUpdate extends TodoDataToCreate {
  finishedAt?: string;
}

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
  async createTodo(@Body() todoData: TodoDataToCreate): Promise<Todo> {
    return this.todoService.createTodo(todoData);
  }

  @Patch(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() todoData: TodoDataToUpdate,
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
