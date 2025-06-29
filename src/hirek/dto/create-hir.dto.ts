import { IsNotEmpty, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHirDto {
  @ApiProperty({ description: 'A hír címe', example: 'Új esemény bejelentése' })
  @IsNotEmpty()
  hir_cim: string;

  @ApiProperty({ description: 'A hír tartalma', example: 'Új esemény kerül megrendezésre decemberben.' })
  @IsNotEmpty()
  hir_tartalom: string;

  @ApiProperty({ description: 'A hír dátuma (opcionális)', example: '2025-06-28', required: false })
  @IsOptional()
  @IsDateString()
  hir_datum?: Date | null;
}