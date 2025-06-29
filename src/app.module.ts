import { Module, BadRequestException } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { SzemelyekModule } from './szemelyek/szemelyek.module';
import { EsemenyekModule } from './esemenyek/esemenyek.module';
import { FeliratkozasokModule } from './feliratkozasok/feliratkozasok.module';
import { HirekModule } from './hirek/hirek.module';
import { TelepulesekModule } from './telepulesek/telepulesek.module';
import { TesztAdatokModule } from './teszt-adatok/teszt-adatok.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { configModuleConfig } from './config/configModule.config';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot(configModuleConfig),
    AuthModule,
    SzemelyekModule,
    EsemenyekModule,
    FeliratkozasokModule,
    HirekModule,
    TelepulesekModule,
    TesztAdatokModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        disableErrorMessages: false,
        exceptionFactory: (errors) => {
          console.log(' Validációs hibák: ', JSON.stringify(errors, null, 2));
          const messages = errors
            .reduce((acc, error) => {
              if (error.constraints) {
                acc.push(...Object.values(error.constraints));
              }
              return acc;
            }, [] as string[])
            .filter((message) => message !== undefined);
          console.log('Validációs üzenetek: ', JSON.stringify(messages, null, 2));
          return new BadRequestException({
            statusCode: 400,
            message: messages.length > 0 ? messages : ['Érvénytelen bemenet'],
            error: 'Bad Request',
          });
        },
      }),
    },
  ],
})
export class AppModule {}
