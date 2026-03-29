import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import URLWrapper from "./URLWrapper";

const LongShowCase = ({ data, titleClass }) => {
  return (
    <section className="pt-8 pb-5 space-y-5 lg:space-y-[1.042vw]">
      <div className="flex justify-center">
        {data?.url ? (
          <URLWrapper url={data?.url}>
            <p
              href={data?.url}
              className={cn(
                "text-[#001] block font-bold text-lg lg:text-[1.198vw] lg:leading-[1.406vw] underline",
                getFontFamily("lato"),
                titleClass
              )}
            >
              {data?.title}
            </p>
          </URLWrapper>
        ) : (
          <p
            href={data?.url}
            className={cn(
              "text-[#001] block font-bold text-lg lg:text-[1.198vw] lg:leading-[1.406vw] underline",
              getFontFamily("lato"),
              titleClass
            )}
          >
            {data?.title}
          </p>
        )}
      </div>

      {data?.url ? (
        <URLWrapper url={data?.url}>
          <Content data={data} />
        </URLWrapper>
      ) : (
        <Content data={data} />
      )}
    </section>
  );
};

const Content = ({ data }) => {
  return (
    <div
      href={data?.url}
      className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6  "
    >
      {data?.images?.map((ele, ind) => (
        <Image
          width={315}
          height={447}
          alt={`Alpha-Masking-${ele}`}
          src={ele}
          key={`alpha-masking-${ele}-${ind}`}
          className={cn("object-contain   size-full ", ind > 5 && "mt-2")}
        />
      ))}
    </div>
  );
};

const WithUrl = ({ children }) => {};

export default LongShowCase;
