import {
  Body,
  Controller,
  Post,
  Req,
  Get,
  Request,
  Param,
} from '@nestjs/common';
import { createPostDto } from 'src/DTO/create-post.dto';

import { PostService } from './post.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { changeVoteDto } from 'src/DTO/change-votes.dto';
import { createCommentDto } from 'src/DTO/create-comment.dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAllPosts() {
    const send = await this.postService.getAll();
    return send;
  }

  @Get(':id')
  async getPostById(@Param() params) {
    return this.postService.getById(params.id);
  }
  @Post('vote')
  async Voted(@Body() changeVoteDto: changeVoteDto, @Request() req) {
    this.postService.changeVote(changeVoteDto, req.user.id);
    return 'sucess';
  }

  @Get('comment/:id')
  async getComments(@Param() params) {
    console.log('hi');
    return await this.postService.getComments(params.id);
  }
  @Post('comment')
  async createComment(@Body() createCommentDto: createCommentDto, @Req() req) {
    await this.postService.createComment(createCommentDto, req.user.id);
  }

  @Post()
  async createPost(@Body() createPostDto: createPostDto, @Req() req) {
    await this.postService.createPost(createPostDto, req.user.id);
    return 'post created';
  }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  // }
}
