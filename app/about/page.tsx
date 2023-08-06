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
      className="pt-32 md:pt-44 pl-4 md:pl-10 flex flex-col md:flex-row gap-8 pb-10 md:gap-20"
    >
      <div className="w-[20rem] md:w-[30rem] flex flex-col gap-4">
        <p>
          In pursuit of exceptional flavors, we scour the world's best
          coffee-growing regions to bring our customers not just a beverage, but
          an immersive coffee experience. As we take you from the highlands of
          Ethiopia to the tropical forests of Costa Rica, each month's delivery
          from Coffee Surprise is a new journey that opens up a world of tastes,
          textures, and stories right in your cup.
        </p>
        <p>
          We prioritize forming close partnerships with local farmers, taking
          the time to understand their craft, their passion, and their
          dedication to producing top-quality beans. These partnerships allow us
          to select beans that are not only full of character but also promote
          sustainable farming practices, benefiting the environment and the
          communities that nurture our beloved coffee.
        </p>
        <p>
          We believe in celebrating the diversity and artistry of coffee. Every
          subscription box you receive tells a different story—of the earth
          where the beans grew, of the farmers who put their heart and soul into
          cultivation, and of the unique culture that surrounds coffee in each
          region. By engaging with Coffee Surprise, you're stepping into a world
          where coffee is more than a morning ritual; it's an exciting
          exploration of flavors, origins, and human connection. Join us in our
          ongoing quest to discover coffee's surprises, one cup at a time.
        </p>
      </div>
      <Image
        className="w-80 h-auto object-contain"
        src="/about-pic.jpg"
        alt="Coffee cup on a small table with a chair next to it that has a book on it"
        width="200"
        height="200"
      ></Image>
    </motion.div>
  );
}
