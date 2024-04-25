import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo.controller';
import { PrismaService } from './services/prisma.service';
import { TodoService } from './services/todo.service';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [PrismaService, TodoService],
})
export class AppModule {}
