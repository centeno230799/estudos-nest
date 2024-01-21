import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post() // decorator sempre vem antes do que quero decorar

  // acessa o body da request e atribui a variável
  async create(@Body() body) {
    return { body };
  }
}
