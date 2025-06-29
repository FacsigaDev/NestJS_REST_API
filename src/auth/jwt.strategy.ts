import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService, private configService: ConfigService) {
    //console.log('JWT_SECRET:', configService.get<string>('JWT_SECRET'));
    const jwtSecret = configService.get<string>('JWT_SECRET');
    if (!jwtSecret) {
      throw new Error('JWT_SECRET változó nincs definiálva a konfigurációs fájlba!');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: { sub: number, role: string }) {
    // Ha a payload.sub (pl. felhasznalonev) üres vagy nem létezik, hibát dobunk
    if (!payload.sub) {
      throw new UnauthorizedException('Érvénytelen JWT payload');
    }
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException('Érvénytelen felhasználó azonosítás');
    }
    return payload;
  }
}
