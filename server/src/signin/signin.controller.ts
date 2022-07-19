import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from 'src/DTO/login-user';
import { SigninService } from './signin.service';
import { Public } from 'src/auth/no-auth';

@Controller('signin')
export class SigninController {
  constructor(
    private readonly SignInService: SigninService,
    private readonly AuthService: AuthService,
  ) {}
  @Public()
  @Post()
  async login(@Body() LoginUserDto: LoginUserDto) {
    const isExisting = await this.SignInService.checkCred(LoginUserDto.email);
    if (isExisting === undefined) {
      return 'Invalid credentials entered';
    } else {
      const user = await this.AuthService.validateUser(
        LoginUserDto.email,
        LoginUserDto.password,
      );
      const token = await this.AuthService.generateJWT(user.id);
      return token;
    }
  }
}
