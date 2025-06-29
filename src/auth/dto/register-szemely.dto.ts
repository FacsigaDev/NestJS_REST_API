import { IsString, IsDate, IsNotEmpty, IsEmail, IsOptional, MinLength, Matches, ValidateNested, IsEnum, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCimDto } from '../../cimek/dto/create-cim.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterSzemelyDto {
  @ApiProperty({ description: 'A személy vezetékneve', example: 'Kovács' })
  @IsString()
  @IsNotEmpty()
  szemely_vezeteknev: string;

  @ApiProperty({ description: 'A személy keresztneve', example: 'Anna' })
  @IsString()
  @IsNotEmpty()
  szemely_keresztnev: string;

  @ApiProperty({ description: 'A személy születési dátuma (opcionális)', example: '1990-01-01', required: false })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  szemely_szuletesi_datum?: Date;

  @ApiProperty({ description: 'A személy anyjának neve (opcionális)', example: 'Szabó Mária', required: false })
  @IsString()
  @IsOptional()
  szemely_anyja_neve?: string;

  @ApiProperty({ description: 'A személy végzettsége', example: 'középfok', enum: ['nincs', 'alapfok', 'középfok', 'felsőfok'] })
  @IsEnum(['nincs', 'alapfok', 'középfok', 'felsőfok'])
  @IsNotEmpty({ message: 'A végzettség megadása kötelező' })
  szemely_vegzettseg: string;

  @ApiProperty({ description: 'A személy email címe', example: 'kovacs.anna@example.com' })
  @IsEmail()
  @IsNotEmpty({ message: 'Az email cím megadása kötelező' })
  szemely_email: string;

  @ApiProperty({ description: 'A személy telefonszáma (opcionális)', example: '+36301234567', required: false })
  @IsString()
  @IsOptional()
  @Matches(/^\+36|06(20|30|50|70)\d{7}$|^\+36|06\s(20|30|70)\s\d{3}\s\d{4}$/, {
    message: 'Érvénytelen telefonszám formátum. Használja a +36301234567 vagy +36 30 123 4567 formátumot.',
  })
  szemely_telefon?: string;

  @ApiProperty({ description: 'A személy felhasználóneve', example: 'kovacsanna' })
  @IsString()
  @IsNotEmpty({ message: 'A felhasználóinév megadása kötelező' })
  szemely_felhasznalonev: string;

  @ApiProperty({ description: 'A személy jelszava (legalább 8 karakter, kisbetű, nagybetű és szám)', example: 'Titkos123' })
  @IsString()
  @IsNotEmpty({ message: 'A jelszó megadása kötelező' })
  @MinLength(8, { message: 'A jelszónak legalább 8 karakter hosszúnak kell lennie' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'A jelszónak tartalmaznia kell kisbetűt, nagybetűt és számot',
  })
  szemely_jelszo: string;

  @ApiProperty({ description: 'A személyhez tartozó címek (opcionális)', type: [CreateCimDto], required: false })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCimDto)
  @IsOptional()
  szemely_cimek: CreateCimDto[];
}