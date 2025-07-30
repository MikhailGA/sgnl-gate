import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import morgan from 'morgan';
import { json } from 'express';
import 'multer';

async function bootstrap() {
  const globalPrefix = 'api';

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('SGNL Gate API')
    .setVersion('1.0')
    .addTag('sgnl-gate')
    .build();

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true, // Allow all origins
    credentials: true,
  });

  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.use(json({ limit: '50mb' }));

  app.use(morgan('tiny'));

  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: false,
  });
  SwaggerModule.setup('swagger', app, document);

  const port = process.env.PORT || 3001;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
