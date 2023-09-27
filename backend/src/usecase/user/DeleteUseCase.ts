import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../domain/models/User/userRepository.interface';
import { ExceptionsService } from '../../presentation/exceptions/exceptions.service';
import { LoggerService } from '../../presentation/logger/logger.service';

@Injectable()
export class DeleteUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly exceptionsService: ExceptionsService,
    private readonly loggerService: LoggerService
  ) {}
  async execute(id: string): Promise<void> {
    try {
      await this.userRepository.delete(id);
    } catch (e) {
      this.loggerService.error('Delete User UseCase', e?.message, e?.trace);
      this.exceptionsService.internalServerErrorException();
    }
  }
}
