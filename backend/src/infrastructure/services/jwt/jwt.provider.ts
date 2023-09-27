import { Provider } from '@nestjs/common';
import { JwtTokenService } from './jwt.service';
import { IJwtService } from '../../../domain/adapters/jwt.interface';

export const JwtProvider: Provider = {
  provide: IJwtService,
  useClass: JwtTokenService,
};
