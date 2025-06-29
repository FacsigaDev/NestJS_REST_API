import { IsString, IsDate, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCimDto {
  @ApiProperty({ description: 'A cím típusa', example: 'állandó', enum: ['állandó', 'tartózkodási', 'levelezési'] })
  @IsEnum(['állandó', 'tartózkodási', 'levelezési'])
  @IsNotEmpty()
  cim_tipus: string;

  @ApiProperty({ description: 'A cím irányítószáma', example: '1234' })
  @IsString()
  @IsNotEmpty()
  cim_iranyitoszam: string;

  @ApiProperty({ description: 'A cím városa', example: 'Budapest' })
  @IsString()
  @IsNotEmpty()
  cim_varos: string;

  @ApiProperty({ description: 'A cím utcája', example: 'Fő utca 1' })
  @IsString()
  @IsNotEmpty()
  cim_utca: string;
}