import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EsemenyService } from './esemeny.service';
import { EsemenyekController } from './esemenyek.controller';
import { Esemeny } from '../entities/esemeny.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Esemeny])],
  providers: [EsemenyService],
  controllers: [EsemenyekController],
})
export class EsemenyekModule {}
