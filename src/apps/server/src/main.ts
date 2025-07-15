/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();


// import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// import { json } from 'express';
// import * as morgan from 'morgan';

// async function bootstrap() {
//   const config = new DocumentBuilder()
//     .addBearerAuth()
//     .setTitle('SGNL Gate API')
//     .setVersion('1.0')
//     .addTag('sgnl-gate')
//     .build();

//   const app = await NestFactory.create(AppModule);

//   app.setGlobalPrefix('api');

//   app.useGlobalPipes(
//     new ValidationPipe({
//       transform: true,
//     }),
//   );

//   app.use(json({ limit: '50mb' }));
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//   app.use(morgan('tiny'));

//   const document = SwaggerModule.createDocument(app, config, {
//     ignoreGlobalPrefix: false,
//   });
//   SwaggerModule.setup('swagger', app, document);

//   await app.listen(3001);
// }
// bootstrap();
