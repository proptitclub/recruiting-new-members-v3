import { Provider } from '@nestjs/common';
import { UserRepository } from './UserRepository';
import { IUserRepository } from '../../domain/models/User/userRepository.interface';

export const UserRepoProvider: Provider = {
  provide: IUserRepository,
  useClass: UserRepository,
};
