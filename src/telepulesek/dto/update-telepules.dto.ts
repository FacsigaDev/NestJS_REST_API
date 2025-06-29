import { PartialType } from "@nestjs/mapped-types";
import { CreateTelepulesDto } from "./create-telepules.dto";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTelepulesDto extends PartialType(CreateTelepulesDto) {
    @ApiProperty({ description: 'A település neve (opcionális)', type: String, required: false })
    telepules_varos?: string;

    @ApiProperty({ description: 'A település irányítószáma (opcionális)', type: String, required: false })
    telepules_iranyitoszam?: string;

    @ApiProperty({ description: 'A település megyéje (opcionális)', type: String, nullable: true, required: false })
    telepules_megye?: string | null;
}