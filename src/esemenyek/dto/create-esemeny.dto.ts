import { IsNotEmpty, IsDateString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEsemenyDto {
  @ApiProperty({ description: 'Az esemény neve', example: 'Éves konferencia' })
  @IsNotEmpty()
  esemeny_nev: string;

  @ApiProperty({ description: 'Az esemény leírása', example: 'Éves szakmai konferencia a technológiai újításokról' })
  @IsNotEmpty()
  esemeny_leiras: string;

  @ApiProperty({ description: 'Az esemény helyszíne', example: 'Budapest, Kongresszusi Központ' })
  @IsNotEmpty()
  esemeny_helyszin: string;

  @ApiProperty({ description: 'Az esemény időpontja (ISO 8601 formátumban)', example: '2025-12-01T10:00:00Z' })
  @IsDateString()
  esemeny_idopont: string;

  @ApiProperty({ description: 'Az esemény maximális létszáma', example: 100 })
  @Min(1)
  esemeny_max_fo: number;
}