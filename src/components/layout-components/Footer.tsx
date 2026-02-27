import Link from "next/link"
import Logo from "@/components/logo-component/Logo"

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-[#f5f5f5]/90 to-[#eaeaea]/90 backdrop-blur-md border-t border-gray-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-16">

          {/* Logo */}
          <div className="space-y-6 max-w-sm">
            <Link href="/" aria-label="Go to homepage" className="flex items-center">
              <Logo />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              We build modern, scalable digital solutions — from web applications
              to enterprise-grade AI systems — designed for performance and growth.
            </p>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-black">Company</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-black">Home</Link></li>
              <li><Link href="/about" className="hover:text-black">About Us</Link></li>
              <li><Link href="/services" className="hover:text-black">Services</Link></li>
              {/* <li><Link href="/blog" className="hover:text-black">Blog</Link></li> */}
              <li><Link href="/case-studies" className="hover:text-black">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-black">Services</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="/services" className="hover:text-black">AI & Automation</Link></li>
              <li><Link href="/services" className="hover:text-black">Website Development</Link></li>
              <li><Link href="/services" className="hover:text-black">Mobile App Development</Link></li>
              <li><Link href="/services" className="hover:text-black">E-Commerce</Link></li>
              <li><Link href="/services" className="hover:text-black">Server-side & Database</Link></li>
              <li><Link href="/services" className="hover:text-black">UI / UX Design</Link></li>
              <li><Link href="/services" className="hover:text-black">Maintenance and Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-black">Get In Touch</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>info@concepteurit.com</li>
              {/* <li>+91 98765 43210</li> */}
              <li>Kolkata, India</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>
            © 2025 Concepture. All rights reserved.
          </p>

          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}