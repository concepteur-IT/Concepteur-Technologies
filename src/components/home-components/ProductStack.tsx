import Image from "next/image"
import Link from "next/link"

export default function ProductStack() {
    const stack = [
        { name: "Full-Stack", icon: "/products/product-icon1.svg" },
        { name: "Frontend", icon: "/products/product-icon2a.svg" },
        { name: "Node.js", icon: "/products/product-icon3.svg" },
        { name: "Next.js", icon: "/products/nextjs.png" },
        { name: "PHP", icon: "/products/product-icon4.svg" },
        { name: "AngularJS", icon: "/products/product-icon7.svg" },
        { name: "React", icon: "/products/product-icon6.svg" },
        { name: "Drupal", icon: "/products/drupal.png" },
        { name: "Flutter", icon: "/products/product-icon8.svg" },
        { name: "WordPress", icon: "/products/product-icon9.svg" },
        { name: "MongoDB", icon: "/products/mongo.ico" },
    ]

    return (
        <section className="relative py-20 bg-white">
            <div className="max-w-7xl mx-auto px-8">

                {/* Section Intro */}
                <div className="max-w-4xl mx-auto mb-20 text-center space-y-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                        Product-Focused
                    </p>

                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
                        From Design to Scale — <span className="font-semibold">We Build What Grows.</span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Your full-stack development partner across every stage of product evolution.
                    </p>
                </div>

                {/* Refined Stack Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-black/6 rounded-xl overflow-hidden shadow-sm">
                    {stack.map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center p-10 bg-white border-r border-b border-black/6 transition-all duration-500 hover:z-10"
                        >
                            {/* Soft background glow on hover */}
                            <div className="absolute inset-0 bg-radial-gradient from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon Container */}
                            <div className="relative h-12 w-12 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    fill
                                    className="object-contain grayscale opacity-100 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                                />
                            </div>

                            {/* Label */}
                            <span className="relative text-[13px] font-medium tracking-wider text-gray-500 group-hover:text-black transition-colors duration-300">
                                {item.name}
                            </span>

                            {/* Hover Accent Line (Bottom) */}
                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full" />
                        </div>
                    ))}

                    {/* Elegant "Filling" tile for odd-numbered grids */}
                    <div className="hidden lg:flex items-center justify-center p-10 bg-gray-50/30 border-r border-b border-black/6">
                        <span className="text-[12px] uppercase tracking-[0.2em] text-gray-800 font-bold rotate-90">
                            + More
                        </span>
                    </div>
                </div>

                {/* Bottom CTA (Unchanged) */}
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/services"
                        className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gray-500 transition-colors duration-300 hover:text-black"
                    >
                        See All Services
                        <span className="h-px w-8 bg-gray-400 transition-all duration-300 group-hover:w-14 group-hover:bg-black" />
                    </Link>
                </div>

            </div>
        </section>
    )
}