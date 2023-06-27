import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/John (GET)', () => {
    return request(app.getHttpServer())
      .get('/John ')
      .expect(200)
      .expect('Hello John!');
  });

  it('/greet (GET)', () => {
    return request(app.getHttpServer())
      .get('/greet ')
      .expect(200)
      .expect({
        en: { code: 'en', language: 'English', text: 'Hello!!!' },
        es: { code: 'es', language: 'Spanish', text: 'Hola!!!' },
        br: { code: 'br', language: 'Brazilian Portuguese', text: 'Ola!!!' },
        cn: { code: 'cn', language: 'Traditional Chinese', text: '你好!!!' },
        de: { code: 'de', language: 'Germany', text: 'Hallo!!!' },
      });
  });
});
