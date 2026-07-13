import { Container } from "../../shared/container";

export function FeaturedProducts() {
    return (
        <section className="py-24">
            <Container>
                <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-bold">
                        Featured Products
                    </h2>

                    <button className="font-medium">
                        View All
                    </button>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {Array.from({
                        length: 4,
                    }).map((_, index) => (
                        <div
                            key={index}
                            className="
                            overflow-hidden
                            rounded-3xl
                            border
                            "
                        >
                            <div className="h-80 bg-gray-100" />

                            <div className="p-5">
                                <p className="text-sm text-gray-500">
                                    Electronics
                                </p>

                                <h3 className="mt-2 font-semibold">
                                    Premium Product
                                </h3>

                                <p className="mt-3 font-bold">
                                    $299
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}