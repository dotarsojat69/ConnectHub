import * as z from "zod";

export const RegisterSchema = z.object({
    name: z.string().min(6, { message: "Too short"}),
    username: z.string().min(8, { message: "Too short"}),
    email: z.string().email(),
    password: z.string().min(6, { message: "Password must be at least 6 characters."}),
  });

  export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 6 characters."}),
  });

  export const PostsSchema = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(6).max(100),
    tags: z.string(),
  });

  export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    bio: z.string(),
  });