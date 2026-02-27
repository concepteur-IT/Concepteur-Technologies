"use client"

interface SubmitBtnProps {
    label?: string
    loading?: boolean
    className?: string
}

export default function SubmitBtn({
    label = "Submit",
    loading = false,
}: SubmitBtnProps) {
    return (
        <button
            type="submit"
            disabled={loading}
            className="
  inline-flex items-center justify-center
  bg-black text-white font-medium tracking-wide
  px-7 py-3 rounded-xl
  transition-all duration-300
  hover:bg-neutral-800 hover:-translate-y-1px
  active:translate-y-0
  disabled:opacity-60 disabled:cursor-not-allowed
"
        >
            {loading ? "Submitting..." : label}
        </button>
    )
}