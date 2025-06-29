import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HirService } from './hir.service';
import { HirekController } from './hirek.controller';
import { Hir } from '../entities/hir.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hir])],
  providers: [HirService],
  controllers: [HirekController],
})
export class HirekModule {}
