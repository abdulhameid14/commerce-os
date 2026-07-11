import { z } from "zod";

export const productSchema = z.object({
    name: z
        .string()
        .min(3, "Name must be at least 3 characters"),

    sku: z
        .string()
        .min(2, "SKU must be at least 2 characters"),

    category: z
        .string()
        .min(
            2,
            "Category must be at least 2 characters"
        ),

    price: z.coerce
        .number()
        .min(
            0,
            "Price cannot be negative"
        ),

    stock: z.coerce
        .number()
        .min(
            0,
            "Stock cannot be negative"
        ),

    status: z.enum([
        "active",
        "inactive",
    ]),
});