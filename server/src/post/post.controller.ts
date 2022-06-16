import {
  Body,
  Controller,
  Post,
  Req,
  Get,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { createPostDto } from 'src/DTO/create-post.dto';
import { Request } from 'express';
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
  @Post('vote')
  async Voted(@Body() changeVoteDto: changeVoteDto) {
    const re = await this.postService.changeVote(changeVoteDto);
    return re;
  }

  @Post('comment')
  async createComment(@Body() createCommentDto: createCommentDto) {
    await this.postService.createComment(createCommentDto);
  }

  @Post()
  async createPost(
    @Body() createPostDto: createPostDto,
    @Req() request: Request,
  ) {
    await this.postService.createPost(createPostDto);
    return 'post created';
  }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  // }
}
