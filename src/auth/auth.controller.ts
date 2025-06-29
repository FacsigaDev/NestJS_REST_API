import { Controller, Post, Get, Body, Req, UnauthorizedException, UseGuards  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterSzemelyDto } from './dto/register-szemely.dto';
import { LoginSzemelyDto } from './dto/login-szemely.dto';
import { omit } from '../utils/utils';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { Szemely } from '../entities/szemely.entity';
import { LoginResponseDto } from './dto/login-response.dto';
import { Request } from 'express';
import { ModifyPasswordDto } from './dto/modify-password.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@ApiTags('Authentikáció')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Felhasználó regisztráció', description: 'Új felhasználó regisztrálása (publikus végpont).' })
  @ApiResponse({ status: 201, description: 'Felhasználó sikeresen regisztrálva', type: Szemely })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiBody({ type: RegisterSzemelyDto })
  @Post('regisztracio')
  async regisztracio(@Body() registerSzemelyDto: RegisterSzemelyDto) {
    //console.log(registerSzemelyDto);
    const szemely = await this.authService.regisztracio(registerSzemelyDto);
    return omit(szemely, ['szemely_jelszo', 'szemely_torolve']);
  }

  @ApiOperation({ summary: 'Felhasználó bejelentkezés', description: 'Bejelentkezés email vagy felhasználónév és jelszó segítségével (publikus végpont).' })
  @ApiResponse({
    status: 201, description: 'Sikeres bejelentkezés, JWT token visszaadva.',
    type: LoginResponseDto, example: {"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIn..."},
  })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiResponse({ status: 401, description: 'Hibás email/felhasználónév vagy jelszó' })
  @ApiBody({ type: LoginSzemelyDto })
  @Post('bejelentkezes')
  async bejelentkezes(@Body() loginDto: LoginSzemelyDto) {
    return this.authService.bejelentkezes(loginDto);
  }

  @ApiOperation({ summary: 'JWT frissítése', description: 'Bejelentkezett felhasználó a token lejárta előtt meg tudja azt újítani.' })
  @ApiResponse({
    status: 201, description: 'Sikeres művelet, JWT token visszaadva.',
    type: LoginResponseDto, example: {"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIn..."},
  })
  @ApiResponse({ status: 401, description: 'Érvénytelen token' })
  @UseGuards(JwtAuthGuard)
  @Get('tokenfrissites')
  async tokenFrissites(@Req() req: Request) {
    const szemely = req.user;
    if (!szemely) { throw new UnauthorizedException('Nincs bejelentkezett felhasználó'); }
    return this.authService.tokenFrissites(szemely);
  }

  @ApiOperation({ summary: 'Jelszó módosítása', description: 'Belépési adatokkal azonosított jelszómódosítás.' })
  @ApiResponse({
    status: 201, description: 'Sikeres jelszómódosítás, Személy visszaadva.',
    type: Szemely
  })
  @ApiResponse({ status: 400, description: 'Érvénytelen adatok' })
  @ApiResponse({ status: 401, description: 'Érvénytelen felhasználó' })
  @ApiBody({ type: ModifyPasswordDto })
  @UseGuards(JwtAuthGuard)
  @Post('jelszomodositas')
  async jelszoModositas(@Body() modifyPasswordDto: ModifyPasswordDto) {
    return omit(await this.authService.jelszoModositasa(modifyPasswordDto), ['szemely_jelszo']);
  }
}