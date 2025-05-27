/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/IUser';
import { PrismaService } from 'src/core/database/services/prisma.service';
import { CreateUserProfileDto } from '../dtos/user.dto';
import { User } from './User';

@Injectable()
export class UserRepository implements IUser {
  constructor(private readonly prisma: PrismaService) {}
  getOptions(): string[] {
    return ['Agent', 'Main Corp', 'Accounting'];
  }
  async create(createUserProfileDto: CreateUserProfileDto): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        name: createUserProfileDto.name,
        email: createUserProfileDto.email,
        userType: createUserProfileDto.userType,
      },
    });
    return new User(
      String(user.id),
      String(user.name),
      String(user.email),
      user.userType as 'Agent' | 'MainCorp' | 'Accounting',
    );
  }
}
