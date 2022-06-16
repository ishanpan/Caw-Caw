import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/DTO/create-user.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private readonly SignupService: SignupService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const isExisting = await this.SignupService.checkNew(createUserDto);
    if (isExisting === undefined) {
      this.SignupService.add(createUserDto);
    } else {
      return 'account already present';
    }
  }
}
