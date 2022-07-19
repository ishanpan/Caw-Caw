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
import { ReCawDto } from 'src/DTO/re-caw.dto';
import { abort } from 'process';
//retrieve image from backend

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}
  @Public()
  @Get()
  async getAllPosts(@Req() request: Request) {
    const send = await this.postService.getAll();
    return send;
  }

  @Get(':id')
  async getPostById(@Param() params) {
    return this.postService.getById(params.id);
  }

  @Post()
  async createPost(@Body() createPostDto: createPostDto, @Req() req) {
    console.log(req.user.id);
    await this.postService.createPost(createPostDto, req.user.id);
    return 'post created';
  }

  @Post('vote')
  async Voted(@Body() changeVoteDto: changeVoteDto, @Req() req) {
    this.postService.changeVote(changeVoteDto, req.user.id);
    return 'success';
  }

  @Get('comment/:id')
  async getComments(@Param() params) {
    const comments = await this.postService.getComments(params.id);
    console.log(comments);
    return comments;
  }

  @Post('comment')
  async createComment(@Body() createCommentDto: createCommentDto, @Req() req) {
    await this.postService.createComment(createCommentDto, req.user.id);
  }

  @Post('recaw')
  async reCaw(@Body() ReCawDto: ReCawDto, @Req() req) {
    await this.postService.reCaw(ReCawDto, req.user.id);
  }

  @Public()
  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    //upload file to firebase bucket here
    console.log('file uploading');
    const fileName = Math.random().toString(36).slice(2, 24);
    const storage = getStorage();
    const storageRef = ref(storage, `image/${fileName}.png`);
    const metadata = {
      contentType: 'image/png',
    };
    uploadBytes(storageRef, file.buffer, metadata)
      .then(() => {
        console.log('uploaded');
      })
      .catch((e) => {
        console.log(e);
      });

    return JSON.stringify({ imageId: fileName });
  }
}
