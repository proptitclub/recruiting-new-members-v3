import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { LoginUseCase } from '../../usecase/Authentication/LoginUsecase';
import { ExceptionsService } from '../exceptions/exceptions.service';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly loginUsecase: LoginUseCase,
    private readonly logger: LoggerService,
    private readonly exceptionsService: ExceptionsService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    const user = this.loginUsecase.validateUserForJWTStragtegy(
      payload.username
    );
    if (!user) {
      this.logger.warn('JwtStrategy', `User not found`);
      this.exceptionsService.UnauthorizedException({
        message: 'User not found',
      });
    }
    return user;
  }
}
