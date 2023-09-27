import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../domain/models/User/userRepository.interface';
import { ExceptionsService } from '../../presentation/exceptions/exceptions.service';
import { LoggerService } from '../../presentation/logger/logger.service';

@Injectable()
export class FindOneByIdUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly loggerService: LoggerService,
    private readonly exceptionsService: ExceptionsService
  ) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      this.loggerService.error('FindOneById User UseCase', 'Cannot find user');
      this.exceptionsService.NotFoundException({
        message: 'Cannot find this user',
      });
    }
    return user;
  }
}
