import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UnauthenticatedException } from 'src/common/exception/unauthenticatedException';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async authenticate(@Body() body, @Res() res: Response): Promise<any> {
    try {
      const token = await this.authService.authenticate(body);
      res
        .cookie('access_token', token, {
          httpOnly: true,
          sameSite: 'lax',
        })
        .send({
          success: true,
        });
    } catch (err) {
      if (err instanceof UnauthenticatedException) {
        res.status(401).json({ message: err.message, success: false });
      } else {
        res
          .status(500)
          .json({ message: 'internal server error', success: false });
      }
    }
  }
}
