import Link from 'next/link'
import React from 'react'

const ContactUsBtn = () => {
  return (
      <div>  <Link
          href="/contact"
          className="border border-black/10 px-6 py-3 rounded-xl hover:border-black transition-colors"
      >
          Contact Us
      </Link></div>
  )
}

export default ContactUsBtn