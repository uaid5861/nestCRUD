import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const isWhitelisted = this.isWhitelistedRoute(request);
    if (isWhitelisted) {
      return true;
    }
    return super.canActivate(context);
  }

  private isWhitelistedRoute(request): boolean {
    const { path } = request;
    const whitelist = [
      '/auth',
      '/api',
      // 在这里添加更多白名单路径
    ];

    return whitelist.some(route => path.startsWith(route));
  }
}
