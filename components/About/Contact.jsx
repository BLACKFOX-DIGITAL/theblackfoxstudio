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

  const countries = [
    "United States", "United Kingdom", "Germany", "France", "Italy", "Spain", "Canada", "Australia", 
    "Netherlands", "Sweden", "Denmark", "Norway", "Finland", "Switzerland", "Japan", "China", 
    "Hong Kong", "Singapore", "New Zealand", "Other"
  ].sort();

  const services = [
    "Background Removal", "Clipping Path", "Ghost Mannequin", "E-commerce Photo Editing", 
    "Beauty Retouch", "Product Retouch", "Jewelry Retouch", "Image Masking", 
    "Shadow & Reflection", "Color Variants", "Image Manipulation", "Flat Lay Editing", 
    "Vector Conversion", "Real Estate Editing", "Car Photo Editing", "Photo Restoration", 
    "Multi Clipping Path", "Image Web Optimization", "360° Product Editing", "Packshot Retouching"
  ].sort();

  const turnarounds = [
    { label: "Normal (48 hrs)", value: "48h" },
    { label: "Rush (24 hrs)", value: "24h" },
    { label: "Super Rush (12 hrs)", value: "12h" },
    { label: "Emergency (6 hrs)", value: "6h" },
  ];

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully! We will get back to you within 2 hours.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = "bg-gray-50/50 border-gray-100 focus:border-[#EE3A39]/30 focus:ring-[#EE3A39]/10 rounded-2xl text-sm py-4 h-auto shadow-sm transition-all";
  const labelStyle = "text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-2 block ml-1";

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" onSubmit={handleSubmit(onSubmit)}>
      
      {/* Name */}
      <div className="col-span-1">
        <label className={labelStyle}>Full Name *</label>
        <Input
          {...register("name", { required: "Name is required" })}
          className={cn(inputStyle, errors?.name && "border-red-500")}
          placeholder="e.g. John Smith"
        />
      </div>

      {/* Email */}
      <div className="col-span-1">
        <label className={labelStyle}>Email Address *</label>
        <Input
          {...register("email", { required: "Email is required" })}
          className={cn(inputStyle, errors?.email && "border-red-500")}
          type="email"
          placeholder="smith@company.com"
        />
      </div>

      {/* Company Name */}
      <div className="col-span-1">
        <label className={labelStyle}>Company Name</label>
        <Input
          {...register("company")}
          className={inputStyle}
          placeholder="Your brand or studio"
        />
      </div>

      {/* Country */}
      <div className="col-span-1">
        <label className={labelStyle}>Country</label>
        <select
          {...register("country")}
          className={cn(inputStyle, "w-full px-4 appearance-none outline-none")}
        >
          <option value="">Select Country</option>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Service Needed */}
      <div className="col-span-1">
        <label className={labelStyle}>Service Needed</label>
        <select
          {...register("service")}
          className={cn(inputStyle, "w-full px-4 appearance-none outline-none")}
        >
          <option value="">Choose Service</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Number of Images */}
      <div className="col-span-1">
        <label className={labelStyle}>Number of Images</label>
        <Input
          {...register("images")}
          className={inputStyle}
          type="number"
          placeholder="Approx. volume"
        />
      </div>

      {/* Turnaround */}
      <div className="col-span-1">
        <label className={labelStyle}>Turnaround Needed</label>
        <select
          {...register("turnaround")}
          className={cn(inputStyle, "w-full px-4 appearance-none outline-none")}
        >
          {turnarounds.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
      </div>
      
      {/* Empty space for grid alignment if needed, or I'll just leave it */}
      <div className="hidden md:block"></div>

      {/* Message */}
      <div className="col-span-1 md:col-span-2">
        <label className={labelStyle}>Requirement / Message *</label>
        <Textarea
          {...register("message", { required: "Message is required" })}
          className={cn("min-h-[120px]", inputStyle, textAreaClass, errors?.message && "border-red-500")}
          placeholder="How can we help your production workflow today?"
          rows={4}
        />
      </div>

      <div className="col-span-1 md:col-span-2 mt-4">
        <button
          disabled={isSubmitting}
          type="submit"
          className={cn(
            "w-full bg-[#EE3A39] hover:bg-black text-white font-black py-5 rounded-2xl shadow-xl shadow-[#EE3A39]/20 transition-all flex items-center justify-center gap-3 text-sm tracking-[4px] uppercase",
            buttonClass
          )}
        >
          Send Message {isSubmitting && <ButtonLoader />}
        </button>
      </div>
    </form>
  );
};
