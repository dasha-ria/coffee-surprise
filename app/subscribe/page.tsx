"use client";
import { motion } from "framer-motion";

export default function Subscribe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pl-10"
    >
      <div></div>
    </motion.div>
  );
}
