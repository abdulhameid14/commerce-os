import { z } from "zod";

export const registerSchema = z
    .object({
        fullName: z.string().min(3),

        companyName: z.string().min(2),

        email: z.string().email(),

        password: z.string().min(8),

        confirmPassword: z.string().min(8),
    })
    .refine(
        (data) =>
            data.password === data.confirmPassword,
        {
            path: ["confirmPassword"],
            message: "Passwords do not match",
        }
    );