export type OrderStatus =
    | "Pending"
    | "Processing"
    | "Shipped"
    | "Delivered"
    | "Cancelled"
    | "Refunded";

export type PaymentStatus =
    | "Paid"
    | "Pending"
    | "Failed";

export interface OrderItem {
    id: string;
    productName: string;
    price: number;
    quantity: number;
}

export interface ShippingAddress {
    street: string;
    city: string;
    country: string;
}

export interface Order {
    id: string;
    customer: string;
    email: string;


    items: number;

    total: number;
    paymentStatus: PaymentStatus;
    status: OrderStatus;
    createdAt: string;


    shippingAddress?: ShippingAddress;
    orderItems?: OrderItem[];
    shippingCost?: number;
}