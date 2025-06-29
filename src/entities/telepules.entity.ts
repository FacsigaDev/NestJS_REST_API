import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('telepulesek')
export class Telepules {

    @PrimaryGeneratedColumn({ type: 'integer' })
    @ApiProperty({ description: 'A település egyedi azonosítója', type: Number })
    telepules_id: number;

    @Column()
    @ApiProperty({ description: 'A település irányítószáma', type: String })
    telepules_iranyitoszam: string;

    @Column()
    @ApiProperty({ description: 'A település neve', type: String })
    telepules_varos: string;

    @Column({ type: 'text', nullable: true })
    @ApiProperty({ description: 'A település megyéje (opcionális)', type: String, nullable: true })
    telepules_megye?: string | null;

}