import { hashSync } from 'bcrypt';

export const hashPasswordTransform = {
  to(password: string): string {
    const salt = 10;

    return hashSync(password, salt);
  },

  from(hash: string): string {
    return hash;
  },
};
