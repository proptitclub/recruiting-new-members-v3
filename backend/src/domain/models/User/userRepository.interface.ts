import { User } from './User';

export abstract class IUserRepository {
  register: (newUser: Partial<User>) => Promise<void>;
  findAll: () => Promise<User[]>;
  findById: (id: string) => Promise<User>;
  update: (id: string, toUpdateUser: Partial<User>) => Promise<User>;
  delete: (id: string) => Promise<User>;
  getByUsername: (username: string) => Promise<User>;
  checkExist: (username: string) => Promise<boolean>;
}
