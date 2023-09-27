import { Provider } from '@nestjs/common';
import { IBcryptService } from '../../../domain/adapters/bcrypt.interface';
import { BcryptService } from './bcrypt.service';

export const BcryptProvider: Provider = {
  provide: IBcryptService,
  useClass: BcryptService,
};
