import Link from "next/link"

const stats = [
  { value: "41+", label: "Projects Completed" },
  { value: "45+", label: "Happy Clients" },
  { value: "10+", label: "Team Members" },
  { value: "9+", label: "Projects Ongoing" },
]

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

const team = [
  { initials: "SC", name: "Provat Das", role: "Lead Designer" },
  { initials: "MJ", name: "Spandan Saha", role: "Chief Technology Officer" },
  { initials: "ER", name: "Proparna Das", role: "Product Manager" },
  { initials: "DK", name: "Arpan Das", role: "Senior Developer" },
  { initials: "PP", name: "Ankur Saha", role: "UX Researcher" },
  { initials: "JW", name: "Rick Goswami", role: "DevOps Engineer" },
  { initials: "LA", name: "Antar Roy", role: "Creative Director" },
  { initials: "AT", name: "Rohit Saha", role: "Business Strategist" },
]

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8">

          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
              About Concepteur Technology
            </p>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
              Transforming Ideas Into{" "}
              <span className="font-semibold">Digital Reality.</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              We are a forward-thinking technology company dedicated to crafting
              innovative solutions that empower businesses to thrive in the digital age.
            </p>

          </div>

          <div className="flex justify-center gap-6">
            <Link
              href="/case-studies"
              className="bg-black text-white font-medium px-6 py-3 rounded-xl hover:bg-neutral-800 transition-colors"
            >
              Explore Our Work
            </Link>

            <Link
              href="/contact"
              className="border border-black/10 px-6 py-3 rounded-xl hover:border-black transition-colors"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-t border-b border-black/5 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-light text-black">
                {stat.value}
              </h3>
              <p className="text-sm uppercase tracking-wider text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Mission */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20">

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              At Concepteur Technology, we believe in the power of innovation
              to shape the future. Our mission is to deliver technological
              solutions that not only meet today’s challenges but anticipate tomorrow’s opportunities.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We combine deep technical expertise with creative thinking
              to build products and services that create measurable,
              long-term impact.
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

      {/* Team */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">

          <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
              Meet the Team
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black">
              The Minds Behind the Mission.
            </h2>
          </div>

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
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8 text-center space-y-6">

          <h3 className="text-2xl font-light text-black">
            Ready to Build What’s Next?
          </h3>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gray-600 hover:text-black transition-colors"
          >
            Start a Conversation
            <span className="h-px w-8 bg-gray-400 transition-all duration-300 group-hover:w-14 group-hover:bg-black" />
          </Link>

        </div>
      </section>

    </main>
  )
}