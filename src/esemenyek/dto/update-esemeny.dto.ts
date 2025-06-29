import { PartialType } from '@nestjs/mapped-types';
import { CreateEsemenyDto } from './create-esemeny.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEsemenyDto extends PartialType(CreateEsemenyDto) {
  @ApiProperty({ description: 'Az esemény neve (opcionális)', example: 'Éves konferencia', required: false })
  esemeny_nev?: string;

  @ApiProperty({ description: 'Az esemény leírása (opcionális)', example: 'Éves szakmai konferencia a technológiai újításokról', required: false })
  esemeny_leiras?: string;

  @ApiProperty({ description: 'Az esemény helyszíne (opcionális)', example: 'Budapest, Kongresszusi Központ', required: false })
  esemeny_helyszin?: string;

  @ApiProperty({ description: 'Az esemény időpontja (ISO 8601 formátumban, opcionális)', example: '2025-12-01T10:00:00Z', required: false })
  esemeny_idopont?: string;

  @ApiProperty({ description: 'Az esemény maximális létszáma (opcionális)', example: 100, required: false })
  esemeny_max_fo?: number;
}