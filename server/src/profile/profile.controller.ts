import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
  //Update user profile here too
  @Get()
  async profileDetails() {}

  @Get('posts')
  async getAllPostsByUser() {}
}
