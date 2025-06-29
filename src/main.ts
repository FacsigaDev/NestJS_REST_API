import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { useContainer } from 'class-validator';
import * as helmet from 'helmet';
import { Request, Response, NextFunction } from 'express';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';
import * as fs from 'fs';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, { logger: ['error', 'warn', 'debug', 'verbose'] });
    
    // CORS konfiguráció
    app.enableCors({
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      credentials: true,
    });

    // Biztonsági fejlécek (helmet)
    app.use(helmet.default());
    app.use(helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
      },
    }));

    const configService = app.get(ConfigService);

    app.use(express.json());

    app.use((req: Request, res: Response, next: NextFunction) => {
      //console.log(`Request: ${req.method} ${req.url}`);
      //console.log(req.body);
      //console.log(req.headers);
      next();
    });

    // Swagger konfiguráció
    const config = new DocumentBuilder()
      .setTitle('NestJS keretrendszerrel készített REST API')
      .setDescription('REST API személyek, címek, események, feliratkozások, hírek és települések kezelésére')
      .setVersion('1.0')
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        'JWT-auth'
      )
      .build();
    const document = SwaggerModule.createDocument(app, config);
    const theme = new SwaggerTheme();
    const customCss = theme.getBuffer(SwaggerThemeNameEnum.MATERIAL) + `
      .swagger-ui .scheme-container {
        padding: 15px; /* Több hely a Schema panel körül */
      }
      .swagger-ui .model {
        margin-top: 10px;
        font-size: 14px;
      }
      .swagger-ui button {
        height: 30px !important;
      }
      .swagger-ui .model-box {
        margin-bottom: 15px; /* Több hely a sémák között */
      }
      .swagger-ui .model-toggle {
        font-size: 0.85em; /* Kisebb lenyíló ikonok a jobb arányért */
        vertical-align: middle; /* Lenyíló jelek igazítása */
      }
      .swagger-ui .model-toggle.collapsed {
        margin-top: -15px;
      }
      .swagger-ui .model-title {
        font-size: 1.1em; /* Kicsit nagyobb címsorok a sémákhoz */
      }
    `;
    fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));
    SwaggerModule.setup('api', app, document, {
      explorer: true, // Engedélyezi az "Execute" gombot
      customCss,
      customSiteTitle: 'Települések API Dokumentáció',
    });

    useContainer(app.select(AppModule), { fallbackOnErrors: true });

    const port = configService.get<number>('PORT') || 3000;
    await app.listen(port);
    console.log(`A szerver elérhető: http://localhost:${port}`);
    console.log(`Swagger dokumentáció: http://localhost:${port}/api`);
  } catch (error) {
    console.error('Hiba a szerver indításakor: ', error);
  }
}
bootstrap();