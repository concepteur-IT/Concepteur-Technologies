import React from 'react'
const values = [
    {
        title: "Innovation",
        description:
            "Pushing boundaries with cutting-edge solutions that transform industries.",
    },
    {
        title: "Integrity",
        description:
            "Building trust through transparency, reliability, and ethical practices.",
    },
    {
        title: "Excellence",
        description:
            "Delivering exceptional quality in every project we undertake.",
    },
    {
        title: "Collaboration",
        description:
            "Working together with clients to achieve extraordinary results.",
    },
]

const MissionAbout = () => {
    return (
        <section className="py-32">
            <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20">

                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
                        Our Mission
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        At Concepteur Technology, we believe innovation is about building the right systems — not just new ones. Our mission is to deliver technological solutions that address today’s challenges while preparing organizations for sustainable growth.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        We approach every project with architectural clarity and disciplined execution. From system design to deployment, each decision is guided by scalability, performance, and long-term impact.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        By combining deep technical expertise with thoughtful product thinking, we create solutions that reduce complexity, enhance efficiency, and support measurable progress.
                    </p>
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
                        What Drives Us
                    </h2>

                    <div className="grid gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="space-y-2">
                                <h4 className="text-lg font-medium text-black">
                                    {value.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default MissionAbout