import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as cookieParser from 'cookie-parser';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { firebaseConfig } from './firebaseConfig';

async function bootstrap() {
  const apps = initializeApp(firebaseConfig);
  const storage = getStorage(apps);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cookieParser('secretKey'));
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
