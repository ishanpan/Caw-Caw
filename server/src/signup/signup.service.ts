import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/DTO/create-user.dto';

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
    user.password = CreateUserDto.password;
    await this.usersRepository.save(user);
  }

  async checkNew(CreateUserDto: CreateUserDto): Promise<User> {
    const emailCheck = await this.usersRepository.findOne({
      email: CreateUserDto.email,
    });

    return emailCheck;
  }
}
