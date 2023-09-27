import { Injectable } from '@nestjs/common';
import { IBcryptService } from '../../domain/adapters/bcrypt.interface';
import { IJwtService } from '../../domain/adapters/jwt.interface';
import { IUserRepository } from '../../domain/models/User/userRepository.interface';
import { ExceptionsService } from '../../presentation/exceptions/exceptions.service';
import { LoggerService } from '../../presentation/logger/logger.service';

@Injectable()
export class LoginUseCase {
  constructor(
    private readonly jwtTokenService: IJwtService,
    private readonly bcryptService: IBcryptService,
    private readonly userRepository: IUserRepository,
    private readonly loggerService: LoggerService,
    private readonly exceptionsService: ExceptionsService
  ) {}

  async execute(username: string, password: string) {
    const user = await this.userRepository.getByUsername(username);
    if (!user) {
      this.loggerService.error('Login UseCase', 'Cannot find user by username');
      this.exceptionsService.NotFoundException({ message: 'Cannot find user' });
    }
    const loginValidate = await this.bcryptService.compare(
      password,
      user.password
    );
    if (!loginValidate) {
      this.loggerService.error('Login UseCase', 'Wrong username or password');
      this.exceptionsService.UnauthorizedException({
        message: 'Login failed, wrong username or password',
      });
    }
    const jwt = await this.jwtTokenService.createToken({ username });
    return jwt;
  }

  async validateUserForJWTStragtegy(username: string) {
    const user = await this.userRepository.getByUsername(username);
    if (!user) {
      return null;
    }
    return user;
  }
}
