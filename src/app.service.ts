import { Injectable } from '@nestjs/common';
import { Greet } from './app.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return this.getHelloSomething('World');
  }

  getHelloSomething(something: string): string {
    return `Hello ${something}!`;
  }

  greet(): Record<string, Greet> {
    return {
      en: { code: 'en', language: 'English', text: 'Hello!!!' },
      es: { code: 'es', language: 'Spanish', text: 'Hola!!!' },
      br: { code: 'br', language: 'Brazilian Portuguese', text: 'Ola!!!' },
      cn: { code: 'cn', language: 'Traditional Chinese', text: '你好!!!' },
      de: { code: 'de', language: 'Germany', text: 'Hallo!!!' },
    };
  }
}
