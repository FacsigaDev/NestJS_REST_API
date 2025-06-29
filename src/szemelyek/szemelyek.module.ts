import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SzemelyService } from './szemely.service';
import { SzemelyekController } from './szemelyek.controller';
import { Szemely } from '../entities/szemely.entity';
import { Cim } from '../entities/cim.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Szemely, Cim])],
  providers: [SzemelyService],
  controllers: [SzemelyekController],
})
export class SzemelyekModule {}
