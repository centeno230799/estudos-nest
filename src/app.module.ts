import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // Todos os requests são interceptados por controles que definem uma rota
  providers: [AppService],
})
export class AppModule {}
