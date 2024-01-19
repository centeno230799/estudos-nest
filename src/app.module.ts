import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// module -> decorator adicionando recursos em exec time dentro da classe vazia
@Module({
  imports: [],
  controllers: [AppController], // Todos os requests são interceptados por controles que definem uma rota
  providers: [AppService],
})
export class AppModule {}
