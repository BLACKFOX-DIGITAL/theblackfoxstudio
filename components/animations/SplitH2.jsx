"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib";

export default function SplitH2({ text, className }) {
  const words = text.split(" ");
  return (
    <h2 className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block pr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}
