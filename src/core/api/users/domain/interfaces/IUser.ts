import { CreateUserProfileDto } from '../../dtos/user.dto';
import { User } from '../User';

export interface IUser {
  create(createUserProfileDto: CreateUserProfileDto): Promise<User>;
}
