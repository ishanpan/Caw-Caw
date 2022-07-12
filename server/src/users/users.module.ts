import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/entities/profile.entity';
import { ProfileService } from 'src/profile/profile.service';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile]), ProfileModule],
  providers: [UsersService, ProfileService],
  exports: [UsersService],
})
export class UsersModule {}
