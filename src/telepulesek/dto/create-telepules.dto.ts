import { IsString, IsNotEmpty, IsOptional, ValidateIf } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateTelepulesDto {

    @IsNotEmpty({ message: 'A település neve kötelező!' })
    @IsString({ message: 'A település neve csak szöveg lehet!' })
    @ApiProperty({ description: 'A település neve', type: String })
    telepules_varos: string;

    @IsNotEmpty({ message: 'Az irányítószám megadása kötelező!' })
    @IsString({ message: 'Az irányítószám csak szöveg lehet!' })
    @ApiProperty({ description: 'A település irányítószáma', type: String })
    telepules_iranyitoszam: string;
    
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'A település megyéje (opcionális)', type: String, nullable: true })
    telepules_megye?: string | null;

}