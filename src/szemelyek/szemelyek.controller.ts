import { Controller, Get, Post, Patch, Delete, Param, Body, Query, UseGuards, 
  SetMetadata, Req, UnauthorizedException } from '@nestjs/common';
import { SzemelyService } from './szemely.service';
import { CreateSzemelyDto } from './dto/create-szemely.dto';
import { UpdateSzemelyDto } from './dto/update-szemely.dto';
import { TestDto } from './dto/test.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Request } from 'express';
import { Szemely } from '../entities/szemely.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery, ApiBody } from '@nestjs/swagger';

export const Public = () => SetMetadata('isPublic', true);

@ApiTags('Személyek')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('szemelyek')
export class SzemelyekController {
  constructor(private szemelyService: SzemelyService) {}

  @ApiOperation({ summary: 'Összes személy lekérdezése', description: 'Lekéri az összes személyt, szűrhető a megadott paraméterek alapján.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Személyek sikeres lekérdezése', type: [Szemely] })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin vagy user jogosultság' })
  @ApiQuery({ name: 'szemely_vezeteknev', required: false, description: 'Szűrő a vezetéknévre' })
  @ApiQuery({ name: 'szemely_keresztnev', required: false, description: 'Szűrő a keresztnévre' })
  @ApiQuery({ name: 'szemely_email', required: false, description: 'Szűrő az email címre' })
  @Roles('admin', 'user')
  @Get()
  findAll(@Query() query: Partial<CreateSzemelyDto>): Promise<Partial<Szemely>[]> {
    return this.szemelyService.findAll(query);
  }

  @ApiOperation({ summary: 'Személy lekérdezése ID alapján', description: 'Lekéri egy adott személy adatait az azonosító alapján.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Személy sikeres lekérdezése', type: Szemely })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin vagy user jogosultság' })
  @ApiResponse({ status: 404, description: 'Személy nem található' })
  @Roles('admin', 'user')
  @Get(':id')
  findID(@Param('id') id: string): Promise<Partial<Szemely>> {
    return this.szemelyService.findOne(0, id);
  }

  @ApiOperation({ summary: 'Személy lekérdezése felhasználónév alapján', description: 'Lekéri egy adott személy adatait a felhasználónév alapján.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Személy sikeres lekérdezése', type: Szemely })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin vagy user jogosultság' })
  @ApiResponse({ status: 404, description: 'Személy nem található' })
  @Roles('admin', 'user')
  @Get('felhasznalonev/:id')
  findFelhasznaloinev(@Param('id') id: string): Promise<Partial<Szemely>> {
    return this.szemelyService.findOne(1, id);
  }

  @ApiOperation({ summary: 'Személy lekérdezése email alapján', description: 'Lekéri egy adott személy adatait az email cím alapján.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Személy sikeres lekérdezése', type: Szemely })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin vagy user jogosultság' })
  @ApiResponse({ status: 404, description: 'Személy nem található' })
  @Roles('admin', 'user')
  @Get('email/:id')
  findEmail(@Param('id') id: string): Promise<Partial<Szemely>> {
    return this.szemelyService.findOne(2, id);
  }

  @ApiOperation({ summary: 'Saját profil lekérdezése', description: 'Lekéri a bejelentkezett felhasználó adatait.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Profil sikeres lekérdezése', type: Szemely })
  @ApiResponse({ status: 401, description: 'Nincs bejelentkezett felhasználó vagy érvénytelen JWT token' })
  @Get('profil/me')
  findProfil(@Req() req: Request): Promise<Partial<Szemely>> {
    //console.log('profil');
    const user = req.user;
    //console.log(user);
    if (!user) {
      throw new UnauthorizedException('Nincs bejelentkezett felhasználó');
    }
    return this.szemelyService.findOne(0, user.sub.toString());
  }

  @ApiOperation({ summary: 'Új személy létrehozása', description: 'Új személy regisztrálása admin jogosultsággal.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 201, description: 'Személy sikeresen létrehozva', type: Szemely })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin jogosultság' })
  @ApiBody({ type: CreateSzemelyDto })
  @Roles('admin')
  @Post()
  create(@Body() createSzemelyDto: CreateSzemelyDto) {
    return this.szemelyService.create(createSzemelyDto);
  }

  @ApiOperation({ summary: 'Személy módosítása', description: 'Meglévő személy adatainak módosítása admin jogosultsággal.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Személy sikeresen módosítva', type: Szemely })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin jogosultság' })
  @ApiResponse({ status: 404, description: 'Személy nem található' })
  @ApiBody({ type: UpdateSzemelyDto })
  @Roles('admin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSzemelyDto: UpdateSzemelyDto) {
    return this.szemelyService.update(+id, updateSzemelyDto);
  }

  @ApiOperation({ summary: 'Személy törlése', description: 'Meglévő személy törlése admin jogosultsággal.' })
  @ApiBearerAuth('JWT-auth')
  @ApiResponse({ status: 200, description: 'Személy sikeresen törölve' })
  @ApiResponse({ status: 401, description: 'Érvénytelen vagy hiányzó JWT token' })
  @ApiResponse({ status: 403, description: 'Nincs admin jogosultság' })
  @ApiResponse({ status: 404, description: 'Személy nem található' })
  @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.szemelyService.delete(+id);
  }

  @ApiOperation({ summary: 'Teszt validáció', description: 'Tesztelési célú végpont adatvalidációhoz (publikus).' })
  @ApiResponse({ status: 200, description: 'Validáció sikeres', type: Object })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiBody({ type: Object, description: 'Teszt DTO (meghatározatlan struktúra)' })
  @Public()
  @Post('test-validation')
  testValidation(@Body() testDto: TestDto) {
    //console.log('Raw body:', JSON.stringify(testDto, null, 2));
    //console.log('Test DTO type:', testDto instanceof TestDto ? 'TestDto instance' : 'Not a TestDto instance');
    return { message: 'Validáció sikeres', data: testDto };
  }

  @ApiOperation({ summary: 'Személy regisztráció', description: 'Új személy regisztrálása (publikus végpont).' })
  @ApiResponse({ status: 201, description: 'Személy sikeresen létrehozva', type: Szemely })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiBody({ type: CreateSzemelyDto })
  @Public()
  @Post('register')
  async register(@Body() createSzemelyDto: CreateSzemelyDto) {
    return this.szemelyService.create(createSzemelyDto);
  }
}