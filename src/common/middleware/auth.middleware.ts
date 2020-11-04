import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService){
        
  }
  use(req: Request, res: Response, next: () => void) {
    try {
      if (req.url == '/inscription' || req.url == '/login') {
        next();
        return;
      }
      
      const currentToken = req.cookies['access_token'];
      const payload = jwt.verify(currentToken, this.configService.get<string>('JWT_SECRET'));
      //@ts-ignore
      req.auth = payload;
      next();
    } catch (error) {
      res.status(401).send('unauthorized');
    }
    
  }
}
