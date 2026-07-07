import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(3),

    sku: z.string().min(2),

    category: z.string().min(2),

    price: z.coerce.number().min(0),

    stock: z.coerce.number().min(0),
});