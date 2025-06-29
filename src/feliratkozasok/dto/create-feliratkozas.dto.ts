import { IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFeliratkozasDto {
  @ApiProperty({ description: 'A feliratkozó személy azonosítója', example: 1 })
  @IsNumber({}, { message: 'A személy azonosító csak szám lehet!' })
  @IsNotEmpty({ message: 'A személy azonosító megadása kötelező!' })
  feliratkozas_szemely_id: number;

  @ApiProperty({ description: 'Az esemény azonosítója', example: 1 })
  @IsNumber({}, { message: 'Az esemény azonosító csak szám lehet!' })
  @IsNotEmpty({ message: 'Az esemény azonosító megadása kötelező!' })
  feliratkozas_esemeny_id: number;
}