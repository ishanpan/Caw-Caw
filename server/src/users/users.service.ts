import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/DTO/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      email,
    });

    return user;
  }
  async checkNewUser(CreateUserDto: CreateUserDto): Promise<User> {
    const emailCheck = await this.usersRepository.findOne({
      email: CreateUserDto.email,
    });

    return emailCheck;
  }

  async add(CreateUserDto: CreateUserDto): Promise<void> {
    const user = new User();
    user.id = Math.random().toString(36).slice(2, 9); // for internal use only.
    user.email = CreateUserDto.email;
    await this.usersRepository.save(user);
  }
}
