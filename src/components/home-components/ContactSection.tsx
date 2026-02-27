import ContactForm from "../ui-components/forms/ContactForm";

export default function ContactSection() {
    return (
        <section className="relative py-32 bg-white">
            <div className="max-w-6xl mx-auto px-8">

                {/* Section Intro - Centered */}
                <div className="max-w-4xl mx-auto mb-20 text-center space-y-6">

                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                        Start a Conversation
                    </p>

                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
                        Let’s Build Something{" "}
                        <span className="font-semibold">Meaningful Together.</span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Tell us about your vision, your goals, or your challenges.
                        We’ll respond with clarity and direction.
                    </p>

                </div>

                {/* Form Component */}
                <ContactForm />

            </div>
        </section>
    )
}