import { cn } from "@/lib";
import { getFontFamily } from "@/utils/font";
import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <section className="brand-gap lg:pb-0 container grid grid-cols-1 lg:grid-cols-9 gap-8 max-w-[1180px] ">
      <div className="lg:col-span-2">
        <div className="flex justify-end  w-full">
          <Image
            src={`/home_priority_about_txt.png`}
            height={377}
            width={38}
            alt="home priority about txt"
            className="object-contain"
          />
        </div>
      </div>
      <div className="lg:col-span-3">
        {" "}
        <div className="  space-y-4">
          <p className={cn("brand-title pb-3 ", getFontFamily("lato"))}>
            THE STORY
          </p>

          <p className="subtitle text-justify">
            Image post production company{" "}
            <a href="https://theblackfoxstudio.com/">BLACKFOX DIGITAL</a>{" "}
            started its journey in 2016 with a small team of 5 highly skilled
            graphic designers. Since its inception, Blackfox has worked long and
            hard to provide its clients with the best quality service there is.
          </p>
          <p className="subtitle text-justify">
            Our success is in large thanks to our innovation and dedicated team
            that provides our clients an experience unlike others.
          </p>
          <p className="subtitle text-justify">
            Our team is designed with talented, skilled, creative, self
            motivated and organized people from different backgrounds. This
            diversity amongst ourselves helps us to create new and exclusive
            contents to satisfy our clients need and some time beyond the
            clients expectation. We believe that, providing client support is as
            important as serving our clients with timely and qualitative end to
            end solutions. BLACKFOX DIGITAL use all the resources available to
            us to make sure that clients are always satisfied with the work we
            delivered.
          </p>
          <p className="subtitle text-justify">
            Today we are a team of more than 80 designers and we are
            successfully providing our clients with their post production needs.
          </p>
          <p />
          <p className="subtitle text-justify">
            Our goal is to provide the best quality assured output for our
            clients to achieve their satisfaction. We provide unique output to
            our customer following their instructions, and we always appreciate
            feedbacks from our clients. We are available for 24/7 to give
            support to our clients. Anytime and from anywhere clients can
            communicate with us to take our service. We are happy and ready to
            provide support and work.
          </p>
          <p />
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className=" lg:pt-[60px] ">
          <p className="subtitle text-justify">
            When a buyer reach us firstly we give a free trial to understand
            their desire as per their personalized instruction. Our process
            starts after a brief discussion with the team on how best to
            approach the work in hand. The Team then takes the best approach and
            makes sure the files, any files, are completed within 24 to 48 hours
            delivering on the clients desired deadline while ensuring quality of
            work. This quality is possible due to our 3 step quality control
            process where quality checks on the files are done after each and
            every step of the design. We make sure that BLACKFOX DIGITAL is the
            ultimate solution for your graphic and image editing needs.
          </p>
          <p className="subtitle text-justify">
            {" "}
            We are providing world class professional photo editing service
            focusing in Europe and the USA. Our clients are focused in
            the Fashion Industry, Photographers, Brand Stores and Online Stores
            all of whom often require services of E-Commerce Photo Edits,
            Background Removal, Shadow, Masking, Flatlay Retouch, Product
            Retouch, Jewelry Retouch, and more.
          </p>
          <p className="subtitle text-justify">
            We always use updated software to give best output of all the
            images. Currently we are using Adobe Photoshop CC and updated Adobe
            illustrator and also theAdobe creative suite to process all the
            images. Take a <a href="/take-free-trial/">free trial</a> to confirm
            that you are in the right place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
