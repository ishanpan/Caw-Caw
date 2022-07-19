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

  async addProfile(userId: string, tempUsername: string) {
    const profile = new Profile();
    profile.id = userId;
    profile.username = tempUsername;
    await this.ProfileRepository.save(profile);
  }

  async getProfile(username: string) {
    const profile = await this.ProfileRepository.findOne(
      {
        username: username,
      },
      { relations: ['posts'] },
    );
    const { id, ...user } = profile;
    return user;
  }

  async getProfileById(id: string) {
    const profile = await this.ProfileRepository.findOneOrFail({
      id: id,
    });
    return profile;
  }

  async updateDetails(updateProfile: UpdateProfile, id: string) {
    const profile = await this.ProfileRepository.findOneOrFail({
      id: id,
    });

    profile.name = updateProfile.name;
    profile.username = updateProfile.username;
    profile.bio = updateProfile.bio;
    profile.image = updateProfile.image;
    return await this.ProfileRepository.save(profile);
  }
}
