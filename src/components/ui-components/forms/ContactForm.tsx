"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
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

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setStatus("loading");

    const selectedServices = formData.services.includes("Other")
      ? [
          ...formData.services.filter((service) => service !== "Other"),
          formData.otherServiceDetail
            ? `Other: ${formData.otherServiceDetail}`
            : "Other",
        ]
      : formData.services;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.company,
          project: formData.project,
          services: selectedServices,
          captchaToken: captchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send inquiry");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        project: "",
        services: [],
        otherServiceDetail: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name *"
          required
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email Address *"
          required
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
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
        value={formData.project}
        rows={3}
        placeholder="Brief project details..."
        required
        onChange={handleChange}
        className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
      />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-5 border-t border-gray-100">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-5 md:px-10 md:py-6 text-base font-medium hover:bg-gray-800 transition-colors custom-notch-tl-br disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "SENDING..." : "Send Inquiry"}
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {status === "success" && (
          <p className="text-sm text-green-700">
            Inquiry sent successfully. We&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">
            Unable to send inquiry right now. Please try again.
          </p>
        )}
      </div>

      {/* Invisible Recaptcha or Standard View */}
      <div className="pt-2">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "dummy_key_to_satisfy_build"}
          onChange={handleCaptchaChange}
          theme="light"
        />
      </div>
    </form>
  );
}
