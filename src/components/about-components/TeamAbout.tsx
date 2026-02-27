import React from 'react'
const team = [
    { initials: "MC", name: "Mandira Chakraborty", role: "Founder" },
    { initials: "PD", name: "Provat Das", role: "Senior lead Software Architect" },
    { initials: "PD", name: "Proparna Das", role: "Senior Software Engineer" },
    { initials: "AS", name: "Ankur Saha", role: "Software Engineer" },
    { initials: "SS", name: "Spandan Saha", role: "Software Engineer" },
    { initials: "AD", name: "Arpan Das", role: "Software Engineer" },
    { initials: "AR", name: "Antar Roy", role: "Software Engineer" },
    { initials: "RS", name: "Rohit Saha", role: "Junior Software Engineer" },
    { initials: "RG", name: "Rick Goswami", role: "Junior Software Engineer" },
];

const TeamAbout = () => {
    return (

        <section className="py-0">
            <div className="max-w-7xl mx-auto px-8">

                <div className="bg-[#f3f3f3]/80 backdrop-blur-md rounded-3xl py-20 px-8 md:px-16">

                    {/* Intro */}
                    <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                            Meet the Team
                        </p>
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black">
                            The Minds Behind the Mission.
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

                        {team.map((member) => (
                            <div key={member.name} className="text-center space-y-4">

                                <div className="h-16 w-16 mx-auto rounded-full bg-black text-white flex items-center justify-center text-sm font-medium tracking-widest">
                                    {member.initials}
                                </div>

                                <div>
                                    <h4 className="text-black font-medium">
                                        {member.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {member.role}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>

    )
}

export default TeamAbout