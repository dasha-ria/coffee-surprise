"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TheCoffee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pl-10"
    >
      <div className="flex gap-4">
        <Image
          className="h-60 w-24 object-cover overflow-hidden"
          src="/coffee-beans.jpg"
          alt="Coffee beans"
          width="200"
          height="200"
        ></Image>
        <div className="w-2/3 flex flex-col gap-2">
          <h2 className="font-bold text-lg">Dedicated to Quality</h2>
          <p>
            Our coffees are meticulously selected from small-batch, specialty
            producers globally. We've scoured the globe to find these coffee
            gems that encapsulate the soul of their origins. From the
            high-altitude farms of Ethiopia to the lush, vibrant landscapes of
            Colombia, we bring you coffees that showcase their terroir's unique
            characteristics.
          </p>
        </div>
      </div>
      <div className="w-2/3 flex flex-col gap-2">
        <h2 className="font-bold text-lg">Dedicated to Quality</h2>
        <p>
          Our coffees are meticulously selected from small-batch, specialty
          producers globally. We've scoured the globe to find these coffee gems
          that encapsulate the soul of their origins. From the high-altitude
          farms of Ethiopia to the lush, vibrant landscapes of Colombia, we
          bring you coffees that showcase their terroir's unique
          characteristics.
        </p>
      </div>
    </motion.div>
  );
}
