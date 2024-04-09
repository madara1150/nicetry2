import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Res({ passthrough: true }) res) {
    try {
      const { access_token } = await this.authService.login(req.user);
      res.cookie('access_token', access_token, {
        httpOnly: true,
        secure: true,
        credentials: true,
      });

      return { message: 'Login success' };
    } catch (error) {
      throw new HttpException('Login Failed', HttpStatus.UNAUTHORIZED);
    }
  }
}
