import { Body, Controller, Get, Param, Put, Request } from '@nestjs/common';
import { UpdateProfile } from 'src/DTO/update-profile.dto';
import { ProfileService } from './profile.service';

//upload profile picture

@Controller('profile')
export class ProfileController {
  //Update user profile here too
  constructor(private profileService: ProfileService) {}
  @Get(':username')
  async profileDetails(@Request() req, @Param() params) {
    console.log(params.username);
    return await this.profileService.getProfile(params.username);
  }

  @Put()
  async updateProfile(@Body() UpdateProfile: UpdateProfile, @Request() req) {
    return await this.profileService.updateDetails(UpdateProfile, req.user.id);
  }

  @Get('posts')
  async getAllPostsByUser() {}
}
