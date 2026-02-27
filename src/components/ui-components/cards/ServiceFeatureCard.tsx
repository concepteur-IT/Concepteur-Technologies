import Image from "next/image"

interface Props {
    image: string
    title: string
    description: string
    variant?: "wide" | "default"
}

export default function ServiceFeatureCard({
    image,
    title,
    description,
    variant = "default",
}: Props) {

    const heightStyles =
        variant === "wide"
            ? "min-h-[220px]"
            : "min-h-[220px]";

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl bg-black transition-all duration-500 hover:shadow-xl ${heightStyles} w-full`}
        >

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover grayscale opacity-60 transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                <div className="max-w-md transition-all duration-500 group-hover:-translate-y-2">

                    <h3 className="text-xl md:text-2xl font-light tracking-[0.05em] text-white">
                        {title}
                    </h3>

                    <div className="mt-3 h-px w-8 bg-white/40 transition-all duration-500 group-hover:w-16 group-hover:bg-white" />

                    <p className="mt-4 max-w-sm text-sm md:text-[14px] leading-relaxed text-gray-300">
                        {description}
                    </p>

                </div>
            </div>

            {/* Border */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 transition-colors duration-500 group-hover:border-white/30" />
        </div>
    )
}