"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pl-10"
    >
      <p className="w-2/3 pt-20">
        At Coffee Surprise, we are more than just a coffee subscription service
        – we are a community of coffee lovers, explorers, and aficionados.
        Founded in 2020 by a team of third wave coffee enthusiasts, our mission
        is to connect people with the rich flavors and stories behind every
        bean.
      </p>
      <div className="flex justify-end pr-40 pt-10">
        <Image
          className="w-80 h-auto"
          src="/about-pic.jpg"
          alt="Coffee cup on a small table with a chair next to it that has a book on it"
          width="200"
          height="200"
        ></Image>
      </div>
    </motion.div>
  );
}
