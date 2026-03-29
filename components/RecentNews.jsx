import React from "react";
import { Input } from "./ui/input";

const RecentNews = () => {
  return (
    <section className="        brand-gap ">
      <div className="relative h-[250px] lg:h-[300px] ">
        <div className="gradient-bg h-full w-full "></div>

        <div className="absolute inset-0 size-full flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="brand-title !text-white">NEED RECENT NEWS?</p>
            </div>

            <div className="flex">
              <Input
                aria-label="News letter email"
                type="email"
                className="rounded-sm rounded-r-none focus-visible:ring-transparent focus-visible:ring-none focus-visible:ring-offset-0 "
                placeholder={"Your e-mail"}
              />
              <button
                aria-label="subscribe"
                className="btn-brand-primary !rounded-l-none"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
