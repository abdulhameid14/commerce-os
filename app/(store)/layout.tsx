import type { ReactNode } from "react";

import { Navbar } from "@/app/features/store/shared/navbar";
import { Footer } from "@/app/features/store/shared/footer";
import { AnnouncementBar } from "@/app/features/store/shared/announcement-bar";

export default function StoreLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            <AnnouncementBar />
            <Navbar />

            <main>{children}</main>

            <Footer />
        </div>
    );
}