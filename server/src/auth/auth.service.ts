import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/DTO/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    console.log(user);
    if (user && bcrypt.compare(pass, user.hashedPassword)) {
      const { hashedPassword, ...result } = user;
      console.log(result);
      return result;
    }
    return null;
  }

  async generateJWT(user: string) {
    const payload = { id: user };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
