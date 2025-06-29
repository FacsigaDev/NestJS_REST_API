import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { EsemenyService } from './esemeny.service';
import { CreateEsemenyDto } from './dto/create-esemeny.dto';
import { UpdateEsemenyDto } from './dto/update-esemeny.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Esemeny } from '../entities/esemeny.entity';

@ApiTags('Események')
@Controller('esemenyek')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class EsemenyekController {
  constructor(private eventService: EsemenyService) {}

  @ApiOperation({ summary: 'Összes esemény lekérdezése', description: 'Lekéri az összes eseményt admin jogosultsággal.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Események sikeres lekérdezése', type: [Esemeny] })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin jogosultság' })
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: 'Esemény lekérdezése ID alapján', description: 'Lekéri egy adott esemény adatait az azonosító alapján.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Esemény sikeres lekérdezése', type: Esemeny })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin jogosultság' })
  @ApiResponse({ status: 404, description: 'Esemény nem található' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @ApiOperation({ summary: 'Új esemény létrehozása', description: 'Új esemény létrehozása admin jogosultsággal.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 201, description: 'Esemény sikeresen létrehozva', type: Esemeny })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin jogosultság' })
  @ApiBody({ type: CreateEsemenyDto })
  @Post()
  create(@Body() createEventDto: CreateEsemenyDto) {
    return this.eventService.create(createEventDto);
  }

  @ApiOperation({ summary: 'Esemény módosítása', description: 'Meglévő esemény módosítása admin jogosultsággal.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Esemény sikeresen módosítva', type: Esemeny })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin jogosultság' })
  @ApiResponse({ status: 404, description: 'Esemény nem található' })
  @ApiBody({ type: UpdateEsemenyDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEsemenyDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @ApiOperation({ summary: 'Esemény törlése', description: 'Meglévő esemény törlése admin jogosultsággal.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Esemény sikeresen törölve' })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin jogosultság' })
  @ApiResponse({ status: 404, description: 'Esemény nem található' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.eventService.delete(+id);
  }
}