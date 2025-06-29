import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index, JoinColumn } from 'typeorm';
import { Szemely } from './szemely.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('cimek')
@Index(['cim_szemely_id', 'cim_tipus'], { unique: true })
export class Cim {
  @ApiProperty({ description: 'A cím egyedi azonosítója', example: 1 })
  @PrimaryGeneratedColumn()
  cim_id: number;

  @ApiProperty({ description: 'A cím típusa', example: 'állandó', enum: ['állandó', 'tartózkodási', 'levelezési'] })
  @Column({
    type: 'varchar',
    enum: ['állandó', 'tartózkodási', 'levelezési'],
  })
  cim_tipus: string;

  @ApiProperty({ description: 'A cím irányítószáma', example: '1234' })
  @Column()
  cim_iranyitoszam: string;

  @ApiProperty({ description: 'A cím városa', example: 'Budapest' })
  @Column()
  cim_varos: string;

  @ApiProperty({ description: 'A cím utcája', example: 'Fő utca 1' })
  @Column()
  cim_utca: string;

  @ApiProperty({ description: 'A címhez tartozó személy azonosítója', example: 1 })
  @Column({ nullable: false })
  cim_szemely_id: number;

  //@ApiProperty({ description: 'A címhez tartozó személy', type: Szemely })
  @ManyToOne(() => Szemely, (szemely) => szemely.szemely_cimek, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cim_szemely_id' })
  cim_szemely: Szemely;
}