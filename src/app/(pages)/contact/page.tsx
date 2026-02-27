import React from "react"
import ContactForm from "@/components/ui-components/forms/ContactForm"

const page = () => {
  return (
    <main className="bg-white">

      <section className="relative py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">

          {/* Section Intro - System Consistent */}
          <div className="max-w-4xl mx-auto mb-20 text-center space-y-6">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
              Contact
            </p>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
              Let’s Build Something{" "}
              <span className="font-semibold">Meaningful Together.</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Tell us about your vision, your goals, or your challenges.
              We’ll respond with clarity and direction.
            </p>

          </div>

          {/* Centered Form */}
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>

        </div>
      </section>

    </main>
  )
}

export default page