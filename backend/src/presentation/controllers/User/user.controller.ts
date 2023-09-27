import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteUseCase } from '../../../usecase/user/DeleteUseCase';
import { FindAllUseCase } from '../../../usecase/user/FindAllUseCase';
import { FindOneByIdUseCase } from '../../../usecase/user/FindOneByIdUseCase';
import { RegisterUseCase } from '../../../usecase/user/RegisterUseCase';
import { UpdateUseCase } from '../../../usecase/user/UpdateUseCase';
import { JwtAuthGuard } from '../../guards/jwtAuth.guard';
import { RegisterDTO } from './DTO/register.dto';
import { UpdateUserDTO } from './DTO/update.dto';
import { UserResponse } from './DTO/user.response';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly findById: FindOneByIdUseCase,
    private readonly update: UpdateUseCase,
    private readonly registerUseCase: RegisterUseCase,
    private readonly deleteUseCase: DeleteUseCase,
    private readonly findAllUseCase: FindAllUseCase
  ) {}

  @Post()
  async register(@Body() dto: RegisterDTO) {
    await this.registerUseCase.execute(dto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiResponse({
    type: UserResponse,
  })
  async getAll() {
    return this.findAllUseCase.execute();
  }

  @ApiResponse({
    type: UserResponse,
  })
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.findById.execute(id);
  }

  @Patch(':id')
  async updateById(@Param('id') id: string, @Body() dto: UpdateUserDTO) {
    return this.update.execute(id, dto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.deleteUseCase.execute(id);
  }
}
