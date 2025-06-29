import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feliratkozas } from '../entities/feliratkozas.entity';
import { Szemely } from '../entities/szemely.entity';
import { Esemeny } from '../entities/esemeny.entity';
import { CreateFeliratkozasDto } from './dto/create-feliratkozas.dto';

@Injectable()
export class FeliratkozasService {
  constructor(
    @InjectRepository(Feliratkozas)
    private feliratkozasRepository: Repository<Feliratkozas>,
    @InjectRepository(Szemely)
    private szemelyRepository: Repository<Szemely>,
    @InjectRepository(Esemeny)
    private esemenyRepository: Repository<Esemeny>,
  ) {}

  async findAll(): Promise<Feliratkozas[]> {
    return this.feliratkozasRepository.find({ relations: ['feliratkozas_szemely', 'feliratkozas_esemeny'] });
  }

  async findOne(feliratkozas_id: number): Promise<Feliratkozas> {
    const feliratkozas = await this.feliratkozasRepository.findOne({
      where: { feliratkozas_id },
      relations: ['feliratkozas_szemely', 'feliratkozas_esemeny'],
    });
    if (!feliratkozas) {
      throw new NotFoundException('Jelentkezés nem található');
    }
    return feliratkozas;
  }

  async adottSzemelyEsemenyei(szemely_id: number): Promise<Esemeny[]> {
    return this.esemenyRepository
      .createQueryBuilder('esemeny')
      .innerJoin('esemeny.esemeny_feliratkozasok', 'feliratkozas')
      .where('feliratkozas.feliratkozas_szemely_id = :szemely_id', { szemely_id })
      .getMany();
  }

  async adottEsemenySzemelyei(esemeny_id: number): Promise<Szemely[]> {
    return this.szemelyRepository
      .createQueryBuilder('szemely')
      .innerJoin('szemely.szemely_feliratkozasok', 'feliratkozas')
      .where('feliratkozas.feliratkozas_esemeny_id = :esemeny_id', { esemeny_id })
      .getMany();
  }

  async create(createFeliratkozasDto: CreateFeliratkozasDto): Promise<Feliratkozas> {
    const szemely = await this.szemelyRepository.findOne({where: {szemely_id: createFeliratkozasDto.feliratkozas_szemely_id}});
    const esemeny = await this.esemenyRepository.findOne({where: {esemeny_id: createFeliratkozasDto.feliratkozas_esemeny_id}});

    if (!szemely || !esemeny) {
      throw new NotFoundException('Személy vagy esemény nem található');
    }

    const letezoFeliratkozas = await this.feliratkozasRepository.findOne({
      where: {
        feliratkozas_szemely_id: createFeliratkozasDto.feliratkozas_szemely_id,
        feliratkozas_esemeny_id: createFeliratkozasDto.feliratkozas_esemeny_id
      }
    })
    if (!!letezoFeliratkozas) {
      throw new BadRequestException('A megadott eseményre, a megadott személy már feliratkozott');
    }

    const currentFeliratkozas = await this.feliratkozasRepository.count({ where: { feliratkozas_esemeny: esemeny } });
    if (currentFeliratkozas >= esemeny.esemeny_max_fo) {
      throw new BadRequestException('Az esemény elérte a maximális létszámot');
    }

    const feliratkozas = this.feliratkozasRepository.create({
      feliratkozas_szemely: szemely,
      feliratkozas_esemeny: esemeny,
    });
    return this.feliratkozasRepository.save(feliratkozas);
  }

  async remove(id: number): Promise<Feliratkozas> {
    const feliratkozas = await this.findOne(id);
    return await this.feliratkozasRepository.remove(feliratkozas);
  }
}
