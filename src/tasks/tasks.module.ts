import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task, TaskSchema } from './schemas/task.schema';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    // ✅ CORRECCIÓN CASO 2 (parte 2 de 3): solo registra SU schema...
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    // ...e importa el MÓDULO de Users para poder inyectar UsersService (exportado en users.module.ts)
    UsersModule,
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
// ✅ CORRECCIÓN CASO 4: el module queda vacío de lógica (la lógica está en tasks.service.ts).
export class TasksModule {}
