import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('register')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  async createUser(@Body() body): Promise<any> {
    try {
      await this.usersService.createUser(body);
    } catch (err) {
      console.log(err);
    }
    return { message: 'user created' };
  }

  @Get('user')
  getUser(@Body() body): Promise<any> {
    return this.usersService.getUserPassword(body);
  }
}
