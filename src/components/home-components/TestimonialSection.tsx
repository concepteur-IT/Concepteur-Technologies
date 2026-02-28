"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

// Needed for pure continuous marquee effect in Swiper
import "swiper/css";

import { testimonialsData as testimonials } from "@/data/testimonialsData";

export default function TestimonialSection() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header aligned with Services/Product pattern */}
        <motion.div
          className="max-w-4xl mx-auto mb-12 md:mb-16 text-center space-y-5 md:space-y-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
            Client Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
            Trusted by <span className="font-semibold">Industry Leaders</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Our clients rely on disciplined engineering and strategic thinking
            to drive measurable growth.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative w-full max-w-6xl px-4 sm:px-6 md:px-8 mx-auto"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.08}
          spaceBetween={12}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 22 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          loop
          speed={700}
          allowTouchMove
          grabCursor
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full h-full py-2 md:py-4"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="flex flex-col h-full justify-between p-3 sm:p-6 md:p-8 border border-gray-200 rounded-xl sm:rounded-2xl hover:border-gray-300 transition-colors bg-white shadow-sm">
                <div>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-black opacity-10 mb-4 sm:mb-6 rotate-180 mx-auto sm:mx-0" />
                  <p className="text-[15px] sm:text-base md:text-lg font-light text-gray-900 leading-relaxed mb-6 sm:mb-8 md:mb-10 text-center sm:text-left">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-white">
                      {item.author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-black uppercase tracking-wider">
                      {item.author}
                    </h3>
                    <p className="text-xs text-gray-500 tracking-widest mt-0.5">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
}
