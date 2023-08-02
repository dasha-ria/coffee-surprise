"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "ABOUT" },
  { href: "/subscribe", label: "SUBSCRIBE" },
];

export function NavMenu() {
  const path = usePathname();
  return (
    <nav className="flex items-end pt-2 md:pt-4 px-2 md:px-8 justify-between w-full fixed z-50 pb-2 md:pb-4 bg-white/80 backdrop-blur-2xl">
      <Link href="/">
        <Image
          src="/coffeesurprise-logo.svg"
          alt="Coffee Surprise logo"
          width="50"
          height="50"
          className="w-24 md:w-28 h-auto"
        ></Image>
      </Link>
      <ul className="flex gap-4 md:gap-8">
        {links.map((link) => (
          <li key={link.href} className="text-sm md:text-md">
            <Link className="relative" href={link.href}>
              {link.href === path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-menu-underline w-full bg-black"
                ></motion.span>
              )}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
