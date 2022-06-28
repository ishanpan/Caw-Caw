import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/DTO/create-user.dto';
import * as bcrypt from 'bcrypt';

import { saltRounds } from 'src/auth/constants';

// hashing service create
// use for reset

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async add(CreateUserDto: CreateUserDto): Promise<void> {
    const user = new User();
    user.id = 'u' + Math.random().toString(36).slice(2, 9); // for internal use only.
    user.email = CreateUserDto.email;
    await bcrypt.hash(
      CreateUserDto.password,
      saltRounds,
      async (hash: string) => {
        user.password = hash;
        await this.usersRepository.save(user);
      },
    );
  }

  async checkNew(CreateUserDto: CreateUserDto): Promise<User> {
    const emailCheck = await this.usersRepository.findOne({
      email: CreateUserDto.email,
    });

    return emailCheck;
  }
}
