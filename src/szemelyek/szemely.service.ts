import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Szemely } from '../entities/szemely.entity';
import { CreateSzemelyDto } from './dto/create-szemely.dto';
import { UpdateSzemelyDto } from './dto/update-szemely.dto';
import * as bcrypt from 'bcrypt';
import { QueryFailedError } from 'typeorm';
import { omit } from '../utils/utils';

@Injectable()
export class SzemelyService {
  constructor(
    @InjectRepository(Szemely)
    private szemelyRepository: Repository<Szemely>,
  ) {}

  async findAll(query: Partial<CreateSzemelyDto>): Promise<Partial<Szemely>[]> {
    const tiltottMezok = [
      'szemely_jelszo',
      'szemely_felhasznalonev',
      'szemely_email',
    ];
    const where = Object.keys(query)
      .filter(key => !tiltottMezok.includes(key) && query[key as keyof CreateSzemelyDto] !== undefined)
      .reduce((obj, key) => ({ ...obj, [key]: query[key as keyof CreateSzemelyDto] }), {});

    const szemelyek = await this.szemelyRepository.find({
      where,
      relations: ['szemely_cimek'],
    });
    return szemelyek.map(szemely => omit(szemely, ['szemely_jelszo']));
  }

  async findOne(tipus: number, azonosito: string): Promise<Partial<Szemely>> {
    let szuroFeltetel: {szemely_id?: number, szemely_felhasznalonev?: string, szemely_email?: string};
    if (tipus === 1) szuroFeltetel = { szemely_felhasznalonev: azonosito}
    else if (tipus === 2) szuroFeltetel = { szemely_email: azonosito}
    else szuroFeltetel = { szemely_id: +azonosito};
    const szemely = await this.szemelyRepository.findOne({ where: szuroFeltetel, relations: ['szemely_cimek'], });
    if (!szemely) {
      throw new NotFoundException('Személy nem található');
    }
    return omit(szemely,['szemely_jelszo']);
  }

  async findTorleshez(azonosito: number): Promise<Szemely> {
    const szemely = await this.szemelyRepository.findOne({ where: {szemely_id: azonosito}, relations: ['szemely_cimek'], });
    if (!szemely) {
      throw new NotFoundException('Személy nem található');
    }
    return szemely;
  }

  async create(createSzemelyDto: CreateSzemelyDto): Promise<Szemely> {
    const hashedPassword = await bcrypt.hash(createSzemelyDto.szemely_jelszo, 10);
    const szemely = this.szemelyRepository.create({
      ...createSzemelyDto,
      szemely_jelszo: hashedPassword,
    });
    try {
      const savedSzemely = await this.szemelyRepository.save(szemely);
      return savedSzemely;
    } catch (error: unknown) {
      if (error instanceof QueryFailedError && error.driverError?.code === 'SQLITE_CONSTRAINT') {
        if (error instanceof QueryFailedError && error.driverError?.code === 'SQLITE_CONSTRAINT') {
          if (error.message.includes('szemelyek.szemely_felhasznalonev')) {
            throw new BadRequestException('A felhasználónév már létezik.');
          }
          if (error.message.includes('szemelyek.szemely_email')) {
            throw new BadRequestException('Az email cím már létezik.');
          }
        }
        console.error('Ismeretlen hiba:', error);
        throw new BadRequestException('Hiba történt a személy létrehozása közben.');
      } else throw error;
    }
  }

  async update(id: number, updateSzemelyDto: UpdateSzemelyDto): Promise<Szemely> {
    const szemely = await this.findOne(0, id.toString());
    if (updateSzemelyDto.szemely_jelszo) {
      updateSzemelyDto.szemely_jelszo = await bcrypt.hash(updateSzemelyDto.szemely_jelszo, 10);
    }
    Object.assign(szemely, updateSzemelyDto);
    //console.log(updateSzemelyDto);
    //console.log(szemely);
    return this.szemelyRepository.save(szemely);
  }

  async delete(id: number): Promise<Szemely> {
    const szemely = await this.findTorleshez(id);
    return await this.szemelyRepository.remove(szemely);
  }
  
}
