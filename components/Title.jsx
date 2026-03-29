import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";
import React from "react";

const Title = ({ children, className, font = "lato" }) => {
  return (
    <p className={cn("brand-title  break-all", className, getFontFamily(font))}>
      {children}
    </p>
  );
};

export default Title;
