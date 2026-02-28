"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: "",
    services: [] as string[],
    otherServiceDetail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
        />
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
          I am interested in...
        </p>
        <div className="flex flex-wrap gap-2.5">
          {[
            "Web Dev",
            "Mobile App",
            "AI / Auto",
            "UI/UX",
            "Cloud",
            "E-Commerce",
            "Other",
          ].map((service) => {
            const isSelected = formData.services.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => handleCheckboxChange(service)}
                className={`
                                    px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border
                                    ${isSelected ? "bg-black text-white border-black" : "bg-transparent text-gray-500 border-gray-200 hover:border-black hover:text-black"}
                                `}
              >
                {service}
              </button>
            );
          })}
        </div>

        {/* Conditionally rendered "Other" text input */}
        {formData.services.includes("Other") && (
          <div className="pt-1 animate-in fade-in slide-in-from-top-1 duration-300">
            <input
              type="text"
              name="otherServiceDetail"
              placeholder="Please specify what you are looking for..."
              onChange={handleChange}
              value={formData.otherServiceDetail || ""}
              className="w-full max-w-md bg-transparent border-b border-gray-300 py-2 text-base text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
            />
          </div>
        )}
      </div>

      <textarea
        name="project"
        rows={3}
        placeholder="Brief project details..."
        onChange={handleChange}
        className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
      />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-5 border-t border-gray-100">
        <button
          type="submit"
          className="w-full sm:w-auto bg-black text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-colors duration-200"
        >
          Send Inquiry
        </button>
        <div className="text-center md:text-right flex items-center gap-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-medium">
            Or email:
          </p>
          <a
            href="mailto:info@concepteur.com"
            className="text-sm font-semibold text-black hover:opacity-70 transition-colors"
          >
            info@concepteur.com
          </a>
        </div>
      </div>
    </form>
  );
}
