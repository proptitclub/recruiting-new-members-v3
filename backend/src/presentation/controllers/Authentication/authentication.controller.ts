import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './DTO/login.dto';
import { LoginUseCase } from '../../../usecase/Authentication/LoginUsecase';

@ApiTags('authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly loginUsecase: LoginUseCase) {}
  @Post()
  async login(@Body() dto: LoginDTO): Promise<string> {
    const jwt = await this.loginUsecase.execute(dto.username, dto.password);
    return jwt;
  }
}
