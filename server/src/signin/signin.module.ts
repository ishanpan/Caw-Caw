import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from 'src/app.service';
import { AuthModule } from 'src/auth/auth.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommentPost } from 'src/entities/comment-post.entity';
import { Content } from 'src/entities/content.entity';
import { User } from 'src/entities/user.entity';
import { VoteUser } from 'src/entities/vote-user.entity';
import { PostService } from 'src/post/post.service';
import { ProfileService } from 'src/profile/profile.service';
import { UsersModule } from 'src/users/users.module';
import { SigninController } from './signin.controller';
import { SigninService } from './signin.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Content, VoteUser, CommentPost]),
    UsersModule,
    AuthModule,
  ],
  providers: [AppService, JwtAuthGuard, PostService, SigninService],
  controllers: [SigninController],
})
export class SigninModule {}
