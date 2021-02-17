import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { User } from 'src/common/entity/user.entity';
import { userDaoKey } from 'src/common/entity/user.provider';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UnauthenticatedException } from 'src/common/exception/unauthenticatedException';

@Injectable()
export class AuthService {
  constructor(
    @Inject(userDaoKey) private userDao: typeof User,
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  verify(token): Promise<any> {
    return this.jwtService.verifyAsync(token);
  }

  async authenticate(formData) {
    const hashedPassword = await this.usersService.getUserPassword(formData);

    if (hashedPassword == null) {
      throw new UnauthenticatedException('Email ou mot de passe incorrect');
    }
    const comparedPassword = await bcrypt.compare(
      formData.password,
      hashedPassword,
    );
    if (comparedPassword) {
      const PayloadJwt = {
        email: formData.email,
      };

      const token = this.jwtService.sign(PayloadJwt);

      return token;
    } else {
      throw new UnauthenticatedException('Email ou mot de passe incorrect');
    }
  }
}
