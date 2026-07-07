import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";
import { registerSchema } from "../schemas/register.schema";

export type RegisterFormData =
    z.infer<typeof registerSchema>;

export type LoginFormData =
    z.infer<typeof loginSchema>;