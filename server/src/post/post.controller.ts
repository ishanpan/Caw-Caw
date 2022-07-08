import {
  Body,
  Controller,
  Post,
  Req,
  Get,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { createPostDto } from 'src/DTO/create-post.dto';
import { PostService } from './post.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { changeVoteDto } from 'src/DTO/change-votes.dto';
import { createCommentDto } from 'src/DTO/create-comment.dto';
import { FileUpload } from 'src/DTO/file-upload.dto';
import { Public } from 'src/auth/no-auth';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Request } from 'express';
//retrieve image from backend

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAllPosts(@Req() request: Request) {
    console.log(request.signedCookies);
    const send = await this.postService.getAll();
    return send;
  }

  @Get(':id')
  async getPostById(@Param() params) {
    return this.postService.getById(params.id);
  }

  @Post('vote')
  async Voted(@Body() changeVoteDto: changeVoteDto, req: Request) {
    this.postService.changeVote(changeVoteDto, 'req.user.id');
    return 'sucess';
  }
  @Public()
  @Get('comment/:id')
  async getComments(@Param() params) {
    return await this.postService.getComments(params.id);
  }
  @Public()
  @Post('comment')
  async createComment(@Body() createCommentDto: createCommentDto, @Req() req) {
    await this.postService.createComment(createCommentDto, 'req.user.id');
  }

  @Post()
  async createPost(@Body() createPostDto: createPostDto, @Req() req) {
    await this.postService.createPost(createPostDto, req.user.id);
    return 'post created';
  }

  @Public()
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    //upload file to firebase bucket here
    const fileName = Math.random().toString(36).slice(2, 24);
    const storage = getStorage();
    const storageRef = ref(storage, `image/${fileName}`);
    const metadata = {
      contentType: 'image/png',
    };
    await uploadBytes(storageRef, file.buffer, metadata);
    return fileName;
  }
}
