import React from 'react'
import ExploreOurWorkBtn from '../ui-components/buttons/ExploreOurWorkBtn'
import ContactUsBtn from '../ui-components/buttons/ContactUsBtn'

const HeroAbout = () => {
    return (

        <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-6 mb-10 md:mb-16">

                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                        About Concepteur Technology
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
                        Transforming Ideas Into{" "}
                        <span className="font-semibold">Digital Reality.</span>
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                        We are a forward-thinking technology company dedicated to crafting
                        innovative solutions that empower businesses to thrive in the digital age.
                    </p>

                </div>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-6">

                    <ExploreOurWorkBtn />
                    <ContactUsBtn />

                </div>

            </div>
        </section>

    )
}

export default HeroAbout
