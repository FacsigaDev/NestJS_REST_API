import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Szemely } from './szemely.entity';
import { Esemeny } from './esemeny.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('feliratkozasok')
@Index(['feliratkozas_szemely_id', 'feliratkozas_esemeny_id'], { unique: true })
export class Feliratkozas {
  @ApiProperty({ description: 'A feliratkozás egyedi azonosítója', example: 1 })
  @PrimaryGeneratedColumn()
  feliratkozas_id: number;

  @ApiProperty({ description: 'A feliratkozó személy azonosítója', example: 1 })
  @Column({ nullable: false })
  feliratkozas_szemely_id: number;

  @ApiProperty({ description: 'Az esemény azonosítója', example: 1 })
  @Column({ nullable: false })
  feliratkozas_esemeny_id: number;

  //@ApiProperty({ description: 'A feliratkozó személy', type: Szemely })
  @ManyToOne(() => Szemely, (szemely) => szemely.szemely_feliratkozasok, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'feliratkozas_szemely_id' })
  feliratkozas_szemely: Szemely;

  @ApiProperty({ description: 'A feliratkozás eseménye', type: Esemeny })
  @ManyToOne(() => Esemeny, (esemeny) => esemeny.esemeny_feliratkozasok, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'feliratkozas_esemeny_id' })
  feliratkozas_esemeny: Esemeny;
}