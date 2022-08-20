import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/DTO/create-user.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { saltRounds } from 'src/auth/constants';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

// hashing service create
// use for reset

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private UsersService: UsersService,
    private readonly AuthService: AuthService,
  ) {}

  async add(CreateUserDto: CreateUserDto): Promise<object> {
    const hashed = await bcrypt.hash(CreateUserDto.password, saltRounds);
    const userId = await this.UsersService.add(CreateUserDto, hashed);
    return await this.AuthService.generateJWT(userId);
  }

  async checkNew(CreateUserDto: CreateUserDto): Promise<User> {
    return this.UsersService.checkNewUser(CreateUserDto);
  }
}
