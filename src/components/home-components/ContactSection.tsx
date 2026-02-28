"use client";

import { motion } from "framer-motion";
import ContactForm from "../ui-components/forms/ContactForm";

export default function ContactSection() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-10 md:mb-14 space-y-5 md:space-y-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
            Start a Conversation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
            Let&apos;s Build Something <span className="font-semibold">Meaningful</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Share your vision and priorities. We will respond with a practical
            roadmap tailored to your business goals.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto border border-gray-200 rounded-2xl md:rounded-3xl bg-white shadow-sm p-5 sm:p-7 md:p-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
}
