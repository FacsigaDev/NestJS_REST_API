import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hir } from '../entities/hir.entity';
import { CreateHirDto } from './dto/create-hir.dto';
import { UpdateHirDto } from './dto/update-hir.dto';

@Injectable()
export class HirService {
  constructor(
    @InjectRepository(Hir)
    private hirRepository: Repository<Hir>,
  ) {}

  async findAll(): Promise<Hir[]> {
    return this.hirRepository.find();
  }

  async findOne(hir_id: number): Promise<Hir> {
    const hir = await this.hirRepository.findOne({ where: { hir_id } });
    if (!hir) {
      throw new NotFoundException('Hír nem található');
    }
    return hir;
  }

  async create(createHirDto: CreateHirDto): Promise<Hir> {
    const hir = this.hirRepository.create(createHirDto);
    return this.hirRepository.save(hir);
  }

  async update(id: number, updateHirDto: UpdateHirDto): Promise<Hir> {
    const hir = await this.findOne(id);
    Object.assign(hir, updateHirDto);
    return this.hirRepository.save(hir);
  }

  async remove(id: number): Promise<Hir> {
    const hir = await this.findOne(id);
    return await this.hirRepository.remove(hir);
  }
}
