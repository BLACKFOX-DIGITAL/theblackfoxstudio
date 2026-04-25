import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";
import React from "react";
import { Compare } from "./ui/compare";
import Link from "next/link";
import MagneticCTA from "./animations/MagneticCTA";

const GetStarted = ({ firstImage, secondImage, className, imageClass }) => {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <Compare
        firstImage={firstImage}
        secondImage={secondImage}
        firstImageClassName={cn("object-cover object-center", imageClass)}
        secondImageClassname={cn("object-cover object-center", imageClass)}
        className="min-h-[250px] w-full md:h-[16.406vw]  "
        slideMode="hover"
        autoplay={true}
        showHandlebar={false}
      />
      <div className="   absolute top-0 left-0 size-full bg-black/50 z-[51] flex items-center ">
        <div className="container space-y-5 lg:space-y-[1.458vw]">
          <h5
            className={cn(
              "text-2xl font-black tracking-[5px] text-white lg:text-[1.667vw] lg:leading-[1.771vw] text-center  ",
              getFontFamily("lato")
            )}
          >
            Let&apos;s Get Started!
          </h5>
          <p
            className={
              "text-white lg:text-[.938vw] lg:leading-[1.146vw] text-center "
            }
          >
            Contact us today for any of your image editing needs. Let us worry
            about the editing so you can focus on your business.
          </p>

          <div className=" grid gap-2 lg:grid-cols-2 lg:w-fit  mx-auto  ">
            {/* <Link className="btn-brand-primary  " href="#">
              GET A QUOTE
            </Link> */}
            <MagneticCTA className="btn-brand-primary" href="/free-trial" dataCursor="start">
              FREE TRIAL
            </MagneticCTA>
            <MagneticCTA className="btn-brand-primary" href="/contact" dataCursor="contact">
              CONTACT US
            </MagneticCTA>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
