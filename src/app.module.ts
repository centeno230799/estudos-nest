import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

// module -> decorator adicionando recursos em exec time dentro da classe vazia
@Module({
  imports: [forwardRef(() => UserModule), forwardRef(() => AuthModule)],
  controllers: [AppController], // Todos os requests são interceptados por controles que definem uma rota
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
