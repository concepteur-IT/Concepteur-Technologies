import React from "react";
import { Linkedin, ArrowUpRight } from "lucide-react";

const team = [
  {
    initials: "MC",
    name: "Mandira Chakraborty",
    role: "Founder & CEO",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "PD",
    name: "Provat Das",
    role: "Senior lead Software Architect",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "PD",
    name: "Proparna Das",
    role: "Senior Software Engineer",
  },
  { initials: "AS", name: "Ankur Saha", role: "Software Engineer" },
  { initials: "SS", name: "Spandan Saha", role: "Software Engineer" },
  {
    initials: "AD",
    name: "Arpan Das",
    role: "Software Engineer",
    linkedin: "https://linkedin.com",
  },
  { initials: "IG", name: "Ishita Guha", role: "Software Engineer" },
  { initials: "AR", name: "Antar Roy", role: "Software Engineer" },
  { initials: "RS", name: "Rohit Saha", role: "Junior Software Engineer" },
  { initials: "RG", name: "Rick Goswami", role: "Engineering Intern" },
];

const TeamAbout = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Intro */}
        <div className="max-w-2xl mx-auto text-center mb-20 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">
            Meet the Team
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black">
            The Minds Behind the Mission.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed pt-2">
            A cohesive group of architects, engineers, and designers dedicated
            to building robust, elegant, and highly scalable solutions for
            modern businesses.
          </p>
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex items-center gap-5 border-t border-gray-100 pt-6"
            >
              {/* Black Square Initials */}
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-semibold text-[13px] tracking-widest shrink-0 rounded-sm">
                {member.initials}
              </div>

              <div className="flex-1">
                <h4 className="text-black font-semibold text-[17px] tracking-tight transition-colors">
                  {member.name}
                </h4>
                <p className="text-[13px] text-gray-500 mt-0.5 font-medium">
                  {member.role}
                </p>
              </div>

              {/* Optional LinkedIn Button & External Arrow */}
              {member.linkedin && (
                <div className="ml-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-black hover:opacity-60 transition-opacity block"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-[18px] h-[18px]" />
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAbout;
