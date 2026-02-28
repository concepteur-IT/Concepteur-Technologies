import React from 'react'

const ContactHero = () => {
    return (
        <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-6">

                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                        Contact
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
                        Let’s Build Something{" "}
                        <span className="font-semibold">Meaningful Together.</span>
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                        Tell us about your vision, your goals, or your challenges.
                        We’ll respond with clarity and direction.
                    </p>

                </div>

            </div>
        </section>

    )
}

export default ContactHero
