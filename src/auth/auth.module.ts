import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtStrategy } from './configs/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '60s',
        },
      }),
    }),
  ],
  providers: [AuthService, AuthResolver, UserService, JwtStrategy],
})
export class AuthModule {}
