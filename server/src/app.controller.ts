import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Public } from './auth/no-auth';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}
  @Public()
  @Post('auth/login')
  async login(@Request() req, @Body() createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto.password);
  }
}
