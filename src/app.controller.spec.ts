import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('Test HelloSomething', () => {
    it('should return "Hello John!"', () => {
      expect(appController.getHelloSomething('John')).toBe('Hello John!');
    });

    it('should return "Hello John Wick!"', () => {
      expect(appController.getHelloSomething('John Wick')).toBe(
        'Hello John Wick!',
      );
    });
  });

  describe('Test greet', () => {
    it('should return greeting', () => {
      expect(appController.greet()).toEqual({
        en: { code: 'en', language: 'English', text: 'Hello!!!' },
        es: { code: 'es', language: 'Spanish', text: 'Hola!!!' },
        br: { code: 'br', language: 'Brazilian Portuguese', text: 'Ola!!!' },
        cn: { code: 'cn', language: 'Traditional Chinese', text: '你好!!!' },
        de: { code: 'de', language: 'Germany', text: 'Hallo!!!' },
      });
    });
  });
});
