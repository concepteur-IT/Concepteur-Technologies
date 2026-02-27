"use client"

import { useState } from "react"
import SubmitBtn from "../buttons/SubmitBtn"

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        project: "",
        services: [] as string[],
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value, checked } = e.target
        setFormData({
            ...formData,
            services: checked
                ? [...formData.services, value]
                : formData.services.filter((service) => service !== value),
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className="bg-gray-50 border border-black/5 rounded-3xl p-10 md:p-14">
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >

                {/* Name */}
                <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
                    />
                </div>

                {/* Email */}
                <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Your Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
                    />
                </div>

                {/* Phone */}
                <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Contact Number
                    </label>
                    <input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
                    />
                </div>

                {/* Location */}
                <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        onChange={handleChange}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
                    />
                </div>

                {/* Services Selection */}
                {/* Services Selection */}
                <div className="md:col-span-2 space-y-6 pt-2">

                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        Choose the services that best fit your needs
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                        {[
                            "AI & Intelligent Automation",
                            "Website Development",
                            "Mobile App",
                            "Backend & Data Engineering",
                            "Cloud & Infrastructure",
                            "E-Commerce",
                            "UI / UX Design",
                            "Continuous Optimization & Support",
                        ].map((service) => {

                            const isSelected = formData.services.includes(service)

                            return (
                                <label
                                    key={service}
                                    className={`
                        cursor-pointer text-center rounded-xl px-4 py-3 text-sm
                        border transition-all duration-300
                        ${isSelected
                                            ? "bg-black text-white border-black"
                                            : "bg-white border-black/10 text-gray-600 hover:border-black/40"
                                        }
                    `}
                                >
                                    <input
                                        type="checkbox"
                                        value={service}
                                        onChange={handleCheckboxChange}
                                        className="hidden"
                                    />
                                    {service}
                                </label>
                            )
                        })}

                    </div>

                </div>

                {/* Textarea */}
                <div className="md:col-span-2 space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Project Description
                    </label>
                    <textarea
                        name="project"
                        rows={5}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all resize-none"
                    />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 pt-4">
                    <SubmitBtn label="Submit Inquiry" />
                </div>

            </form>
        </div>
    )
}