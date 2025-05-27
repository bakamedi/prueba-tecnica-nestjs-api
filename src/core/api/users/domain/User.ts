import { UserType } from '@prisma/client';

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public userType: UserType,
  ) {}
}
