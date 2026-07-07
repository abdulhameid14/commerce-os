import { ReactNode } from "react";
import { Sidebar } from "../components/dashboard/sidebar";
import { Header } from "../components/dashboard/header";

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200">
            <Sidebar />

            <div className="flex min-h-screen flex-col lg:ml-72">
                <Header />

                <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}