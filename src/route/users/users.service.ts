import { User } from 'src/common/entity/user.entity';
import { userDaoKey } from 'src/common/entity/user.provider';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject(userDaoKey) private userDao: typeof User,
    private configService: ConfigService,
  ) {}

  async createUser(newUser) {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);

    return this.userDao.create({
      email: newUser.email,
      username: newUser.username,
      password: hashedPassword,
    });
  }

  getUserPassword(selectedParams): Promise<string> {
    return this.userDao
      .findOne({
        where: {
          email: selectedParams.email,
        },
      })
      .then(response => response?.password);
  }
}
