"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";

// Needed for pure continuous marquee effect in Swiper
import "swiper/css";

const testimonials = [
  {
    quote:
      "Concepteur made the entire process very smooth for us. They understood our requirements clearly and delivered exactly what we were looking for. Everything works properly, and managing our daily operations has become much easier now.They were responsive, professional, and easy to work with throughout the project. I appreciate their support and dedication.",
    company: "Thinkerslane",
    author: "Ashim Das",
  },
  {
    quote:
      "It’s been over two years now working together, and we’ve had a great experience throughout. The CRM system has been reliable and fits well into our daily workflow. Whenever we need updates or support, the team is there and responds quickly.We’re not going anywhere — looking forward to continuing this partnership",
    company: "Keysale",
    author: "Par Gustaffson",
  },
  {
    quote:
      "From the beginning, the collaboration has been straightforward and dependable. Communication is clear, deadlines are respected, and support is always available when we need it.",
    company: "Suprokash Publication",
    author: "Suprokash",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Compact, Clean Header */}
        <div className="mb-16 pb-8 border-b border-gray-100 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">
              Client Recognition
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
              Trusted by Industry.
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Our clients rely on disciplined engineering and strategic thinking
            to drive measurable growth.
          </p>
        </div>
      </div>

      {/* 
        Linear Marquee Slider Container 
        Taking the swiper outside the exact bounds of the main container slightly 
        allows the slides to flow off the screen smoothly left and right.
      */}
      <div className="relative w-full max-w-7xl px-6 md:px-8 mx-auto">
        {/* Fading Edges for the marquee */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          loop={true}
          speed={6000} // Very slow continuous speed
          grabCursor={true} // Shows hand cursor to encourage swiping
          autoplay={{
            delay: 0, // No delay, continuous movement
            disableOnInteraction: true,
            pauseOnMouseEnter: true, // Pauses when user hovers to read
          }}
          // The critical CSS injection for continuous linear movement without snapping/bouncing
          style={{ transitionTimingFunction: "linear" } as React.CSSProperties}
          className="w-full h-full continuous-slider py-4"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              {/* Added a subtle border/hover effect to make each drag target feel physical */}
              <div className="flex flex-col h-full justify-between p-8 md:p-10 border border-gray-100 rounded-2xl hover:border-gray-200 transition-colors bg-white">
                <div>
                  <Quote className="w-6 h-6 text-black opacity-10 mb-6 rotate-180" />
                  <p className="text-lg font-light text-gray-900 leading-relaxed mb-10">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-white">
                      {item.author.charAt(0)}
                    </span>
                  </div>
                  <div>
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
      </div>

      {/* Global override to ensure linear swiper transitions in Next.js/Tailwind */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .continuous-slider .swiper-wrapper {
          -webkit-transition-timing-function: linear !important;
          transition-timing-function: linear !important;
        }
      `,
        }}
      />
    </section>
  );
}
