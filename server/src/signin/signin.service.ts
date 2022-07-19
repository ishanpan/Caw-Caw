import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from 'src/DTO/login-user';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SigninService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async checkCred(email: string) {
    const emailCheck = await this.usersRepository.findOne({
      email: email,
    });

    return emailCheck;
  }
}
