import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';

@Resolver('Auth')
export class AuthResolver {
  constructor(private _authService: AuthService) {}

  @Mutation(() => AuthType)
  public async login(@Args('data') data: AuthInput): Promise<AuthType> {
    const response = await this._authService.validateUser(data);

    return {
      user: response.user,
      token: response.token,
    };
  }
}
