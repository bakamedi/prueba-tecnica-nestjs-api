import { Injectable } from '@nestjs/common';
import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';
import { CreateUserProfileDto } from '../dtos/user.dto';
import { UseCase } from 'src/shared/interfaces/use-case.interface';

@Injectable()
export class CreateUserUseCase implements UseCase<CreateUserProfileDto, User> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: CreateUserProfileDto): Promise<User> {
    return await this.userRepository.create(request);
  }
}
