"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Reveal({
  children,
}: {
  children: ReactNode;
}) {
  return (
<motion.div
  initial={{
    opacity: 0,
    x: -100,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.9,
  }}
>
  {children}
</motion.div>
  );
}