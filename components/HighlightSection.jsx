import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";
import Image from "next/image";
import React from "react";

const HighlightSection = ({
  title,
  subtitle,
  data,
  typography,
  uppercase,
  bg,
}) => {
  const renderTypography = () => {
    switch (typography) {
      case "h1":
        return (
          <h1
            className={cn(
              "font-bold lg:text-[2.188vw] lg:leading-[2.188vw] tracking-[5px] lg:tracking-[.26vw]   text-[#011] text-center ",
              getFontFamily("lato")
            )}
          >
            {title} <br />
            <span className="font-light  ">{subtitle}</span>
          </h1>
        );
      case "h2":
        return (
          <h2
            className={cn(
              "font-bold lg:text-[2.188vw] lg:leading-[2.188vw] tracking-[5px] lg:tracking-[.26vw]  text-[#011] text-center ",
              getFontFamily("lato")
            )}
          >
            {title} <br />
            <span className="font-light  ">{subtitle}</span>
          </h2>
        );
      case "h3":
        return (
          <h3
            className={cn(
              "font-bold lg:text-[2.188vw] lg:leading-[2.188vw] tracking-[5px] lg:tracking-[.26vw]  text-[#011] text-center ",
              getFontFamily("lato")
            )}
          >
            {title} <br />
            <span className="font-light  ">{subtitle}</span>
          </h3>
        );
      case "h4":
        return (
          <h4
            className={cn(
              "font-bold lg:text-[2.188vw] lg:leading-[2.188vw] tracking-[5px] lg:tracking-[.26vw]  text-[#011] text-center ",
              getFontFamily("lato")
            )}
          >
            {title} <br />
            <span className="font-light  ">{subtitle}</span>
          </h4>
        );
      case "h5":
        return (
          <h5
            className={cn(
              "font-bold lg:text-[2.188vw] lg:leading-[2.188vw] tracking-[5px] lg:tracking-[.26vw]  text-[#011] text-center ",
              getFontFamily("lato")
            )}
          >
            {title} <br />
            <span className="font-light  ">{subtitle}</span>
          </h5>
        );
      case "h6":
        return (
          <h6
            className={cn(
              "font-bold lg:text-[2.188vw] lg:leading-[2.188vw] tracking-[5px] lg:tracking-[.26vw]  text-[#011] text-center ",
              getFontFamily("lato")
            )}
          >
            {title} <br />
            <span className="font-light  ">{subtitle}</span>
          </h6>
        );
      case "p":
        return (
          <p
            className={cn(
              "font-bold lg:text-[2.188vw] lg:leading-[2.188vw] tracking-[5px] lg:tracking-[.26vw]  text-[#011] text-center ",
              getFontFamily("lato")
            )}
          >
            {title} <br />
            <span className="font-light  ">{subtitle}</span>
          </p>
        );

      default:
        return (
          <p
            className={cn(
              "font-bold lg:text-[2.188vw] lg:leading-[2.188vw] tracking-[5px] lg:tracking-[.26vw]  text-[#011] text-center ",
              getFontFamily("lato")
            )}
          >
            {title} <br />
            <span className="font-light  ">{subtitle}</span>
          </p>
        );
    }
  };
  return (
    <section className={cn("brand-gap ", bg && `bg-[${bg}]`)}>
      <div className="px-1 lg:px-0">{renderTypography()}</div>
      <div className="mt-5 lg:mt-10 grid grid-cols-2 lg:grid-cols-5 gap-3 w-fit mx-auto lg:max-w-[66.667vw]   ">
        {data?.map((ele, ind) => (
          <div className="p-2 lg:p-[.833vw]" key={`${title}-${ind}`}>
            <Image
              height={50}
              width={50}
              alt={ele.title}
              src={ele.img}
              quality={100}
              className="object-contain mx-auto lg:size-[2.604vw]  "
            />
            <p
              className={cn(
                "text-lg lg:text-[.938vw] lg:leading-[1.458vw]  text-center mt-2 lg:mt-[.417vw] hover:underline ",
                uppercase && "uppercase"
              )}
            >
              {ele.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightSection;
