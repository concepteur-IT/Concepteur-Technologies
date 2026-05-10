"use client";

import { motion } from "framer-motion";
import { TeamMember } from "@/data/teamData";

interface ProfileDetailsProps {
  member: TeamMember;
}

export default function ProfileDetails({ member }: ProfileDetailsProps) {
  const hasExperience = member.experience && member.experience.length > 0;
  const hasSkills = member.skills && member.skills.length > 0;
  const hasBlogs = member.blogs && member.blogs.length > 0;

  if (!hasExperience && !hasSkills && !hasBlogs) {
    return null; // Nothing to show here
  }

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="w-full px-5 md:px-[10%] xl:px-[15%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main Content Column (Experience & Blogs) */}
          <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
            {/* Experience Section */}
            {hasExperience && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 md:mb-12">
                  Professional Experience
                </h3>

                <div className="flex flex-col gap-8 md:gap-10">
                  {member.experience!.map((exp, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-8 group"
                    >
                      {/* Timeline / Duration */}
                      <div className="sm:w-32 shrink-0 pt-1">
                        <p className="text-sm font-mono text-gray-400 group-hover:text-gray-900 transition-colors">
                          {exp.duration}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="flex-1 pb-8 sm:pb-10 border-b border-gray-100 group-last:border-0 group-last:pb-0">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                          {exp.company}
                        </p>
                        {exp.description && (
                          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {exp.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Blogs Section */}
            {hasBlogs && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 md:mb-12">
                  Recent Publications
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {member.blogs!.map((blog, idx) => (
                    <a
                      key={idx}
                      href={blog.link}
                      className="group flex flex-col p-6 bg-[#fcfcfc] border border-gray-100 hover:border-gray-300 transition-colors duration-300 custom-notch-tl-br"
                    >
                      <p className="text-xs font-mono text-gray-400 mb-3">
                        {blog.date}
                      </p>
                      <h4 className="text-lg font-medium text-gray-900 leading-snug mb-4 group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h4>
                      <div className="mt-auto flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-400 group-hover:text-blue-600 transition-colors">
                        Read Article
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar Column (Skills) */}
          <div className="lg:col-span-4">
            {hasSkills && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-32 p-8 bg-[#fcfcfc] border border-gray-100 custom-notch-tl-br"
              >
                <h3 className="text-xl font-light text-gray-900 mb-6">
                  Core Expertise
                </h3>

                <div className="flex flex-wrap gap-2">
                  {member.skills!.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-gray-400 hover:text-black transition-colors rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
