import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from 'src/entities/content.entity';
import { User } from 'src/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { SigninModule } from 'src/signin/signin.module';
import { UsersModule } from 'src/users/users.module';
import { PostModule } from 'src/post/post.module';
import { ProfileModule } from 'src/profile/profile.module';
import { AppService } from 'src/app.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PostService } from 'src/post/post.service';
import { ProfileService } from 'src/profile/profile.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { AuthService } from 'src/auth/auth.service';
import { CommentPost } from 'src/entities/comment-post.entity';
import { VoteUser } from 'src/entities/vote-user.entity';
import { UsersService } from 'src/users/users.service';
import { Profile } from 'src/entities/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Content, VoteUser, CommentPost, Profile]),
    UsersModule,
  ],
  providers: [SignupService, UsersService, ProfileService],
  controllers: [SignupController],
})
export class SignupModule {}
