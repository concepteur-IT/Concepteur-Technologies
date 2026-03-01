import Link from "next/link";
import React from "react";

const ContactUsBtn = () => {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center whitespace-nowrap bg-white text-black text-sm font-medium h-[44px] px-6 border border-black rounded-none transition-all duration-200 ease-in-out hover:bg-black hover:text-white active:opacity-90"
    >
      Contact Us
    </Link>
  );
};

export default ContactUsBtn;
