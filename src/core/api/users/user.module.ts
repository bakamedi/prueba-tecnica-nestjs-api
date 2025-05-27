import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { UserRepository } from './domain/UserRepository';
import { UserController } from './controller/user.controller';
import { CreateUserUseCase } from './uses-cases/create';
import { GetUserTypeUseCase } from './uses-cases/get-user-type';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserRepository, CreateUserUseCase, GetUserTypeUseCase],
  exports: [UserRepository, CreateUserUseCase, GetUserTypeUseCase],
})
export class UserModule {}
