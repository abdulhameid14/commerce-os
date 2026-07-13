import { ArrowRight } from "lucide-react";

import { Container } from "../../shared/container";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <Container>
                <div
                    className="
                    grid
                    min-h-175
                    items-center
                    gap-12
                    lg:grid-cols-2
                    "
                >
                    <div>
                        <span
                            className="
                            rounded-full
                            border
                            px-4
                            py-2
                            text-sm
                            "
                        >
                            Summer Collection 2026
                        </span>

                        <h1
                            className="
                            mt-8
                            text-5xl
                            font-black
                            leading-tight
                            lg:text-7xl
                            "
                        >
                            Discover
                            <br />
                            Premium
                            Products
                        </h1>

                        <p
                            className="
                            mt-6
                            max-w-xl
                            text-lg
                            text-gray-500
                            "
                        >
                            Curated collections designed
                            for modern lifestyles.
                        </p>

                        <div className="mt-10 flex gap-4">
                            <button
                                className="
                                rounded-xl
                                bg-black
                                px-8
                                py-4
                                text-white
                                "
                            >
                                Shop Now
                            </button>

                            <button
                                className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                px-8
                                py-4
                                "
                            >
                                Collections

                                <ArrowRight
                                    size={18}
                                />
                            </button>
                        </div>
                    </div>

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                            alt="Hero"
                            className="
                            h-162.5
                            w-full
                            rounded-[40px]
                            object-cover
                            "
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}