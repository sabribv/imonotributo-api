import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5000'],
    methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
  });

  await app.listen(3000);
}
bootstrap();
