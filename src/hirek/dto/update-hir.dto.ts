import { PartialType } from '@nestjs/mapped-types';
import { CreateHirDto } from './create-hir.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateHirDto extends PartialType(CreateHirDto) {
  @ApiProperty({ description: 'A hír címe (opcionális)', example: 'Új esemény bejelentése', required: false })
  hir_cim?: string;

  @ApiProperty({ description: 'A hír tartalma (opcionális)', example: 'Új esemény kerül megrendezésre decemberben.', required: false })
  hir_tartalom?: string;

  @ApiProperty({ description: 'A hír dátuma (opcionális)', example: '2025-06-28', required: false })
  hir_datum?: Date | null;
}