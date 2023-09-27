import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../domain/models/User/userRepository.interface';
import { ExceptionsService } from '../../presentation/exceptions/exceptions.service';
import { LoggerService } from '../../presentation/logger/logger.service';

@Injectable()
export class FindAllUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly loggerService: LoggerService,
    private readonly exceptionsService: ExceptionsService
  ) {}

  async execute() {
    try {
      const users = await this.userRepository.findAll();
      return users;
    } catch (e) {
      this.loggerService.error('FindAll User UseCase', e?.message, e?.trace);
      this.exceptionsService.internalServerErrorException();
    }
  }
}
