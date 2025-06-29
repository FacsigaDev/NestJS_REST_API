import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('hirek')
export class Hir {
  @ApiProperty({ description: 'A hír egyedi azonosítója', example: 1 })
  @PrimaryGeneratedColumn()
  hir_id: number;

  @ApiProperty({ description: 'A hír címe', example: 'Új esemény bejelentése' })
  @Column()
  hir_cim: string;

  @ApiProperty({ description: 'A hír tartalma', example: 'Új esemény kerül megrendezésre decemberben.' })
  @Column()
  hir_tartalom: string;

  @ApiProperty({ description: 'A hír dátuma (opcionális)', example: '2025-06-28', required: false })
  @Column({ type: 'date', nullable: true })
  hir_datum?: Date | null;
}