import { Injectable, NestMiddleware } from '@nestjs/common';

import { Request, Response } from 'express';

import { AuthService } from '../../route/auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}
  async use(req: Request, res: Response, next: () => void) {
    try {
      const currentToken = req.cookies['access_token'];
      const payload = await this.authService.verify(currentToken);
      console.log(currentToken);
      console.log(payload);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      req.auth = payload;
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send('unauthorized');
    }
  }
}
