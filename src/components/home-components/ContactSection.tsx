import ContactForm from "../ui-components/forms/ContactForm";

export default function ContactSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        {/* Centered Clean Header */}
        <div className="text-center mb-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">
            Start a Conversation
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black">
            Let's Build Something Meaningful.
          </h2>
        </div>

        {/* Pure Form Directly on Grid */}
        <ContactForm />
      </div>
    </section>
  );
}
