import { User } from '../../user/user.entity';

export class TestUtil {
  static giveMeAValidUser(): User {
    const user = new User();

    user.email = 'valid@email.com';
    user.name = 'Valid Name';
    user.id = '1';

    return user;
  }
}
