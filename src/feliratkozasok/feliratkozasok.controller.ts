import { Controller, Get, Post, Delete, Param, Body, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { FeliratkozasService } from './feliratkozas.service';
import { CreateFeliratkozasDto } from './dto/create-feliratkozas.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request as ExpressRequest } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Feliratkozas } from '../entities/feliratkozas.entity';

@ApiTags('Feliratkozások')
@Controller('feliratkozasok')
@UseGuards(JwtAuthGuard)
export class FeliratkozasokController {
  constructor(private feliratkozasService: FeliratkozasService) {}

  @ApiOperation({ summary: 'Összes feliratkozás lekérdezése', description: 'Lekéri az összes feliratkozást (védett végpont).' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Feliratkozások sikeres lekérdezése', type: [Feliratkozas] })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @Get()
  findAll() {
    return this.feliratkozasService.findAll();
  }

  @ApiOperation({ summary: 'Feliratkozás lekérdezése ID alapján', description: 'Lekéri egy adott feliratkozás adatait az azonosító alapján.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Feliratkozás sikeres lekérdezése', type: Feliratkozas })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 404, description: 'Feliratkozás nem található' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feliratkozasService.findOne(+id);
  }

  @ApiOperation({ summary: 'Személy eseményeinek lekérdezése', description: 'Lekéri egy adott személyhez tartozó összes eseményt.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Események sikeres lekérdezése', type: [Feliratkozas] })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 404, description: 'Személy nem található' })
  @Get('szemely/:id')
  szemelyEsemenyei(@Param('id') id: string) {
    return this.feliratkozasService.adottSzemelyEsemenyei(+id);
  }

  @ApiOperation({ summary: 'Esemény személyeinek lekérdezése', description: 'Lekéri egy adott eseményhez tartozó összes személyt.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Személyek sikeres lekérdezése', type: [Feliratkozas] })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 404, description: 'Esemény nem található' })
  @Get('esemeny/:id')
  esemenySzemelyei(@Param('id') id: string) {
    return this.feliratkozasService.adottEsemenySzemelyei(+id);
  }

  @ApiOperation({ summary: 'Új feliratkozás létrehozása', description: 'Új feliratkozás létrehozása autentikált felhasználó számára.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 201, description: 'Feliratkozas sikeresen létrehozva', type: Feliratkozas })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiBody({ type: CreateFeliratkozasDto })
  @Post()
  create(@Body() createRegistrationDto: CreateFeliratkozasDto, @Request() req: ExpressRequest) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.feliratkozasService.create(createRegistrationDto);
  }

  @ApiOperation({ summary: 'Feliratkozás törlése', description: 'Meglévő feliratkozás törlése autentikált felhasználó számára.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Feliratkozás sikeresen törölve' })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 404, description: 'Feliratkozás nem található' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feliratkozasService.remove(+id);
  }
}