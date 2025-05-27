import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import {
  CreateUserProfileDto,
  CreateUserProfileSchema,
} from '../dtos/user.dto';
import { CreateUserUseCase } from '../uses-cases/create';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation.pipe';
import { GetUserTypeUseCase } from '../uses-cases/get-user-type';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserTypeUseCase: GetUserTypeUseCase,
  ) {}

  @Get('get-options')
  get() {
    return this.getUserTypeUseCase.execute();
  }

  @Post('save')
  @UsePipes(new ZodValidationPipe(CreateUserProfileSchema))
  create(@Body() body: CreateUserProfileDto) {
    return this.createUserUseCase.execute(body);
  }
}
