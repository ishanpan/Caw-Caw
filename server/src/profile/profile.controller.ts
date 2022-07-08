import { Body, Controller, Get, Put, Request } from '@nestjs/common';
import { UpdateProfile } from 'src/DTO/update-profile.dto';
import { ProfileService } from './profile.service';

//upload profile picture

@Controller('profile')
export class ProfileController {
  //Update user profile here too
  constructor(private profileService: ProfileService) {}
  @Get()
  async profileDetails(@Request() req) {
    await this.profileService.getProfile(req.user.id);
  }

  @Put()
  async updateProfile(@Body() UpdateProfile: UpdateProfile, @Request() req) {
    await this.profileService.updateDetails(UpdateProfile, req.user.id);
  }

  @Get('posts')
  async getAllPostsByUser() {}
}
