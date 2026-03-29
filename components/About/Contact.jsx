"use client";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useForm } from "react-hook-form";
import ButtonLoader from "../ButtonLoader";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  });

  const features = [
    {
      title: "SEND A MESSAGE",
      description:
        "Contact us today for any of your image editing needs. Let us worry about the editing so you can focus on your business.",
      skeleton: <SkeletonOne scrollYProgress={scrollYProgress} />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      skeleton: <SkeletonTwo scrollYProgress={scrollYProgress} />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
  ];

  return (
    <section
      ref={contactRef}
      className="relative z-20 py-10 lg:py-40 container mx-auto"
    >
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Blackfox Limited, formerly known as Blackfox Digital
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Feel free to contact us at any time. We are always here to help with
          any queries you may have.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

export const FeatureTitle = ({ children }) => {
  return (
    <p
      className={cn(
        "max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug lg:text-[32px] lg:leading-[34px] font-bold",
        getFontFamily("lato")
      )}
    >
      {children}
    </p>
  );
};

export const FeatureDescription = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left mx-0 md:text-sm my-2 pt-2",
        className
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = ({ scrollYProgress }) => {
  const x = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const images = [
    "/Jewlery-Retouch-5-Done.jpg",
    "/Color-Change-Done.jpg",
    "/Model-Retouch-1-Done.jpg",
    "/Image-Manipulation-Done.jpg",
    "/Masking-Retouch-Service-Done-3.jpg",
    "/Flatlay-1-Done.jpg",
    "/Ghost-Mannequin-2-Done.jpg",
    "/bg-removal-done.jpg",
    "/ECommerce-Done.jpg",
  ];

  const doubledImages = [...images, ...images];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="h-full  ">
      <ContactForm />
      <div className="flex overflow-hidden mt-8 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          style={{ x }}
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex flex-none "
        >
          {doubledImages.map((image, idx) => (
            <motion.div
              // variants={imageVariants}
              key={"images-first" + idx}
              style={{ rotate: Math.random() * 20 - 10 }}
              whileHover="whileHover"
              whileTap="whileTap"
              className="rounded-xl p-1 bg-gray border border-neutral-100 flex-shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt="image"
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const SkeletonTwo = ({ scrollYProgress }) => {
  const x = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const images = [
    "/Product-Retouch-Service-Page-Done.jpg",
    "/Beauty-Retouch-Service-Page-Done.jpg",
    "/Reflection-Service-Done.jpg",
    "/Flatlay-1-Done.jpg",
    "/Ghost-Mannequin-2-Done.jpg",
    "/bg-removal-done.jpg",
    "/ECommerce-Done.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start gap-10 h-full  ">
      <div>
        <FeatureTitle>Blackfox Limited</FeatureTitle>
        <FeatureDescription>
          Address: House 560, Road 08, Adabor, Dhaka 1207
        </FeatureDescription>
        <FeatureDescription className={"pt-0"}>
          Phone: (+88) 019 24 482 868
        </FeatureDescription>
        <FeatureDescription className={"pt-0"}>
          Email: info@theblackfoxstudio.com
        </FeatureDescription>
      </div>

      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
        <motion.div
          style={{ x }}
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex flex-none "
        >
          {images.map((image, idx) => (
            <motion.div
              variants={imageVariants}
              key={"images-first" + idx}
              style={{ rotate: Math.random() * 20 - 10 }}
              whileHover="whileHover"
              whileTap="whileTap"
              className="rounded-xl -mr-4 mt-4 p-1 bg-gray border border-neutral-100 flex-shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div>
        <FeatureTitle>Blackfox Digital</FeatureTitle>
        <FeatureDescription>
          Kha15/B (3rd Floor), Khapara, Khilkhet, Dhaka 1229
        </FeatureDescription>
        <FeatureDescription className={"pt-0"}>
          Phone: (+88) 019 24 482 868 (+88) 019 78 066 099
        </FeatureDescription>
        <FeatureDescription className={"pt-0"}>
          Email: info@theblackfoxstudio.com
        </FeatureDescription>
      </div>
    </div>
  );
};

export const ContactForm = ({ textAreaClass, buttonClass }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully! We will get back to you soon.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="grid grid-cols-2 gap-4 w-full h-fit">
      <div className="col-span-2 lg:col-span-1">
        <Input
          {...register("name", {
            required: "Name is required",
          })}
          aria-label="Enter your name"
          className={cn("   ", errors?.name && " shadow-input_invalid ")}
          type="text"
          placeholder="Your name"
        />
      </div>
      <div className="col-span-2 lg:col-span-1">
        <Input
          {...register("email", {
            required: "Email is required",
          })}
          aria-label="Enter your e-mail"
          className={cn("", errors?.email && " shadow-input_invalid ")}
          type="email"
          placeholder="Your e-mail"
        />
      </div>
      <div className="col-span-2">
        <Input
          {...register("subject")}
          aria-label="Give your subject"
          className={cn("  w-full ")}
          type="text"
          placeholder="Subject"
        />
      </div>
      <Textarea
        {...register("message", {
          required: "Message is required",
        })}
        className={cn(
          "col-span-2 lg:h-[116px] ",
          errors?.message && " shadow-input_invalid ",
          textAreaClass
        )}
        placeholder="Type your message here."
      />

      <div>
        <button
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
          aria-label="send message"
          className={cn(
            " btn-brand-primary relative overflow-hidden ",
            buttonClass
          )}
        >
          Send Message {isSubmitting && <ButtonLoader />}
        </button>
      </div>
    </form>
  );
};
