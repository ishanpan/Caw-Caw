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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',

      port: 5432,
      url: process.env.DATABASE_URL,
      entities: ['dist/entities/*.entity{.js,.ts}'],
      synchronize: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }),
    TypeOrmModule.forFeature([User]),
    SignupModule,
    SigninModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
