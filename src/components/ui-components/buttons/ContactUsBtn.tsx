import Link from 'next/link'
import React from 'react'

const ContactUsBtn = () => {
  return (
      <Link
          href="/contact"
          className="inline-flex items-center justify-center whitespace-nowrap border border-gray-400 text-gray-800 text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
      >
          Contact Us
      </Link>
  )
}

export default ContactUsBtn
