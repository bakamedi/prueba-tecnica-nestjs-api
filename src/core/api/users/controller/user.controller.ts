import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import {
  CreateUserProfileDto,
  CreateUserProfileSchema,
} from '../dtos/user.dto';
import { CreateUserUseCase } from '../uses-cases/create';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation.pipe';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post('')
  @UsePipes(new ZodValidationPipe(CreateUserProfileSchema))
  update(@Body() body: CreateUserProfileDto) {
    return this.createUserUseCase.execute(body);
  }
}
