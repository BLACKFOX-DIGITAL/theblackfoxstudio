import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CompareWrapper from "./CompareWrapper";
import { motion } from "framer-motion";
import Cards from "./Cards";
const OurService = () => {
  return (
    <section className="brand-gap px-[20px] ">
      <div>
        <h3
          className={cn(
            "text-center text-xl lg:text-[2.188vw] lg:leading-[2.188vw] font-bold text-[#011] ",
            getFontFamily("lato")
          )}
        >
          OUR SERVICES
        </h3>
        <p className="lg:text-[.938vw] lg:leading-[1.146vw] text-[#001111b6] text-center lg:w-[28.646vw] mx-auto mt-3 ">
          Services provided are focused on Quality and On Time Delivery. Quality
          is Our #1 Priority
        </p>

        <Link
          className="w-full block text-center mt-8 lg:mt-[1.667vw] lg:max-w-[44.271vw] rounded-[20px] lg:rounded-[1.042vw] mx-auto bg-[#3F4447] text-white font-bold text-lg lg:text-[.938vw] lg:leading-[1.458vw] py-4 lg:py-[1.042vw] "
          href={`#`}
        >
          IMAGE POST PRODUCTION
        </Link>
      </div>

      <Cards />
    </section>
  );
};

export default OurService;
