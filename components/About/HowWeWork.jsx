import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";
import { RiCheckLine } from "@remixicon/react";
import React from "react";

const HowWeWork = () => {
  return (
    <section className=" bg-[#EBEBEB] grid grid-cols-1 lg:grid-cols-12  ">
      <div className="lg:col-span-3">
        <div className=" order-1 p-[8%] lg:pt-[80px] lg:pb-[70px] ">
          <h2
            className={cn(
              " text-[#011] font-black text-2xl lg:text-[32px] lg:leading-[34px] text-center mb-6 lg:mb-10 tracking-[5px] ",
              getFontFamily("lato")
            )}
          >
            How We Work
          </h2>
          <div className="space-y-[15px] text-center text-[#626262] text-sm leading-[21px] ">
            <p>We divided our working process in 3 steps.</p>
            <p />
            Our clients provide us with the images that need to be edited with
            the precise instructions
            <p />
            <p>
              Our team does the editing according to those instructions and
              makes sure that its precisely what the client wants.
            </p>
            <p>
              The images are delivered to the clients through our secure and
              encrypted{" "}
              <a href="https://en.wikipedia.org/wiki/File_Transfer_Protocol">
                FTP servers
              </a>{" "}
              or through any other means that client requests.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundPosition: "center center",
        }}
        className=" order-3 lg:order-2 lg:col-span-6 w-full bg-[url('/blackfox_post_processing_about_us.jpg')] h-[310px] lg:h-full bg-no-repeat  bg-cover  "
      ></div>
      <div className="lg:col-span-3 order-2 lg:order-3">
        <div
          className=" p-[8%] lg:pt-[80px] lg:pb-[70px] border-[10px] bg-white border-[#edefef] h-full "
          style={{ padding: "80px 8% 70px", border: "10px solid #edefef" }}
        >
          <h3
            className={cn(
              " text-[#011] font-black text-2xl lg:text-[32px] lg:leading-[34px] text-center mb-6 lg:mb-10 tracking-[5px] ",
              getFontFamily("lato")
            )}
          >
            WHY US?
            <p />
          </h3>

          <ul className="list_check">
            <li>
              <RiCheckLine /> <p>Our first priority is quality</p>
            </li>
            <li>
              {" "}
              <RiCheckLine /> We provide 24/7 support to all our customers
            </li>
            <li>
              <RiCheckLine /> Our up to date infrastructure makes us your ideal
              back office
            </li>
            <li>
              {" "}
              <RiCheckLine /> We deliver on time. Always.
            </li>
            <li>
              {" "}
              <RiCheckLine /> Our servers are secure and encrypted for data
              transfer
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
