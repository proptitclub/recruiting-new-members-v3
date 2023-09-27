import { Injectable } from '@nestjs/common';
import { User } from '../../domain/models/User/User';
import { IUserRepository } from '../../domain/models/User/userRepository.interface';
import { ExceptionsService } from '../../presentation/exceptions/exceptions.service';
import { LoggerService } from '../../presentation/logger/logger.service';

@Injectable()
export class RegisterUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly loggerService: LoggerService,
    private readonly exceptionsService: ExceptionsService
  ) {}

  async execute(dto: Partial<User>) {
    const checkUSer = await this.userRepository.checkExist(dto.username);
    if (checkUSer) {
      this.loggerService.error(
        'Register User UseCase',
        'username has already existed'
      );
      this.exceptionsService.badRequestException({
        message: 'Username has already existed',
      });
    }
    try {
      await this.userRepository.register(dto);
    } catch (e) {
      console.log(e);
    }
  }
}
