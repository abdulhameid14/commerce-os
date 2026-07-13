import { Container } from "../../shared/container";

const collections = [
    "Men",
    "Women",
    "Accessories",
    "Electronics",
];

export function CollectionsGrid() {
    return (
        <section className="py-24">
            <Container>
                <h2 className="text-4xl font-bold">
                    Shop Collections
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {collections.map((item) => (
                        <div
                            key={item}
                            className="
                            group
                            overflow-hidden
                            rounded-3xl
                            bg-gray-100
                            "
                        >
                            <div className="h-80 bg-gray-200" />

                            <div className="p-6">
                                <h3 className="text-xl font-semibold">
                                    {item}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}