import { User } from 'src/user/user.entity';

export class TestUtil {
  static giveMeAValidUser(): User {
    const user = new User();

    user.email = 'valid@email.com';
    user.name = 'Valid Name';
    user.id = '1';
    user.password = '123456';

    return user;
  }
}
