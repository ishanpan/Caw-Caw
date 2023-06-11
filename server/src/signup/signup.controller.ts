import { Controller, Post, Body, Res } from '@nestjs/common';
import { Public } from 'src/auth/no-auth';
import { CreateUserDto } from 'src/DTO/create-user.dto';
import { SignupService } from './signup.service';
import { Response } from 'express';

@Controller('signup')
export class SignupController {
  constructor(private readonly SignupService: SignupService) {}
  @Public()
  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    if (createUserDto.password !== createUserDto.confirmPassword) {
      return 'password and confirm password does not match';
    }

    const isExisting = await this.SignupService.checkNew(createUserDto);
    if (isExisting === undefined) {
      const cook: any = await this.SignupService.add(createUserDto);

      response.cookie('jwt', cook.access_token, {
        httpOnly: true,
        sameSite: 'none',
      });
      return JSON.stringify({ res: 'added cookie' });
    } else {
      return 'User already exists';
    }
  }
}
