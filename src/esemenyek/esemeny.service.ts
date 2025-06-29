import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Esemeny } from '../entities/esemeny.entity';
import { CreateEsemenyDto } from './dto/create-esemeny.dto';
import { UpdateEsemenyDto } from './dto/update-esemeny.dto';

@Injectable()
export class EsemenyService {
  constructor(
    @InjectRepository(Esemeny)
    private esemenyRepository: Repository<Esemeny>,
  ) {}

  async findAll(): Promise<Esemeny[]> {
    return this.esemenyRepository.find();
  }

  async findOne(id: number): Promise<Esemeny> {
    const event = await this.esemenyRepository.findOne({ where: { esemeny_id: id } });
    if (!event) {
      throw new NotFoundException('Esemény nem található');
    }
    return event;
  }

  async create(createEsemenyDto: CreateEsemenyDto): Promise<Esemeny> {
    const esemeny = this.esemenyRepository.create(createEsemenyDto);
    return this.esemenyRepository.save(esemeny);
  }

  async update(id: number, updateEsemenyDto: UpdateEsemenyDto): Promise<Esemeny> {
    const event = await this.findOne(id);
    Object.assign(event, updateEsemenyDto);
    return this.esemenyRepository.save(event);
  }

  async delete(id: number): Promise<Esemeny> {
    const event = await this.findOne(id);
    return await this.esemenyRepository.remove(event);
  }
}
