import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './UserEntity';
import { UserRepoProvider } from './UserProvider';
import { BcryptServiceModule } from '../services/bcrypt/bcrypt.module';
import { UserRepository } from './UserRepository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), BcryptServiceModule],
  providers: [UserRepository, UserRepoProvider],
  exports: [UserRepository, UserRepoProvider],
})
export class UserRepositoryModule {}
