import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { Cim } from './cim.entity';
import { Feliratkozas } from './feliratkozas.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('szemelyek')
export class Szemely {
  @ApiProperty({ description: 'A személy egyedi azonosítója', example: 1 })
  @PrimaryGeneratedColumn({ type: 'integer' })
  szemely_id: number;

  @ApiProperty({ description: 'A személy vezetékneve', example: 'Kovács' })
  @Column()
  szemely_vezeteknev: string;

  @ApiProperty({ description: 'A személy keresztneve', example: 'Anna' })
  @Column()
  szemely_keresztnev: string;

  @ApiProperty({ description: 'A személy születési dátuma (opcionális)', example: '1990-01-01', required: false })
  @Column({ type: 'date', nullable: true })
  szemely_szuletesi_datum?: Date | null;

  @ApiProperty({ description: 'A személy anyjának neve (opcionális)', example: 'Szabó Mária', required: false })
  @Column({ type: 'text', nullable: true })
  szemely_anyja_neve?: string | null;

  @ApiProperty({ description: 'A személy végzettsége', example: 'középfok', enum: ['nincs', 'alapfok', 'középfok', 'felsőfok'] })
  @Column({
    type: 'varchar',
    enum: ['nincs', 'alapfok', 'középfok', 'felsőfok'],
    default: 'nincs',
  })
  szemely_vegzettseg: string;

  @ApiProperty({ description: 'A személy email címe', example: 'kovacs.anna@example.com' })
  @Column({ unique: true })
  szemely_email: string;

  @ApiProperty({ description: 'A személy telefonszáma (opcionális)', example: '+36301234567', required: false })
  @Column({ type: 'text', nullable: true })
  szemely_telefon?: string | null;

  @ApiProperty({ description: 'A személy felhasználóneve', example: 'kovacsanna' })
  @Column({ unique: true })
  szemely_felhasznalonev: string;

  @ApiProperty({ description: 'A személy jelszava (titkosítva tárolva)', example: 'Titkos123' })
  @Column()
  szemely_jelszo: string;

  @ApiProperty({ description: 'A személy jogosultsága', example: 'user', enum: ['nincs', 'user', 'admin'] })
  @Column({
    type: 'varchar',
    enum: ['nincs', 'user', 'admin'],
    default: 'nincs',
  })
  szemely_jogosultsag: string;

  @ApiProperty({ description: 'A személy törlésének időpontja (soft delete)', example: '2025-06-28T13:00:00Z', required: false })
  @DeleteDateColumn()
  szemely_torolve?: Date;

  @ApiProperty({ description: 'A személyhez tartozó címek', type: [Cim] })
  @OneToMany(() => Cim, (cim) => cim.cim_szemely, { cascade: ['insert', 'update', 'remove'] })
  szemely_cimek: Cim[];

  @ApiProperty({ description: 'A személyhez tartozó feliratkozások', type: [Feliratkozas] })
  @OneToMany(() => Feliratkozas, (feliratkozas) => feliratkozas.feliratkozas_szemely, { cascade: ['insert', 'update', 'remove'] })
  szemely_feliratkozasok: Feliratkozas[];
}