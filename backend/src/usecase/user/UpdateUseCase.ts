import { Injectable } from '@nestjs/common';
import { User } from '../../domain/models/User/User';
import { IUserRepository } from '../../domain/models/User/userRepository.interface';
import { ExceptionsService } from '../../presentation/exceptions/exceptions.service';
import { LoggerService } from '../../presentation/logger/logger.service';

@Injectable()
export class UpdateUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly loggerService: LoggerService,
    private readonly exceptionsService: ExceptionsService
  ) {}
  async execute(id: string, toUpdateUser: Partial<User>): Promise<User> {
    try {
      const user = await this.userRepository.update(id, toUpdateUser);
      if (!user) {
        this.exceptionsService.NotFoundException({
          message: 'Cannot find user',
        });
      }
      return user;
    } catch (e) {
      this.loggerService.error('Update User UseCase', e?.message, e?.trace);
      this.exceptionsService.internalServerErrorException();
    }
  }
}
