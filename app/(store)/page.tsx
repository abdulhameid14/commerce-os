import { HeroSection } from "@/app/features/store/home/components/hero-section";
import { CollectionsGrid } from "@/app/features/store/home/components/collections-grid";
import { FeaturedProducts } from "@/app/features/store/home/components/featured-products";
import { Footer } from "../features/store/shared/footer";

export default function StoreHomePage() {
    return (
        <div>
            <HeroSection />

            <CollectionsGrid />

            <FeaturedProducts />
            <Footer />
        </div>
    );
}