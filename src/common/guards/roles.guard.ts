import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Ellenőrizd a @Public() dekorátort
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    // Szerepkörök ellenőrzése
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    //console.log('Szükséges jogosultság: '+requiredRoles.toString());

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    //console.log(user);

    if (!user || !user.role) {
      return false;
    }

    return requiredRoles.some((role) => user.role.includes(role));
  }
}
