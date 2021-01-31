import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // decorator가 없는 property의 object는 걸러줌 
    forbidNonWhitelisted: true,// decorator 가 없는 object를 보내면 request 막아버림
    transform: true, // user가 보낸 데이터를 원하는 실제 타입으로 변환해줌
  }))
  await app.listen(3000);
}
bootstrap();
