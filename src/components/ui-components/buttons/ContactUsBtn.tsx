import Link from 'next/link'
import React from 'react'

const ContactUsBtn = () => {
  return (
      <div>  <Link
          href="/contact"
          className="border border-gray-400 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"      >
          Contact Us
      </Link></div>
  )
}

export default ContactUsBtn