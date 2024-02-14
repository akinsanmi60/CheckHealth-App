// permissions.guard.ts

import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const permissions = this.reflector.get<string[]>(
      "permissions",
      context.getHandler(),
    );
    if (!permissions) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    if (!user || !user.permissions || user.permissions.length === 0) {
      return false;
    }

    return user.permissions.some((permission: string) =>
      permissions.includes(permission),
    );
  }
}
