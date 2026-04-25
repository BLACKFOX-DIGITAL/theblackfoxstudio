"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib";

export default function SplitH2({ text, className }) {
  const words = text.split(" ");
  return (
    <h2 className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.05 + i * 0.08, ease: [0.7, 0, 0.3, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}
