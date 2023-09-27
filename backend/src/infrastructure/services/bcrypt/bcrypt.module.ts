import { Module } from '@nestjs/common';
import { BcryptProvider } from './bcrypt.provider';
import { BcryptService } from './bcrypt.service';

@Module({
  providers: [BcryptService, BcryptProvider],
  exports: [BcryptService, BcryptProvider],
})
export class BcryptServiceModule {}
