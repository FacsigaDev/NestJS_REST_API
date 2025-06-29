import { IsString, IsEmail, IsOptional, IsArray, ValidateNested, IsNotEmpty, Matches, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCimDto } from '../../cimek/dto/create-cim.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSzemelyDto {
  @ApiProperty({ description: 'A személy vezetékneve', example: 'Kovács' })
  @IsString()
  @IsNotEmpty({ message: 'A vezetéknév kötelező' })
  szemely_vezeteknev: string;

  @ApiProperty({ description: 'A személy keresztneve', example: 'Anna' })
  @IsString()
  @IsNotEmpty({ message: 'A keresztnév kötelező' })
  szemely_keresztnev: string;

  @ApiProperty({ description: 'A személy születési dátuma (opcionális)', example: '1990-01-01', required: false })
  @IsOptional()
  @IsDateString()
  szemely_szuletesi_datum?: Date | null;

  @ApiProperty({ description: 'A személy anyjának neve (opcionális)', example: 'Szabó Mária', required: false })
  @IsOptional()
  @IsString()
  szemely_anyja_neve?: string | null;

  @ApiProperty({ description: 'A személy végzettsége', example: 'középfok', enum: ['nincs', 'alapfok', 'középfok', 'felsőfok'] })
  @IsString()
  @IsNotEmpty({ message: 'A végzettség kötelező' })
  szemely_vegzettseg: string;

  @ApiProperty({ description: 'A személy email címe', example: 'kovacs.anna@example.com' })
  @IsEmail({}, { message: 'Érvénytelen email cím' })
  @IsNotEmpty({ message: 'Az email kötelező' })
  szemely_email: string;

  @ApiProperty({ description: 'A személy telefonszáma (opcionális)', example: '+36301234567', required: false })
  @IsOptional()
  @IsString()
  @Matches(/^\+36|06(20|30|50|70)\d{7}$|^\+36|06\s(20|30|50|70)\s\d{3}\s\d{4}$/, {
    message: 'Érvénytelen telefonszám formátum. Használja a +36301234567 vagy +36 30 123 4567 formátumot.',
  })
  szemely_telefon?: string | null;

  @ApiProperty({ description: 'A személy felhasználóneve', example: 'kovacsanna' })
  @IsString()
  @IsNotEmpty({ message: 'A felhasználónév kötelező' })
  szemely_felhasznalonev: string;

  @ApiProperty({ description: 'A személy jelszava', example: 'Titkos123' })
  @IsString()
  @IsNotEmpty({ message: 'A jelszó kötelező' })
  szemely_jelszo: string;

  @ApiProperty({ description: 'A személy jogosultsága', example: 'user', enum: ['nincs', 'user', 'admin'] })
  @IsString()
  @IsNotEmpty({ message: 'A jogosultság kötelező' })
  szemely_jogosultsag: string;

  @ApiProperty({ description: 'A személyhez tartozó címek (opcionális)', type: [CreateCimDto], required: false })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCimDto)
  @IsOptional()
  szemely_cimek: CreateCimDto[];
}