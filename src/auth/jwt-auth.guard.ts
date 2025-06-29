import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Ellenőrizd a @Public() dekorátort
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    // JWT autentikáció végrehajtása
    const canActivate = super.canActivate(context);

    if (canActivate instanceof Observable) {
      return await lastValueFrom(canActivate);
    } else if (canActivate instanceof Promise) {
      return await canActivate;
    } else {
      return canActivate as boolean;
    }
  }
}