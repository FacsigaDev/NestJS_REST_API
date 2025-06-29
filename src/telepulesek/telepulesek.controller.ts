import { Controller, Post, Get, Put, Patch, Delete, Body, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from "@nestjs/swagger";
import { TelepulesService } from "./telepules.service";
import { CreateTelepulesDto } from "./dto/create-telepules.dto";
import { UpdateTelepulesDto } from "./dto/update-telepules.dto";

@ApiTags('Települések')
@Controller('telepulesek')
export class TelepulesController {

    constructor(private telepulesService: TelepulesService){}

    @Get()
    @ApiOperation({ summary: 'Összes település lekérdezése' })
    @ApiResponse({ status: 200, description: 'A települések listája sikeresen lekérdezve.', type: [CreateTelepulesDto] })
    findAll(){
        return this.telepulesService.findAll()
    }

    @Get(':id')
    @ApiOperation({ summary: 'Egy település lekérdezése ID alapján' })
    @ApiParam({ name: 'id', description: 'A település azonosítója', type: String })
    @ApiResponse({ status: 200, description: 'A település sikeresen lekérdezve.', type: CreateTelepulesDto })
    @ApiResponse({ status: 404, description: 'A település nem található.' })
    findOne(@Param('id') id: string) {
        return this.telepulesService.findOne(+id)
    }

    @Get('iranyitoszam/:iranyitoszam')
    @ApiOperation({ summary: 'Település lekérdezése irányítószám alapján' })
    @ApiParam({ name: 'iranyitoszam', description: 'A település irányítószáma', type: String })
    @ApiResponse({ status: 200, description: 'A település sikeresen lekérdezve.', type: CreateTelepulesDto })
    @ApiResponse({ status: 404, description: 'A település nem található.' })
    findIranyitoszam(@Param('iranyitoszam') iranyitoszam: string) {
        return this.telepulesService.findIranyitoszam(iranyitoszam)
    }

    @Post()
    @ApiOperation({ summary: 'Új település létrehozása' })
    @ApiBody({ type: CreateTelepulesDto })
    @ApiResponse({ status: 201, description: 'A település sikeresen létrehozva.', type: CreateTelepulesDto })
    @ApiResponse({ status: 400, description: 'Érvénytelen bemenet.' })
    create(@Body() createTelepulesDto: CreateTelepulesDto) {
        return this.telepulesService.create(createTelepulesDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Település teljes frissítése ID alapján' })
    @ApiParam({ name: 'id', description: 'A település azonosítója', type: String })
    @ApiBody({ type: CreateTelepulesDto })
    @ApiResponse({ status: 200, description: 'A település sikeresen frissítve.', type: CreateTelepulesDto })
    @ApiResponse({ status: 404, description: 'A település nem található.' })
    put(@Param('id') id: string, @Body() createTelepulesDto: CreateTelepulesDto) {
        return this.telepulesService.put(+id, createTelepulesDto);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Település részleges frissítése ID alapján' })
    @ApiParam({ name: 'id', description: 'A település azonosítója', type: String })
    @ApiBody({ type: UpdateTelepulesDto })
    @ApiResponse({ status: 200, description: 'A település sikeresen frissítve.', type: UpdateTelepulesDto })
    @ApiResponse({ status: 404, description: 'A település nem található.' })
    patch(@Param('id') id: string, @Body() updateTelepulesDto: UpdateTelepulesDto) {
        return this.telepulesService.patch(+id, updateTelepulesDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Település törlése ID alapján' })
    @ApiParam({ name: 'id', description: 'A település azonosítója', type: String })
    @ApiResponse({ status: 200, description: 'A település sikeresen törölve.' })
    @ApiResponse({ status: 404, description: 'A település nem található.' })
    delete(@Param('id') id: string) {
        return this.telepulesService.delete(+id);
    }
}