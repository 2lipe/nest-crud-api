import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/configs/auth.guard';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private _userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return await this._userService.createUser(data);
  }

  @Query(() => [User])
  async findUsers(): Promise<User[]> {
    return await this._userService.findAllUsers();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async findUserById(@Args('id') id: string): Promise<User> {
    return await this._userService.findUserById(id);
  }

  @Query(() => User)
  async findUserByEmail(@Args('email') email: string): Promise<User> {
    return await this._userService.findUserByEmail(email);
  }

  @Mutation(() => User)
  async updateUser(@Args('id') id: string, @Args('data') data: UpdateUserInput): Promise<User> {
    const user = await this._userService.updateUser(id, data);

    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    const deleted = await this._userService.deleteUser(id);

    return deleted;
  }
}
