import Image from "next/image"
import LetsTalkBtn from "../ui-components/buttons/LetsTalkBtn"
import LearnMoreBtn from "../ui-components/buttons/LearnMoreBtn"

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden  flex items-center min-h-screen">

            {/* Background gradient (valid Tailwind syntax) */}
            {/* <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-[#f3f3f3] to-[#e9e9e9]" /> */}

            {/* Soft glow without arbitrary values */}
            <div className="absolute inset-0 -z-10 flex items-center justify-end opacity-40">
                <div className="w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                <div className="max-w-xl space-y-10">

                    <h1 className="text-4xl md:text-6xl leading-tight font-semibold text-gray-900">
                        Shaping tomorrow&apos;s breakthroughs, today with AI.
                    </h1>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Concepteur transforms AI into real-world business breakthroughs, converting emerging intelligence into structured systems. We don’t just build AI — we engineer outcomes.
                    </p>

                    <div className="flex items-center gap-4 pt-4">

                        <LetsTalkBtn />

                        <LearnMoreBtn />

                    </div>

                </div>                   <div className="relative w-full max-w-lg md:max-w-xl">

                    {/* Background glow */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-50">
                        <div className="w-90 h-90 bg-gray-200 rounded-full blur-3xl" />
                    </div>

                    <Image
                        src="/AI-BALL.png"
                        alt="AI Network Sphere"
                        width={800}
                        height={800}
                        className="w-full h-auto object-contain drop-shadow-xl"
                        priority
                    />

                </div>
            </div>

        </section>
    )
}