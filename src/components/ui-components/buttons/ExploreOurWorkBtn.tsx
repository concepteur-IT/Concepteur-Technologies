import Link from 'next/link'
import React from 'react'

const ExploreOurWorkBtn = () => {
  return (
      <div>   <Link
          href="/case-studies"
          className="bg-black text-white font-medium px-6 py-3 rounded-xl hover:bg-neutral-800 transition-colors"
      >
          Explore Our Work
      </Link></div>
  )
}

export default ExploreOurWorkBtn