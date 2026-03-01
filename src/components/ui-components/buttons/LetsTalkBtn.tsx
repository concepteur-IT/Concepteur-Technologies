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
      className="inline-flex items-center justify-center whitespace-nowrap bg-black text-white text-sm font-medium h-[44px] px-6 border border-transparent rounded-none transition-all duration-200 ease-in-out hover:bg-white hover:text-black hover:border-black active:opacity-90"
    >
      {"Let's Talk"}
    </Link>
  );
};

export default LetsTalkBtn;
