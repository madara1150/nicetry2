import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  create(@Body() registerDto: RegisterDto) {
    return this.usersService.create(registerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getProfile(@Request() req) {
    const user = await this.usersService.findByEmail(req.user.email);
    const profile = {
      id: user.id,
      email: user.email,
      name: user.fullName,
    };
    return profile;
  }
}
