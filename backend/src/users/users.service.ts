import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, usersDocument } from './schemas/users.schema';
import { Model } from 'mongoose';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly usersModel: Model<usersDocument>,
  ) {}

  async create(registerDto: RegisterDto): Promise<Users> {
    const newUser = new this.usersModel(registerDto);
    return newUser.save();
  }

  async findByEmail(email: string): Promise<usersDocument> {
    return this.usersModel.findOne({ email }).exec();
  }
}
