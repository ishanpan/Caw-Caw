import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentPost } from 'src/entities/comment-post.entity';
import { Content } from 'src/entities/content.entity';
import { ProfilePost } from 'src/entities/profile-post.entity';
import { Profile } from 'src/entities/profile.entity';
import { User } from 'src/entities/user.entity';
import { VoteUser } from 'src/entities/vote-user.entity';
import { ProfileModule } from 'src/profile/profile.module';
import { ProfileService } from 'src/profile/profile.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { PostService } from './post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Profile,
      Content,
      VoteUser,
      CommentPost,
      ProfilePost,
    ]),
    ProfileModule,
    UsersModule,
  ],
  providers: [UsersService, ProfileService, PostService],
  exports: [PostService],
})
export class PostModule {}
