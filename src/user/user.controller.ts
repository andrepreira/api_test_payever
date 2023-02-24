import { Controller, Get, Post, Delete, Param, Res, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';
import { RabbitMQService } from './rabbitmq.service';
import axios from 'axios';

@Controller('api/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly rabbitMQService: RabbitMQService
    ) {
      this.rabbitMQService.init();
    }
  @Post()
  async createUsers(@Body() users: User[]): Promise<User[]> {
    users = await (await axios.get('https://reqres.in/api/users')).data.data;
    const createdUsers = await Promise.all(users.map(user => this.userService.createUser(user)));
    this.rabbitMQService.publish('users.created', '', createdUsers);
    return createdUsers;
  }

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    // Retrieve user data from external API
    const userData = await this.userService.getUserData(userId);
    return this.userService.createUser(userData);
  }

  @Get(':userId/avatar')
  async getUserAvatar(@Param('userId') userId: string, @Res() res): Promise<void> {
    const base64Avatar = await this.userService.getUserAvatar(userId);
    res.setHeader('Content-Type', 'image/png');
    res.send(Buffer.from(base64Avatar, 'base64'));
  }

  @Delete(':userId/avatar')
  async deleteUserAvatar(@Param('userId') userId: string): Promise<void> {
    await this.userService.deleteUserAvatar(userId);
  }
}
