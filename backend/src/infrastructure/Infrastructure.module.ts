import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './User/UserRepositopy.Module';
import { BcryptServiceModule } from './services/bcrypt/bcrypt.module';

@Module({
  imports: [UserRepositoryModule, BcryptServiceModule],
  providers: [UserRepositoryModule],
  exports: [UserRepositoryModule],
})
export class InfrasModule {}
