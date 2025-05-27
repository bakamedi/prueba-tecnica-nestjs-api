import { z } from 'zod';
import { UserType } from '@prisma/client';

export const CreateUserProfileSchema = z.object({
  name: z.string().email().nonempty(),
  email: z.string().max(20).nonempty(),
  userType: z.nativeEnum(UserType),
});

export type CreateUserProfileDto = z.infer<typeof CreateUserProfileSchema>;

export class CreateUserProfileDtoClass {
  name: string;

  email: string;

  userType: UserType;
}
