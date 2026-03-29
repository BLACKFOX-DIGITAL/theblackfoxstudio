import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";
import React from "react";

const SectionHeader = ({ className, title }) => {
  return (
    <div className={cn("bg-[#636669] py-5 lg:py-10 ", className)}>
      <p
        className={cn(
          "text-white text-xl lg:text-[30px] lg:leading-[22px] text-center font-bold  ",
          getFontFamily("lato")
        )}
      >
        {title}
      </p>
    </div>
  );
};

export default SectionHeader;
