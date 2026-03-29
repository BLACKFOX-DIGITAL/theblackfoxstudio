import React from "react";
import HowWeWork from "./HowWeWork";
import Contact from "./Contact";
import GetStarted from "../GetStarted";
import Story from "./Story";
import BannerWrapper from "./BannerWrapper";

const About = () => {
  return (
    <main className=" ">
      <BannerWrapper />
      <HowWeWork />
      <Story />
      <Contact />
      <GetStarted
        firstImage="/Color-Change.jpg"
        secondImage="/Color-Change-Done.jpg"
      />
    </main>
  );
};

export default About;
