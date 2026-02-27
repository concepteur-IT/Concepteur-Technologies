import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | Concepteur",
    description: "Review the terms and conditions governing the use of Concepteur services and website.",
}

export default function TermsOfServicePage() {
    return (
        <main className="relative w-full overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-[#f3f3f3] to-[#e9e9e9]" />

            {/* Subtle Radial Depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-200 h-100 bg-gradient-radial from-black/5 to-transparent blur-3xl opacity-30" />

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-8 pt-28 pb-20">
                <h1 className="text-5xl md:text-6xl font-semibold text-black tracking-tight">
                    Terms of Service
                </h1>

                <div className="mt-6 h-0.75 w-20 bg-black rounded-full" />

                <p className="mt-8 text-lg text-gray-600 max-w-2xl leading-relaxed">
                    These terms govern your access to and use of Concepteur’s website,
                    services, and digital solutions. Please read them carefully.
                </p>

                <p className="mt-6 text-sm text-gray-500">
                    Last Updated: {new Date().toLocaleDateString()}
                </p>
            </section>

            {/* Content Card */}
            <section className="pb-28">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-12 space-y-14 text-gray-700 leading-relaxed">

                        {/* 1 */}
                        <div className="space-y-5">
                            <h2 className="text-2xl font-semibold text-black">
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing or using our website and services, you agree to be
                                bound by these Terms of Service and all applicable laws and
                                regulations.
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="space-y-5">
                            <h2 className="text-2xl font-semibold text-black">
                                2. Services Provided
                            </h2>
                            <p>
                                Concepteur provides digital services including but not limited
                                to web development, application development, AI solutions,
                                consulting, and related technical services.
                            </p>
                            <p>
                                We reserve the right to modify or discontinue services at our
                                discretion without prior notice.
                            </p>
                        </div>

                        {/* 3 */}
                        <div className="space-y-5">
                            <h2 className="text-2xl font-semibold text-black">
                                3. User Responsibilities
                            </h2>
                            <p>
                                You agree not to misuse our services or attempt unauthorized
                                access to systems, data, or infrastructure.
                            </p>
                            <p>
                                Any illegal, fraudulent, or abusive activity may result in
                                termination of service and legal action.
                            </p>
                        </div>

                        {/* 4 */}
                        <div className="space-y-5">
                            <h2 className="text-2xl font-semibold text-black">
                                4. Intellectual Property
                            </h2>
                            <p>
                                All content, branding, designs, and materials provided by
                                Concepteur remain the intellectual property of the company
                                unless otherwise agreed in writing.
                            </p>
                        </div>

                        {/* 5 */}
                        <div className="space-y-5">
                            <h2 className="text-2xl font-semibold text-black">
                                5. Limitation of Liability
                            </h2>
                            <p>
                                Concepteur shall not be liable for any indirect, incidental,
                                or consequential damages arising from the use of our services.
                            </p>
                        </div>

                        {/* 6 */}
                        <div className="space-y-5">
                            <h2 className="text-2xl font-semibold text-black">
                                6. Termination
                            </h2>
                            <p>
                                We reserve the right to suspend or terminate access to our
                                services at our discretion if these terms are violated.
                            </p>
                        </div>

                        {/* 7 */}
                        <div className="space-y-5">
                            <h2 className="text-2xl font-semibold text-black">
                                7. Governing Law
                            </h2>
                            <p>
                                These terms shall be governed by and interpreted in accordance
                                with the laws applicable in your operating jurisdiction.
                            </p>
                        </div>

                        {/* Contact Block */}
                        <div className="border border-gray-200 rounded-xl p-8 bg-white">
                            <h3 className="text-xl font-semibold text-black mb-4">
                                Questions?
                            </h3>
                            <p className="text-gray-600">
                                For any questions regarding these Terms of Service, contact us at:
                            </p>
                            <p className="mt-4 font-medium text-black">
                                info@concepteurit.com
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}