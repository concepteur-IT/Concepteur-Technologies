"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import Image from "next/image"

const testimonials = [
    {
        quote:
            "Working with Concepteur completely transformed our product infrastructure. The execution was precise, scalable, and strategically aligned with our long-term goals.",
        company: "Bee Line",
        author: "Sanjib Debnath",
    },
    {
        quote:
            "Their technical depth and product thinking go far beyond development. They helped us architect systems built for sustainable growth.",
        company: "NorthBridge Labs",
        author: "Arjun Mehta",
    },
    {
        quote:
            "From concept to deployment, the process was structured and disciplined. The quality of engineering speaks for itself.",
        company: "Altura Systems",
        author: "Ritika Sharma",
    },
]

export default function TestimonialSection() {
    return (
        <section className="relative py-20  overflow-hidden">

            <div className="absolute inset-0 pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-8">

                {/* Section Intro */}
                <div className="max-w-4xl mx-auto mb-20 text-center space-y-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                        Industry Recognition
                    </p>

                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
                        Trusted by Leaders Who <span className="font-semibold">Think Long-Term.</span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Our clients rely on disciplined engineering and strategic thinking to drive measurable growth.
                    </p>
                </div>

                {/* Swiper Wrapper */}
                <div className="relative flex items-center">

                    {/* Navigation Buttons */}
                    <button className="testimonial-prev hidden md:flex absolute inset-y-0 my-auto left-0 -translate-x-12 h-14 w-14 items-center justify-center rounded-full border border-black/20 bg-black backdrop-blur-sm text-white transition-all duration-300 hover:border-gray-400 hover:text-black hover:bg-white -m-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button className="testimonial-next hidden md:flex absolute inset-y-0 my-auto right-0 translate-x-12 h-14 w-14 items-center justify-center rounded-full border border-black/20 bg-black backdrop-blur-sm text-white transition-all duration-300 hover:border-gray-400 hover:text-black hover:bg-white -m-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        slidesPerView={1}
                        loop
                        speed={900}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".testimonial-prev",
                            nextEl: ".testimonial-next",
                        }}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination",
                            bulletClass:
                                "swiper-pagination-bullet !bg-black/20 !opacity-100",
                            bulletActiveClass:
                                "!bg-black",
                        }}
                        className="pb-0!"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="text-center min-h-70 space-y-12 pb-20 bg-[#f3f3f3]/80 backdrop-blur-md border border-gray-200 rounded-2xl mx-5">

                                    <div className="flex justify-center opacity-20 mt-10">
                                        <div className="relative w-12 h-12">
                                            <Image
                                                src="/quote.avif"
                                                alt="Quote"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-700 max-w-3xl mx-auto">
                                        {item.quote}
                                    </p>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-medium text-black tracking-wide">
                                            {item.company}
                                        </h3>
                                        <p className="text-sm text-gray-500 tracking-wide">
                                            {item.author}
                                        </p>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="custom-pagination absolute bottom-0 left-0 right-0 flex justify-center" />
                </div>

            </div>
        </section>
    )
}