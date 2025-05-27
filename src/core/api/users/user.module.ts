import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { UserRepository } from './domain/UserRepository';
import { UserController } from './controller/user.controller';
import { CreateUserUseCase } from './uses-cases/create';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserRepository, CreateUserUseCase],
  exports: [UserRepository, CreateUserUseCase],
})
export class UserModule {}
