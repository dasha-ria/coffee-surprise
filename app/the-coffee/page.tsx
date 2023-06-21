"use client";
import { motion } from "framer-motion";

export default function TheCoffee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="pt-32 pl-10"
    >
      the koffe
    </motion.div>
  );
}
