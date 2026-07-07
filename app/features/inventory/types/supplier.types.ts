export interface Supplier {
    id: string;
    company: string;
    contactPerson: string;
    email: string;
    phone: string;
    status: "Active" | "Inactive";
}