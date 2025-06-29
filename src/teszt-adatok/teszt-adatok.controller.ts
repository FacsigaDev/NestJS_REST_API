import { Controller, Post, Body } from '@nestjs/common';
import { TesztAdatService } from './teszt-adat.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Tesztadatok')
@Controller('tesztadatok')
export class TesztAdatokController {
  constructor(private tesztAdatService: TesztAdatService) {}

  @ApiOperation({ summary: 'Személyek tesztadatok létrehozása', description: 'Létrehoz egy megadott számú teszt személyt.' })
  @ApiResponse({ status: 201, description: 'Teszt személyek sikeresen létrehozva' })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiBody({ schema: { type: 'object', properties: { count: { type: 'number', example: 10 } } } })
  @Post('szemelyekletrehozasa')
  async szemelyekLetrehozasa(@Body('count') count: number) {
    return this.tesztAdatService.szemelyTesztAdatLetrehoz(count);
  }

  @ApiOperation({ summary: 'Személyek tesztadatok törlése', description: 'Törli az összes teszt személyt.' })
  @ApiResponse({ status: 200, description: 'Teszt személyek sikeresen törölve' })
  @Post('szemelyektorlese')
  async szemelyekTorlese() {
    return this.tesztAdatService.szemelyTesztAdatTorol();
  }

  @ApiOperation({ summary: 'Települések tesztadatok létrehozása', description: 'Létrehoz teszt településeket.' })
  @ApiResponse({ status: 201, description: 'Teszt települések sikeresen létrehozva' })
  @Post('telepulesekletrehozasa')
  async telepulesekLetrehozasa() {
    return this.tesztAdatService.telepulesTesztAdatLetrehoz();
  }

  @ApiOperation({ summary: 'Települések tesztadatok törlése', description: 'Törli az összes teszt települést.' })
  @ApiResponse({ status: 200, description: 'Teszt települések sikeresen törölve' })
  @Post('telepulesektorlese')
  async telepulesekTorlese() {
    return this.tesztAdatService.telepulesTesztAdatTorol();
  }

  @ApiOperation({ summary: 'Hírek tesztadatok létrehozása', description: 'Létrehoz teszt híreket.' })
  @ApiResponse({ status: 201, description: 'Teszt hírek sikeresen létrehozva' })
  @Post('hirekletrehozasa')
  async hirekLetrehozasa() {
    return this.tesztAdatService.hirTesztAdatLetrehoz();
  }

  @ApiOperation({ summary: 'Hírek tesztadatok törlése', description: 'Törli az összes teszt hírt.' })
  @ApiResponse({ status: 200, description: 'Teszt hírek sikeresen törölve' })
  @Post('hirektorlese')
  async hirekTorlese() {
    return this.tesztAdatService.hirTesztAdatTorol();
  }

  @ApiOperation({ summary: 'Események tesztadatok létrehozása', description: 'Létrehoz teszt eseményeket.' })
  @ApiResponse({ status: 201, description: 'Teszt események sikeresen létrehozva' })
  @Post('esemenyekletrehozasa')
  async esemenyekLetrehozasa() {
    return this.tesztAdatService.esemenyTesztAdatLetrehoz();
  }

  @ApiOperation({ summary: 'Események tesztadatok törlése', description: 'Törli az összes teszt eseményt.' })
  @ApiResponse({ status: 200, description: 'Teszt események sikeresen törölve' })
  @Post('esemenyektorlese')
  async esemenyekTorlese() {
    return this.tesztAdatService.esemenyTesztAdatTorol();
  }

  @ApiOperation({ summary: 'Feliratkozások tesztadatok létrehozása', description: 'Létrehoz teszt feliratkozásokat.' })
  @ApiResponse({ status: 201, description: 'Teszt feliratkozások sikeresen létrehozva' })
  @Post('feliratkozasokletrehozasa')
  async feliratkozasokLetrehozasa() {
    return this.tesztAdatService.feliratkozasTesztAdatLetrehoz();
  }

  @ApiOperation({ summary: 'Feliratkozások tesztadatok törlése', description: 'Törli az összes teszt feliratkozást.' })
  @ApiResponse({ status: 200, description: 'Teszt feliratkozások sikeresen törölve' })
  @Post('feliratkozasoktorlese')
  async feliratkozasokTorlese() {
    return this.tesztAdatService.feliratkozasTesztAdatTorol();
  }

  @ApiOperation({ summary: 'Összes tesztadat létrehozása', description: 'Létrehoz minden tesztadatot (személyek, települések, hírek, események, feliratkozások).' })
  @ApiResponse({ status: 201, description: 'Tesztadatok sikeresen létrehozva' })
  @ApiBody({ schema: { type: 'object', properties: { count: { type: 'number', example: 10 } } } })
  @Post('tesztadatokletrehozasa')
  async tesztAdatokLetrehozasa(@Body('count') count: number) {
    await this.tesztAdatService.szemelyTesztAdatLetrehoz(count);
    await this.tesztAdatService.telepulesTesztAdatLetrehoz();
    await this.tesztAdatService.hirTesztAdatLetrehoz();
    await this.tesztAdatService.esemenyTesztAdatLetrehoz();
    await this.tesztAdatService.feliratkozasTesztAdatLetrehoz();
    return { message: `A tesztadatok feltöltése sikeresen megtörtént` };
  }

  @ApiOperation({ summary: 'Összes tesztadat törlése', description: 'Törli az összes tesztadatot.' })
  @ApiResponse({ status: 200, description: 'Tesztadatok sikeresen törölve' })
  @Post('tesztadatoktorlese')
  async tesztAdatokTorlese() {
    return this.tesztAdatService.tesztadatokTorlese();
  }
}