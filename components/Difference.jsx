import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Difference = () => {
  return (
    <section className="pt-[40px] lg:pt-[90px] grid grid-cols-1 lg:grid-cols-3 ">
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className=" bg-[url('/home_glasses_cat1.jpg')] bg-cover h-[675px] w-full lg:h-[35.156vw] "
      >
        <div className="p-4 lg:p-8 flex justify-end ">
          <Image
            className=" lg:w-[.833vw]  "
            src="/home_glasses_party_style.png"
            alt="home_glasses_party_style"
            title=""
            width={16}
            height={175}
          />
        </div>
      </div>

      <div
        className=" space-y-5 lg:space-y-[1.458vw] "
        style={{ padding: "80px 8% 50px", border: "10px solid #edefef" }}
      >
        <p className="text-lg lg:text-[1.667vw] lg:leading-[1.771vw] font-black tracking-[.26vw] text-center text-[#011] ">
          FEEL THE ASTONISHING DIFFERENCE
        </p>

        <p className="text-lg lg:text-[.833vw] lg:leading-[1.25vw] tracking-[1px] lg:tracking-[.052vw] text-center text-[#011]">
          Retouch in a way that makes you stand out
        </p>

        <p className="text-sm lg:text-[.729vw] lg:leading-[1.042vw]  text-[#626262] text-center ">
          We are here to retouch your raw images, turning your pictures into the
          best shots that allows you to stand out.
        </p>

        <p className="text-sm lg:text-[.729vw] lg:leading-[1.042vw] text-[#626262] text-center ">
          Check out our edits and editing techniques on different categories of
          retouch such as; reflection, clipping and background removal, ghost
          mannequin, shadow, masking, product, beauty and jewelry retouches etc.
        </p>

        <div className="flex justify-center gap-2 lg:gap-[.417vw] ">
          <Link className=" btn-brand-primary  text-white   " href="/portfolio">
            VIEW GALLERY
          </Link>
          <Link
            className=" btn-brand-primary  text-white   "
            href="/take-free-trial/"
          >
            FREE TRIAL
          </Link>
        </div>
      </div>

      <div className=" bg-[#312d2b] p-10 lg:p-[2.083vw]  space-y-10 lg:space-y-[2.083vw] ">
        <div className=" ">
          <div className="image_wrapper">
            <Image
              className="mx-auto lg:w-[1.302vw] "
              src="/home_glasses_arrows.png"
              alt="home_glasses_arrows"
              width={25}
              height={115}
            />
          </div>
        </div>

        <div className="  ">
          <div className="image_wrapper ">
            <Image
              className="mx-auto lg:w-[19.01vw] "
              src="/home_glasses_off.png"
              alt="home_glasses_off"
              width={356}
              height={118}
            />
          </div>
        </div>

        <p
          className={cn(
            "text-white text-lg lg:text-[.938vw] lg:leading-[1.458vw]   font-bold text-center tracking-[5px] ",
            getFontFamily("lato")
          )}
        >
          <span className="font-[300]  ">ON BULK ORDER</span> 20%
        </p>

        <p className="text-white lg:text-[.833vw] lg:leading-[1.25vw] mt-10 lg:mt-12 text-center lg:px-[8%] ">
          Order more than 1000 image edits at once and get up to 20% off on the
          whole order.
        </p>

        <Link
          aria-label="see more about image post production"
          className=" bg-[#262626] text-white px-5 lg:px-[1.042vw] py-3 lg:py-[.625vw] text-sm lg:text-[.729vw] lg:leading-[1.042vw] block w-fit mx-auto "
          href="/image-post-production-service/"
        >
          See more
        </Link>
      </div>
    </section>
  );
};

export default Difference;
