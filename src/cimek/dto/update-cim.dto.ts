import { PartialType } from '@nestjs/mapped-types';
import { CreateCimDto } from './create-cim.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCimDto extends PartialType(CreateCimDto) {
  @ApiProperty({ description: 'A cím típusa (opcionális)', example: 'állandó', enum: ['állandó', 'tartózkodási', 'levelezési'], required: false })
  cim_tipus?: string;

  @ApiProperty({ description: 'A cím irányítószáma (opcionális)', example: '1234', required: false })
  cim_iranyitoszam?: string;

  @ApiProperty({ description: 'A cím városa (opcionális)', example: 'Budapest', required: false })
  cim_varos?: string;

  @ApiProperty({ description: 'A cím utcája (opcionális)', example: 'Fő utca 1', required: false })
  cim_utca?: string;
}