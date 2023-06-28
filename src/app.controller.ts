import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '~/app.service';
import { Greet } from '~/app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('greet')
  greet(): Record<string, Greet> {
    return this.appService.greet();
  }

  @Get(':something')
  getHelloSomething(@Param('something') something: string): string {
    return this.appService.getHelloSomething(something);
  }
}
