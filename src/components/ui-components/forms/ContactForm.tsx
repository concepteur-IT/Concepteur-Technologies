"use client"

import { useState } from "react"
import Swal from "sweetalert2"
import SubmitBtn from "../buttons/SubmitBtn"

export default function ContactForm() {

    const createQuiz = () => {
        const a = Math.floor(Math.random() * 8) + 1
        const b = Math.floor(Math.random() * 8) + 1
        return { question: `${a} + ${b}`, answer: a + b }
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        project: "",
        services: [] as string[],
    })
    const [quiz, setQuiz] = useState(createQuiz)
    const [quizInput, setQuizInput] = useState("")
    const [loading, setLoading] = useState(false)

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (Number(quizInput) !== quiz.answer) {
            await Swal.fire({
                title: "Quiz answer is incorrect",
                text: `Please solve ${quiz.question} correctly before sending.`,
                icon: "warning",
                confirmButtonText: "Try again",
                confirmButtonColor: "#111827",
            })
            return
        }

        try {
            setLoading(true)
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result?.error || "Failed to send message.")
            }

            await Swal.fire({
                title: "Message sent successfully",
                html: `
                    <p style="margin-bottom: 8px;">Your inquiry has been delivered.</p>
                    <p style="margin-bottom: 0;">We will reply to <strong>${formData.email}</strong> soon.</p>
                `,
                icon: "success",
                confirmButtonText: "Awesome",
                confirmButtonColor: "#111827",
                backdrop: "rgba(17, 24, 39, 0.45)",
                timer: 5000,
                timerProgressBar: true,
            })

            setFormData({
                name: "",
                email: "",
                phone: "",
                location: "",
                project: "",
                services: [],
            })
            setQuizInput("")
            setQuiz(createQuiz())
        } catch (error) {
            const message = error instanceof Error ? error.message : "Something went wrong."
            await Swal.fire({
                title: "Sending failed",
                text: message,
                icon: "error",
                confirmButtonText: "Close",
                confirmButtonColor: "#111827",
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-[#f3f3f3]/80 backdrop-blur-md border border-gray-200 rounded-3xl p-10 md:p-14">
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
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
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
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
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
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
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
                            "AI & Automation",
                            "Website Building",
                            "Mobile App",
                            "Data Engineering",
                            "Backend",
                            "Cloud",
                            "E-Commerce",
                            "UI / UX Design",
                            "Optimization & Support",
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
                                        : "bg-white border-gray-200 text-gray-600 hover:border-black/40"
                                        }
                    `}
                                >
                                    <input
                                        type="checkbox"
                                        value={service}
                                        checked={isSelected}
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
                        value={formData.project}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all resize-none"
                    />
                </div>

                <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Anti-spam Quiz: {quiz.question} = ?
                    </label>
                    <input
                        type="number"
                        value={quizInput}
                        onChange={(e) => setQuizInput(e.target.value)}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
                    />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 pt-4">
                    <SubmitBtn label="Submit Inquiry" loading={loading} />
                </div>

            </form>
        </div>
    )
}
