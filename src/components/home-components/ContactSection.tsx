"use client";

import { MapPin, Mail } from "lucide-react";
import ContactForm from "../ui-components/forms/ContactForm";
import WhatsAppIcon from "../ui-components/icons/WhatsAppIcon";
import { motion } from "framer-motion";

export default function ContactSection() {
  const mapsUrl = "https://maps.app.goo.gl/KnKUJXcJ6CHmmFHn7";

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="w-full px-5 md:px-[15%]">
        {/* Left Aligned Clean Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-5"
          >
            — CONTACT
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 leading-[1.05] tracking-tight mb-8"
          >
            Let's build something <br className="hidden md:block" /> meaningful
            and scalable.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 font-light max-w-2xl leading-relaxed"
          >
            Share your idea, goals, or technical scope. We'll shape the right
            roadmap and execution approach from day one.
          </motion.p>
        </div>

        {/* 2-Column Grid with Top Border Motif */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 border-t border-gray-200 pt-16 md:pt-20">
          {/* Address / Contact Info Section (Left Side) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-12"
          >
            {/* Address Block */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl md:text-2xl font-light text-black tracking-tight flex items-center gap-3">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
                Office
              </h3>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 font-light leading-relaxed text-lg hover:text-black hover:translate-x-2 transition-all duration-300 w-fit pl-8 md:pl-9"
                aria-label="Open Office location in Google Maps"
              >
                Kajipara, Sukh Sagar Road,
                <br />
                741222.
                <br />
                Chakdaha, Nadia.
              </a>
            </div>

            <hr className="border-gray-200 w-full max-w-xs" />

            {/* Direct Contact */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl md:text-2xl font-light text-black tracking-tight flex items-center gap-3">
                <Mail className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
                Direct Communication
              </h3>

              <div className="flex flex-col gap-4 pl-8 md:pl-9">
                <a
                  href="mailto:info@concepteur.com"
                  className="text-gray-500 font-light text-lg hover:text-black transition-colors w-fit"
                >
                  info@concepteur.com
                </a>
                <a
                  href="https://wa.me/919832996894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 font-light text-lg hover:text-black transition-colors flex items-center gap-2 w-fit group"
                  aria-label="Chat on WhatsApp at +91 9832996894"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                  +91 9832996894
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Section (Right Side) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
