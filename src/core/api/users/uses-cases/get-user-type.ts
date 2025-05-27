import { UserRepository } from '../domain/UserRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserTypeUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(): string[] {
    return this.userRepository.getOptions();
  }
}
