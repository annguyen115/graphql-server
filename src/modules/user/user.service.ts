import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find({}, { password: 0 });
  }

  async create(name: string, email: string, password: string): Promise<User> {
    return this.userModel.create({ name, email, password });
  }

  async filter(name: string): Promise<User[]> {
    const payload = {
      name: new RegExp(name, 'i'),
    };

    return this.userModel.find(payload);
  }
}
