import Link from 'next/link'
import React from 'react'

const LearnMoreBtn = () => {
    return (
        <div>
            <Link
                href="/about"
                className="border border-gray-400 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
            >
                Learn More
            </Link>
        </div>
    )
}

export default LearnMoreBtn