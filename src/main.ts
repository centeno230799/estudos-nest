import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // app express por padrão - AppModule = modulo de entrada
  await app.listen(3000); // porta default para a aplicação
}
bootstrap();
// toda vez que a app NestJS for iniciada, essa é a primeira func a ser executada
