import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Szemely } from '../entities/szemely.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterSzemelyDto } from './dto/register-szemely.dto';
import { LoginSzemelyDto } from './dto/login-szemely.dto';
import { ModifyPasswordDto } from './dto/modify-password.dto';
import { JwtPayload } from './types/jwt-payload.type';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Szemely)
    private szemelyRepository: Repository<Szemely>,
    private jwtService: JwtService,
  ) {}

  async regisztracio(registerSzemelyDto: RegisterSzemelyDto): Promise<Szemely> {
    const { szemely_email, szemely_felhasznalonev, szemely_jelszo} = registerSzemelyDto;
    let existingUser = await this.szemelyRepository.findOne({ where: { szemely_email } });
    if (existingUser) {
      throw new ConflictException('Email már létezik');
    }
    existingUser = await this.szemelyRepository.findOne({ where: { szemely_felhasznalonev } });
    if (existingUser) {
      throw new ConflictException('Felhasználónév már létezik');
    }

    const hashedPassword = await bcrypt.hash(szemely_jelszo, 10);
    const szemely = this.szemelyRepository.create({
      ...registerSzemelyDto,
      szemely_jelszo: hashedPassword,
      szemely_jogosultsag: 'user',
    });
    return this.szemelyRepository.save(szemely);
  }

  async bejelentkezes(loginSzemelyDto: LoginSzemelyDto): Promise<{ access_token: string }> {
    const szemely = await this.felhasznaloVisszadasa(loginSzemelyDto);
    if (!szemely || !(await bcrypt.compare(loginSzemelyDto.szemely_jelszo, szemely.szemely_jelszo))) {
      throw new UnauthorizedException('Érvénytelen hitelesítő adatok');
    }
    const payload = { sub: szemely.szemely_id, role: szemely.szemely_jogosultsag };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(payload: any): Promise<Szemely | null> {
    return this.szemelyRepository.findOne({ where: { szemely_id: payload.sub } });
  }

  async tokenFrissites(user: JwtPayload): Promise<{ access_token: string }> {
    const szemely = await this.szemelyRepository.findOne({where: {szemely_id: user.sub}});
    if (!szemely) {
      throw new UnauthorizedException();
    }
    const payload = { sub: szemely.szemely_id, role: szemely.szemely_jogosultsag };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async jelszoModositasa(modifyPasswordDto: ModifyPasswordDto): Promise<Szemely> {
    const szemely = await this.felhasznaloVisszadasa(modifyPasswordDto);
    if (!szemely) {
      throw new BadRequestException('Érvénytelen hitelesítő adatok');
    }
    szemely.szemely_jelszo = await bcrypt.hash(modifyPasswordDto.szemely_ujjelszo, 10);
    return this.szemelyRepository.save(szemely);
  }

  async felhasznaloVisszadasa(szemelyAdatok: LoginSzemelyDto | ModifyPasswordDto): Promise<Szemely | null> {
    const { szemely_email, szemely_felhasznalonev, szemely_jelszo } = szemelyAdatok;
    if ((!szemely_email && !szemely_felhasznalonev) || !szemely_jelszo) {
      throw new UnauthorizedException('Hiányzó hitelesítő adatok');
    }
    let feltetel: {szemely_felhasznalonev?: string, szemely_email?: string} = { szemely_felhasznalonev: szemely_felhasznalonev };
    if (szemely_email) feltetel = { szemely_email: szemely_email }
    return await this.szemelyRepository.findOne({ where: feltetel });
  }
}
