import Link from "next/link";
import React from "react";
import type { MouseEventHandler } from "react";

type LetsTalkBtnProps = {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const LetsTalkBtn = ({ onClick }: LetsTalkBtnProps) => {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className="inline-flex items-center justify-center whitespace-nowrap bg-black text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors duration-200"
    >
      {"Let's Talk"}
    </Link>
  );
};

export default LetsTalkBtn;
