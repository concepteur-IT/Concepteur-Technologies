"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      {/* Ultra Compact Grid Fields - 3 Columns on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-300 py-1.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-300 py-1.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-300 py-1.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
        />
      </div>

      {/* Services Filter Pills - Extreme Tighter Tracking */}
      <div className="space-y-2 pt-1">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
          I am interested in...
        </p>
        <div className="flex flex-wrap gap-2">
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
                                    px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-300 border
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
          <div className="pt-1 mt-1 animate-in fade-in slide-in-from-top-1 duration-300">
            <input
              type="text"
              name="otherServiceDetail"
              placeholder="Please specify what you are looking for..."
              onChange={handleChange}
              value={formData.otherServiceDetail || ""}
              className="w-full max-w-sm bg-transparent border-b border-gray-300 py-1 space-y-0 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
            />
          </div>
        )}
      </div>

      {/* Compact Textarea */}
      <textarea
        name="project"
        rows={1}
        placeholder="Brief project details..."
        onChange={handleChange}
        className="w-full bg-transparent border-b border-gray-300 py-1.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors resize-none mt-1"
      />

      {/* Submit Inline */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-50 mt-1">
        <button
          type="submit"
          className="bg-black text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-colors duration-200"
        >
          Send Inquiry
        </button>
        <div className="text-center md:text-right flex items-center gap-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
            Or email:
          </p>
          <a
            href="mailto:info@concepteur.com"
            className="text-[13px] font-semibold text-black hover:opacity-70 transition-colors"
          >
            info@concepteur.com
          </a>
        </div>
      </div>
    </form>
  );
}
