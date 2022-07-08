import { Controller, Post, Body } from '@nestjs/common';
import { Public } from 'src/auth/no-auth';
import { CreateUserDto } from 'src/DTO/create-user.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private readonly SignupService: SignupService) {}
  @Public()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    if (createUserDto.password !== createUserDto.confirmPassword) {
      return 'password and confirm password does not match';
    }

    const isExisting = await this.SignupService.checkNew(createUserDto);
    if (isExisting === undefined) {
      await this.SignupService.add(createUserDto);
    } else {
      return 'User already exists';
    }
  }
}
