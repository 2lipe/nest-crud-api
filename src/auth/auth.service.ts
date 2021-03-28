import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Messages } from 'src/utils/helpers/messages-helper';

import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(private _userService: UserService, private _jwtService: JwtService) {}

  async validateUser(data: AuthInput): Promise<AuthType> {
    const user = await this._userService.findUserByEmail(data.email);

    const validPassword = compareSync(data.password, user.password);

    if (!validPassword) {
      throw new UnauthorizedException(Messages.validation.auth.invalidCredentials);
    }

    const token = await this.jwtToken(user);

    return {
      user,
      token,
    };
  }

  private async jwtToken(user: User): Promise<string> {
    const payload = { username: user.name, sub: user.id };

    return this._jwtService.signAsync(payload);
  }
}
