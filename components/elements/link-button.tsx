"use client"

import Link from "next/link";
import {motion} from "framer-motion";

interface ButtonProps {
  href: string
  label: string
}

export default function LinkButton ({href, label}: ButtonProps) {
  return (
    <motion.button
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
    >
      <Link href={href}>
        <div className="bg-white text-black rounded-xl p-4 text-2xl">{label}</div>
      </Link>
    </motion.button>
  )
}
