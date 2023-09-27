import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IBcryptService } from '../../domain/adapters/bcrypt.interface';
import { User } from '../../domain/models/User/User';
import { IUserRepository } from '../../domain/models/User/userRepository.interface';
import { UserEntity } from './UserEntity';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly bcryptService: IBcryptService
  ) {}

  async checkExist(username: string): Promise<boolean> {
    const isExist = await this.userRepository.exist({ where: { username } });
    return isExist;
  }

  async getByUsername(username: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        username: username,
      },
      select: {
        password: true,
      },
    });
    return user;
  }

  async register(newUser: Partial<User>): Promise<void> {
    newUser.password = await this.bcryptService.hash(newUser.password);
    await this.userRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findById(id: string): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: string, toUpdateUser: Partial<User>): Promise<User> {
    await this.userRepository.update({ id }, toUpdateUser);
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  async delete(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    const res = await this.userRepository.remove(user);
    return res;
  }
}
