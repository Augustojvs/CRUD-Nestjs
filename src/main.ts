import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

//https://www.youtube.com/watch?v=cBIUOL6MFXw
//https://cloud.mongodb.com/v2/634d6e771690640226942e66#clusters
