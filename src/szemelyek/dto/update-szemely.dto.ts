import { PartialType } from '@nestjs/mapped-types';
import { CreateSzemelyDto } from './create-szemely.dto';
import { CreateCimDto } from '../../cimek/dto/create-cim.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSzemelyDto extends PartialType(CreateSzemelyDto) {
  @ApiProperty({ description: 'A személy vezetékneve (opcionális)', example: 'Kovács', required: false })
  szemely_vezeteknev?: string;

  @ApiProperty({ description: 'A személy keresztneve (opcionális)', example: 'Anna', required: false })
  szemely_keresztnev?: string;

  @ApiProperty({ description: 'A személy születési dátuma (opcionális)', example: '1990-01-01', required: false })
  szemely_szuletesi_datum?: Date | null;

  @ApiProperty({ description: 'A személy anyjának neve (opcionális)', example: 'Szabó Mária', required: false })
  szemely_anyja_neve?: string | null;

  @ApiProperty({ description: 'A személy végzettsége (opcionális)', example: 'középfok', enum: ['nincs', 'alapfok', 'középfok', 'felsőfok'], required: false })
  szemely_vegzettseg?: string;

  @ApiProperty({ description: 'A személy email címe (opcionális)', example: 'kovacs.anna@example.com', required: false })
  szemely_email?: string;

  @ApiProperty({ description: 'A személy telefonszáma (opcionális)', example: '+36301234567', required: false })
  szemely_telefon?: string | null;

  @ApiProperty({ description: 'A személy felhasználóneve (opcionális)', example: 'kovacsanna', required: false })
  szemely_felhasznalonev?: string;

  @ApiProperty({ description: 'A személy jelszava (opcionális)', example: 'Titkos123', required: false })
  szemely_jelszo?: string;

  @ApiProperty({ description: 'A személy jogosultsága (opcionális)', example: 'user', enum: ['nincs', 'user', 'admin'], required: false })
  szemely_jogosultsag?: string;

  @ApiProperty({ description: 'A személyhez tartozó címek (opcionális)', type: [CreateCimDto], required: false })
  szemely_cimek?: CreateCimDto[];
}