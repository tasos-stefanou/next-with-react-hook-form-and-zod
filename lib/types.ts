import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, 'Password must be at least 10 characters'),
    confirmPassword: z.string(),
    age: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
