import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Feliratkozas } from './feliratkozas.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('esemenyek')
export class Esemeny {
  @ApiProperty({ description: 'Az esemény egyedi azonosítója', example: 1 })
  @PrimaryGeneratedColumn()
  esemeny_id: number;

  @ApiProperty({ description: 'Az esemény neve', example: 'Éves konferencia' })
  @Column()
  esemeny_nev: string;

  @ApiProperty({ description: 'Az esemény leírása', example: 'Éves szakmai konferencia a technológiai újításokról' })
  @Column({ type: 'text' })
  esemeny_leiras: string;

  @ApiProperty({ description: 'Az esemény helyszíne', example: 'Budapest, Kongresszusi Központ' })
  @Column()
  esemeny_helyszin: string;

  @ApiProperty({ description: 'Az esemény időpontja', example: '2025-12-01T10:00:00Z' })
  @Column()
  esemeny_idopont: Date;

  @ApiProperty({ description: 'Az esemény maximális létszáma', example: 100 })
  @Column()
  esemeny_max_fo: number;

  @ApiProperty({ description: 'Az eseményhez tartozó feliratkozások', type: [Feliratkozas] })
  @OneToMany(() => Feliratkozas, (feliratkozas) => feliratkozas.feliratkozas_esemeny, { cascade: ['insert', 'update', 'remove'] })
  esemeny_feliratkozasok: Feliratkozas[];
}