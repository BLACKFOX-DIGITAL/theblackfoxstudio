import React from "react";
import Image from "next/image";
import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";

const TrustAuthoritySection = () => {
  const stats = [
    { value: "10,000+", label: "Images Delivered" },
    { value: "99.9%", label: "Quality Rate" },
    { value: "24hr", label: "Turnaround Time" },
    { value: "500+", label: "Global Clients" },
  ];

  return (
    <section className="py-16 lg:py-[4vw] bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="container relative z-10 text-center">
        <h2 className={cn("text-[#011] text-2xl lg:text-[2vw] font-bold mb-4 tracking-wider uppercase", getFontFamily("saira-condensed"))}>
          TRUSTED BY GLOBAL APPAREL BRANDS
        </h2>
        <p className="text-[#626262] text-sm lg:text-base mb-12 max-w-2xl mx-auto font-light">
          We act as an extension of your own studio, providing reliable, high-volume image editing without compromising on quality or deadlines.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 divide-x divide-gray-200">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <span className={cn("text-3xl lg:text-[3vw] font-black text-brandPrimary leading-none mb-2", getFontFamily("roboto"))}>
                {stat.value}
              </span>
              <span className="text-[#626262] text-xs lg:text-sm uppercase tracking-widest font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Brand Logos Placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Replace this div with actual <Image /> tags once logos are available */}
           <div className="h-10 w-32 bg-gray-200 rounded"></div>
           <div className="h-10 w-32 bg-gray-200 rounded"></div>
           <div className="h-10 w-32 bg-gray-200 rounded"></div>
           <div className="h-10 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustAuthoritySection;
