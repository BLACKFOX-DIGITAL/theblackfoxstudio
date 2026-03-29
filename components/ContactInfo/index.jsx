import React from "react";
import {
  ContactForm,
  FeatureDescription,
  FeatureTitle,
} from "../About/Contact";
import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";

const ContactInfo = () => {
  return (
    <section className=" flex flex-col lg:flex-row lg:justify-center   lg:gap-10   bg-white ">
      <div className="flex justify-end items-center w-full px-5 lg:px-0 py-10 ">
        <div className="space-y-10">
          <p className={cn(" brand-title  ", getFontFamily("lato"))}>
            OUR ADDRESS
          </p>
          <p className="subtitle max-w-[30rem] ">
            Feel free to contact us at any time. We are always here to help with
            any queries you may have.
          </p>
          <div className=" flex justify-between lg:justify-start  gap-4 lg:gap-16 ">
            <div className="space-y-2">
              <p
                className={cn(
                  "lg:text-[1.198vw] lg:leading-[1.406vw] font-[300] text-[#011]    ",
                  getFontFamily("lato")
                )}
              >
                BANGLADESH
              </p>

              <p className={"  text-lg leading-[22px] text-[#bbb] pt-2 "}>
                (+88) 019 24 482 868
              </p>
              <p className={"  text-lg leading-[22px] text-[#011]   "}>
                House 560, Road 08 <br /> Adabor, Dhaka 1207
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-[#C950A5] w-full py-10    ">
        <div className="max-w-[610px]   p-5 lg:p-16 space-y-10 ">
          <p
            className={cn(" brand-title !text-white  ", getFontFamily("lato"))}
          >
            SEND MESSAGE
          </p>
          <ContactForm
            buttonclassName={"!bg-gray "}
            textAreaclassName={"lg:h-[80px]"}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
