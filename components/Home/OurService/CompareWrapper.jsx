"use client";
import React, { useState } from "react";
import { cn } from "@/lib";
import { Compare } from "@/components/ui/compare";
import { Switch } from "@/components/ui/switch";

const CompareWrapper = ({ ele, ind }) => {
  const [isAutoplay, setIsAutoplay] = useState(false);

  return (
    <div className="size-full relative ">
      <div className=" absolute z-50 left-2 top-2 flex items-center gap-2 text-sm ">
        <span className="lg:text-[.833vw] lg:leading-[1.25vw]">Autoplay</span>{" "}
        <Switch
          onCheckedChange={(e) => {
            setIsAutoplay(e);
          }}
          checked={isAutoplay}
          className={`h-5 lg:h-[1.042vw]  w-9 lg:w-[1.875vw] `}
          id="airplane-mode"
        />
      </div>

      <Compare
        firstImage={ele.before}
        secondImage={ele?.after}
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        imageHeight={317}
        imageWidth={447}
        className="size-full rounded-none aspect-[447/317] "
        slideMode="drag"
        autoplay={isAutoplay}
        showHandlebar={false}
      />
    </div>
  );
};

export default CompareWrapper;
