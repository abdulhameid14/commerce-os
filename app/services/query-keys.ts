export const queryKeys = {
    orders: {
        all: ["orders"] as const,
    },

    products: {
        all: ["products"] as const,
    },

    customers: {
        all: ["customers"] as const,
    },

    inventory: {
        all: ["inventory"],
        movements: ["inventory-movements"],
        suppliers: ["inventory-suppliers"],
        purchaseOrders: ["inventory-purchase-orders"],
        reports: ["inventory-reports"],
        warehouses: ["inventory-warehouses"],
    },

    marketing: {
        all: ["marketing"] as const,
    },

    analytics: {
        all: ["analytics"] as const,
    },

    reports: {
        all: ["reports"] as const,
    },
}; 