"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const ImageShowcase = ({ images }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="overflow-hidden flex relative h-full   [mask-image:linear-gradient(to_top,transparent,black,transparent)] ">
      <motion.div
        style={{
          y,
        }}
        className="flex flex-col flex-none h-full "
      >
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={idx}
            style={{ rotate: Math.random() * 20 - 10 }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl mt-4 p-1 bg-gray border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="showcase"
              width={600}
              height={600}
              className="rounded-lg w-full h-auto object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageShowcase;
