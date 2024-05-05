import * as z from "zod"

export const RegisterSchema = z.object({
    name: z.string().min(6, { message: "Too short"}),
    username: z.string().min(8, { message: "Too short"}),
    email: z.string().email(),
    password: z.string().min(6, { message: "Password must be at least 6 characters."}),
  })

  export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 6 characters."}),
  })