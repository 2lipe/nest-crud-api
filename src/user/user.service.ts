import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from '../../src/utils/messages';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private _userRepository: Repository<User>,
  ) {}

  async createUser(data: CreateUserInput): Promise<User> {
    const user = this._userRepository.create(data);
    const userSaved = await this._userRepository.save(user);

    if (!userSaved) {
      throw new InternalServerErrorException(Messages.validation.user.createFail);
    }

    return userSaved;
  }

  async findAllUsers(): Promise<User[]> {
    return await this._userRepository.find();
  }

  async findUserById(id: string): Promise<User> {
    const user = await this._userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(Messages.validation.user.notFound);
    }

    return user;
  }

  async updateUser(id: string, data: UpdateUserInput): Promise<User> {
    const user = await this.findUserById(id);

    await this._userRepository.update(user, { ...data });

    const userUpdated = this._userRepository.create({ ...user, ...data });

    return userUpdated;
  }

  async deleteUser(id: string): Promise<boolean> {
    const user = await this.findUserById(id);

    const deleted = await this._userRepository.delete(user);

    if (deleted) {
      return true;
    }

    return false;
  }
}
