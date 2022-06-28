import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { SignupModule } from './signup/signup.module';
import { SigninModule } from './signin/signin.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { PostService } from './post/post.service';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';
import { Content } from './entities/content.entity';
import { VoteUser } from './entities/vote-user.entity';
import { CommentPost } from './entities/comment-post.entity';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './entities/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      port: 8000,
      url: process.env.DATABASE_URL,
      entities: ['dist/entities/*.entity{.js,.ts}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Content, VoteUser, CommentPost, Profile]),
    SignupModule,
    SigninModule,
    AuthModule,
    UsersModule,
    PostModule,
    ProfileModule,
  ],
  controllers: [AppController, PostController, ProfileController],
  providers: [
    AppService,
    JwtAuthGuard,
    PostService,
    ProfileService,

    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
