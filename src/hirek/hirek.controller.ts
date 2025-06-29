import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { HirService } from './hir.service';
import { CreateHirDto } from './dto/create-hir.dto';
import { UpdateHirDto } from './dto/update-hir.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Hir } from '../entities/hir.entity';

@ApiTags('Hírek')
@Controller('hirek')
export class HirekController {
  constructor(private hirService: HirService) {}

  @ApiOperation({ summary: 'Összes hír lekérdezése', description: 'Lekéri az összes hírt (publikus végpont).' })
  @ApiResponse({ status: 200, description: 'Hírek sikeres lekérdezése', type: [Hir] })
  @Get()
  findAll() {
    return this.hirService.findAll();
  }

  @ApiOperation({ summary: 'Hír lekérdezése ID alapján', description: 'Lekéri egy adott hír adatait az azonosító alapján (publikus végpont).' })
  @ApiResponse({ status: 200, description: 'Hír sikeres lekérdezése', type: Hir })
  @ApiResponse({ status: 404, description: 'Hír nem található' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hirService.findOne(+id);
  }

  @ApiOperation({ summary: 'Új hír létrehozása', description: 'Új hír létrehozása admin jogosultsággal.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 201, description: 'Hír sikeresen létrehozva', type: Hir })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin jogosultság' })
  @ApiBody({ type: CreateHirDto })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post()
  create(@Body() createHirDto: CreateHirDto) {
    return this.hirService.create(createHirDto);
  }

  @ApiOperation({ summary: 'Hír módosítása', description: 'Meglévő hír módosítása admin jogosultsággal.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Hír sikeresen módosítva', type: Hir })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin jogosultság' })
  @ApiResponse({ status: 404, description: 'Hír nem található' })
  @ApiBody({ type: UpdateHirDto })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHirDto: UpdateHirDto) {
    return this.hirService.update(+id, updateHirDto);
  }

  @ApiOperation({ summary: 'Hír törlése', description: 'Meglévő hír törlése admin jogosultsággal.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Hír sikeresen törölve' })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin jogosultság' })
  @ApiResponse({ status: 404, description: 'Hír nem található' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hirService.remove(+id);
  }
}