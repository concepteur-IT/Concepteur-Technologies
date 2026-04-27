import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactUsBtn = () => {
  return (
    <Link
      href="/contact"
      className="group inline-flex items-center gap-2 justify-center whitespace-nowrap bg-white text-black text-sm font-medium h-[44px] px-6 border border-black rounded-none transition-all duration-200 ease-in-out hover:bg-black hover:text-white active:opacity-90"
    >
      Contact Us
 <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};

export default ContactUsBtn;
