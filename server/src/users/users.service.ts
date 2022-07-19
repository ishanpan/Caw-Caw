import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/DTO/create-user.dto';
import { Profile } from 'src/entities/profile.entity';
import { ProfileService } from 'src/profile/profile.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private profileService: ProfileService,
  ) {}

  async findOne(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      email: email,
    });
    return user;
  }

  async checkNewUser(CreateUserDto: CreateUserDto): Promise<User> {
    const emailCheck = await this.usersRepository.findOne({
      email: CreateUserDto.email,
    });
    return emailCheck;
  }

  async add(
    CreateUserDto: CreateUserDto,
    hashedPassword: string,
  ): Promise<void> {
    const userD = new User();
    userD.id = Math.random().toString(36).slice(2, 9); // for internal use only.
    userD.email = CreateUserDto.email;
    console.log(hashedPassword);
    userD.hashedPassword = hashedPassword;
    await this.usersRepository.save(userD);
    const tempUsername = CreateUserDto.email.slice(0, 5);
    await this.profileService.addProfile(userD.id, tempUsername);
  }
}
