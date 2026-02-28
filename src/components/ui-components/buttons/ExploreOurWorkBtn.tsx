import Link from 'next/link'
import React from 'react'

const ExploreOurWorkBtn = () => {
  return (
      <Link
          href="/case-studies"
          className="inline-flex items-center justify-center whitespace-nowrap bg-black text-white text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-neutral-700 transition-colors"
      >
          Explore Our Work
      </Link>
  )
}

export default ExploreOurWorkBtn
