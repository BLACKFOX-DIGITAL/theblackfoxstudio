"use client";
import React from "react";
import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";
import { getFontFamily } from "@/utils/font";
import { cn } from "@/lib";

const LampWrapper = ({ children }) => {
  return (
    <LampContainer className={` `}>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "font-[300] text-3xl lg:text-[42px] lg:leading-[42px] tracking-[5px] text-center text-white ",
          getFontFamily("lato")
        )}
      >
        {children}
      </motion.h1>
    </LampContainer>
  );
};

export default LampWrapper;
