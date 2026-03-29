"use client";
import React from "react";
import CompareWrapper from "./CompareWrapper";
import { motion } from "framer-motion";

const Cards = () => {
  const data = [
    {
      title: "E-COMMERCE PHOTO EDIT",
      before: "/ECommerce.jpg",
      after: "/ECommerce-Done.jpg",
    },
    {
      title: "BACKGROUND REMOVAL",
      before: "/bg-removal.jpg",
      after: "/bg-removal-done.jpg",
    },
    {
      title: "GHOST MANNEQUIN",
      before: "/Ghost-Mannequin-2-Raw.jpg",
      after: "/Ghost-Mannequin-2-Done.jpg",
    },
    {
      title: "BEAUTY/SKIN RETOUCH",
      before: "/Beauty-Retouch-Service-Page.jpg",
      after: "/Beauty-Retouch-Service-Page-Done.jpg",
    },
    {
      title: "FLATLAY RETOUCH",
      before: "/Flatlay-1.jpg",
      after: "/Flatlay-1-Done.jpg",
    },
    {
      title: "MASKING",
      before: "/Masking-Retouch-Service-3.jpg",
      after: "/Masking-Retouch-Service-Done-3.jpg",
    },
    {
      title: "SHADOW/REFLECTION CREATION",
      before: "/Reflection-Service.jpg",
      after: "/Reflection-Service-Done.jpg",
    },
    {
      title: "IMAGE MANIPULATION",
      before: "/Image-Manipulation.jpg",
      after: "/Image-Manipulation-Done.jpg",
    },
    {
      title: "MODEL RETOUCH",
      before: "/Model-Retouch-1.jpg",
      after: "/Model-Retouch-1-Done.jpg",
    },
    {
      title: "COLOR MANIPULATION",
      before: "/Color-Change.jpg",
      after: "/Color-Change-Done.jpg",
    },
    {
      title: "JEWELRY RETOUCH",
      before: "/Jewlery-Retouch-5.jpg",
      after: "/Jewlery-Retouch-5-Done.jpg",
    },
    {
      title: "PRODUCT RETOUCH",
      before: "/Product-Retouch-Service-Page.jpg",
      after: "/Product-Retouch-Service-Page-Done.jpg",
    },
  ];

  const variants = {
    enter: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="mt-5 lg:mt-[2.083vw] grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-[1.042vw]"
    >
      {data?.map((ele, ind) => (
        <motion.div
          key={`services-${ind}`}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="  w-full">
            <CompareWrapper ele={ele} ind={ind} />
          </div>
          <p className="w-full text-base py-5 lg:text-[.833vw] lg:py-[1.042vw] lg:leading-[1.25vw] text-center text-white bg-[#3F4447] mt-1 lg:mt-[.204vw]">
            {ele?.title}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;
