import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Concepteur",
    description: "Learn how Concepteur collects, uses, and protects your information.",
}

export default function PrivacyPolicyPage() {
    return (
        <main className="relative w-full overflow-hidden mt-12 sm:mt-14 md:mt-15">

            {/* Background Gradient Layer */}
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-[#f3f3f3] to-[#e9e9e9]" />

            {/* Subtle Radial Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-200 h-100 bg-gradient-radial from-black/5 to-transparent blur-3xl opacity-30" />

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-12 md:pb-20">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-black tracking-tight">
                    Privacy Policy
                </h1>

                <div className="mt-6 h-0.75 w-20 bg-black rounded-full" />

                <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
                    We value transparency and trust. This policy outlines how we collect,
                    use, and safeguard your information when interacting with Concepteur.
                </p>
            </section>

            {/* Content Card */}
            <section className="pb-16 md:pb-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 md:p-12 space-y-10 md:space-y-16 text-gray-700 leading-relaxed">

                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-black">
                                1. Information We Collect
                            </h2>
                            <p>
                                We may collect personal information such as your name, email
                                address, phone number, and company details when you contact us
                                or request services.
                            </p>
                            <p>
                                Non-personal information such as browser type, device details,
                                and usage analytics may also be collected to improve performance.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-black">
                                2. How We Use Your Information
                            </h2>
                            <p>
                                Collected data is used to respond to inquiries, deliver
                                services, maintain security, and improve user experience.
                            </p>
                            <p>
                                We do not sell or rent personal information to third parties.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-black">
                                3. Data Protection & Security
                            </h2>
                            <p>
                                We implement appropriate technical and organizational measures
                                to protect your data against unauthorized access or disclosure.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-black">
                                4. Cookies & Tracking
                            </h2>
                            <p>
                                Our website may use cookies and analytics tools to enhance
                                usability. You can manage cookie preferences through your browser.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-black">
                                5. Contact
                            </h2>
                            <p>
                                If you have any questions about this Privacy Policy, contact us at:
                            </p>
                            <p className="font-medium text-black">
                                info@concepteurit.com
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}
