"use client"

import Link from "next/link";
import {motion} from "framer-motion";

interface ButtonProps {
  href: string
  label: string
}

export default function LinkText ({href, label}: ButtonProps) {
  return (
    <motion.button
      initial={{ textDecoration: 'underline', borderRadius: '0.5rem'}}
      whileHover={{ color: 'black', backgroundColor: 'white', textDecoration: 'none', scale: 1.1, shadow: 'white'}}
      whileTap={{scale: 0.9}}
    >
      <Link href={href}>
        <div className="p-2">{label}</div>
      </Link>
    </motion.button>
  )
}
