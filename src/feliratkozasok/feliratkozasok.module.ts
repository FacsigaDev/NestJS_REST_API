import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeliratkozasService } from './feliratkozas.service';
import { FeliratkozasokController } from './feliratkozasok.controller';
import { Feliratkozas } from '../entities/feliratkozas.entity';
import { Szemely } from '../entities/szemely.entity';
import { Esemeny } from '../entities/esemeny.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feliratkozas, Szemely, Esemeny])],
  providers: [FeliratkozasService],
  controllers: [FeliratkozasokController],
})
export class FeliratkozasokModule {}
