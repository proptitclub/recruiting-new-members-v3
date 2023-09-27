import { Module } from '@nestjs/common';
import { InfrasModule } from '../infrastructure/Infrastructure.module';
import { BcryptServiceModule } from '../infrastructure/services/bcrypt/bcrypt.module';
import { JwtServiceModule } from '../infrastructure/services/jwt/jwt.module';
import { DeleteUseCase } from '../usecase/user/DeleteUseCase';
import { FindAllUseCase } from '../usecase/user/FindAllUseCase';
import { FindOneByIdUseCase } from '../usecase/user/FindOneByIdUseCase';
import { RegisterUseCase } from '../usecase/user/RegisterUseCase';
import { UpdateUseCase } from '../usecase/user/UpdateUseCase';
import { AuthenticationController } from './controllers/Authentication/authentication.controller';
import { UserController } from './controllers/User/user.controller';
import { ExceptionsModule } from './exceptions/exceptions.module';
import { LoggerModule } from './logger/logger.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LoginUseCase } from '../usecase/Authentication/LoginUsecase';

@Module({
  imports: [
    InfrasModule,
    JwtServiceModule,
    BcryptServiceModule,
    LoggerModule,
    ExceptionsModule,
  ],
  controllers: [UserController, AuthenticationController],
  providers: [
    RegisterUseCase,
    UpdateUseCase,
    FindOneByIdUseCase,
    LoginUseCase,
    DeleteUseCase,
    FindAllUseCase,
    JwtStrategy,
  ],
})
export class ApiModule {}
