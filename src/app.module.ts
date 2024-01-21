import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

// module -> decorator adicionando recursos em exec time dentro da classe vazia
@Module({
  imports: [UserModule],
  controllers: [AppController], // Todos os requests são interceptados por controles que definem uma rota
  providers: [AppService],
})
export class AppModule {}
