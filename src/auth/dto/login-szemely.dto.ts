import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginSzemelyDto {
  @ApiProperty({ description: 'A személy email címe (opcionális, ha felhasználónév meg van adva)', example: 'kovacs.anna@example.com', required: false })
  @IsString()
  @IsEmail()
  @IsOptional()
  szemely_email: string;

  @ApiProperty({ description: 'A személy felhasználóneve (opcionális, ha email cím meg van adva)', example: 'kovacsanna', required: false })
  @IsString()
  @IsOptional()
  szemely_felhasznalonev: string;

  @ApiProperty({ description: 'A személy jelszava', example: 'Titkos123' })
  @IsNotEmpty({ message: 'A jelszó megadása kötelező!' })
  szemely_jelszo: string;
}