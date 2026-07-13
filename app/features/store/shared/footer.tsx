import { Container } from "./container";

export function Footer() {
    return (
        <footer className="mt-24 border-t">
            <Container>
                <div className="py-16">
                    <div className="grid gap-10 md:grid-cols-4">
                        <div>
                            <h3 className="text-xl font-bold">
                                CommerceOS
                            </h3>

                            <p className="mt-4 text-sm text-gray-500">
                                Premium shopping experience
                                built with modern commerce.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">
                                Shop
                            </h4>

                            <ul className="mt-4 space-y-2 text-gray-500">
                                <li>Products</li>
                                <li>Collections</li>
                                <li>New Arrivals</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold">
                                Company
                            </h4>

                            <ul className="mt-4 space-y-2 text-gray-500">
                                <li>About</li>
                                <li>Contact</li>
                                <li>Support</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold">
                                Newsletter
                            </h4>

                            <input
                                placeholder="Email Address"
                                className="
                                mt-4
                                w-full
                                rounded-xl
                                border
                                p-3
                                "
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}