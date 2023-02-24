import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import axios from 'axios';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async createUser(userData): Promise<User> {
    const user = new this.userModel(userData);
    return user.save();
  }

  async getUserData(userId: string): Promise<any> {
    const response = await axios.get(`https://reqres.in/api/users/${userId}`);
    return response.data.data;
  }

  async getUserAvatar(userId: string): Promise<string> {
    const user = await this.userModel.findOne({ userId });
    if (!user.avatar) {
      return null;
    }
    return user.avatar.toString('base64');
  }

  async deleteUserAvatar(userId: string): Promise<void> {
    await this.userModel.deleteOne({ id: userId });
  }
}
