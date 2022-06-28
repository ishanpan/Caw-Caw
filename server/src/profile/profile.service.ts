import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProfile } from 'src/DTO/update-profile.dto';
import { Profile } from 'src/entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private ProfileRepository: Repository<Profile>,
  ) {}

  async getProfile(userid: string) {
    const profile = await this.ProfileRepository.findOneOrFail({
      id: userid,
    });
    const { id, ...user } = profile;
    return user;
  }

  async updateDetails(updateProfile: UpdateProfile, id: string) {
    const profile = await this.ProfileRepository.findOneOrFail({
      id,
    });

    profile.name = updateProfile.name;
    profile.username = updateProfile.username;
    profile.bio = updateProfile.bio;
    profile.image = updateProfile.image;
  }
}
