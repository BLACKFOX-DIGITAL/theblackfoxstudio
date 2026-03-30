"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { FileUpload } from "../ui/file-upload";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { cn } from "@/lib";
import ButtonLoader from "../ButtonLoader";
import { toast } from "sonner";
import { Send, Image as ImageIcon, Zap } from "lucide-react";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);
  
  const handleFileUpload = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const countries = [
    "United States", "United Kingdom", "Germany", "France", "Italy", "Spain", "Canada", "Australia", 
    "Netherlands", "Sweden", "Denmark", "Norway", "Finland", "Switzerland", "Japan", "China", 
    "Hong Kong", "Singapore", "New Zealand", "Other"
  ].sort();

  const servicesList = [
    "Background Removal", "Clipping Path", "Ghost Mannequin", "E-commerce Photo Editing", 
    "Beauty Retouch", "Product Retouch", "Jewelry Retouch", "Image Masking", 
    "Shadow & Reflection", "Color Variants", "Image Manipulation", "Flat Lay Editing", 
    "Vector Conversion", "Real Estate Editing", "Car Photo Editing", "Photo Restoration", 
    "Multi Clipping Path", "Image Web Optimization", "360° Product Editing", "Packshot Retouching"
  ].sort();

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Trial request submitted successfully! We will contact you within 2 hours.");
    } catch (error) {
      toast.error("An error occurred while submitting your request.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = "bg-gray-50/50 border-gray-100 focus:border-[#EE3A39]/30 focus:ring-[#EE3A39]/10 rounded-2xl text-xs py-4 h-auto shadow-sm transition-all";
  const labelStyle = "text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-2 block ml-1";

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      
      {/* 1. Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className={labelStyle}>Full Name *</label>
          <Input 
            {...register("name", { required: "Name is required" })} 
            className={cn(inputStyle, errors?.name && "border-red-500")} 
            placeholder="e.g. John Smith"
          />
        </div>
        <div className="col-span-1">
          <label className={labelStyle}>Work Email *</label>
          <Input 
            {...register("email", { required: "Email is required" })} 
            className={cn(inputStyle, errors?.email && "border-red-500")} 
            type="email"
            placeholder="smith@brand.com"
          />
        </div>
        <div className="col-span-1">
          <label className={labelStyle}>Company Name</label>
          <Input 
            {...register("company")} 
            className={inputStyle} 
            placeholder="Your business name"
          />
        </div>
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
      </div>

      {/* 2. Services Selection */}
      <div className="pt-6 border-t border-gray-100">
        <label className={labelStyle}>Required Services (Select all that apply)</label>
        <div className="flex flex-wrap gap-2.5 mt-4">
          {servicesList.map((service, index) => (
            <label key={index} className="cursor-pointer group">
              <input type="checkbox" value={service} {...register("services")} className="peer sr-only" />
              <div className="px-4 py-2 rounded-full border border-gray-100 text-[9px] uppercase tracking-[1px] font-black text-gray-500 peer-checked:bg-[#EE3A39] peer-checked:text-white peer-checked:border-[#EE3A39] peer-checked:shadow-md peer-checked:shadow-[#EE3A39]/20 hover:border-[#EE3A39]/40 transition-all select-none bg-white whitespace-nowrap">
                {service}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* 3. Turnaround - Critical Fix #4 */}
      <div className="pt-6 border-t border-gray-100">
        <label className={labelStyle}>Turnaround Time</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          {[
            { label: "Standard 24hrs", value: "24h", extra: "Default" },
            { label: "Rush 12hrs", value: "12h", extra: "+40%" },
            { label: "Emergency 6hrs", value: "6h", extra: "+60%" }
          ].map((t, i) => (
            <label key={i} className="cursor-pointer group">
              <input type="radio" value={t.value} defaultChecked={t.value === "24h"} {...register("turnaround")} className="peer sr-only" />
              <div className="p-4 rounded-2xl border border-gray-100 bg-white peer-checked:border-[#EE3A39] peer-checked:bg-[#EE3A39]/5 transition-all text-center">
                <p className="text-xs font-black text-[#011] group-hover:text-[#EE3A39] transition-colors">{t.label}</p>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">{t.extra}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* 4. Instructions & Uploads */}
      <div className="pt-6 border-t border-gray-100">
        <label className={labelStyle}>Special Instructions & Files</label>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
          <div className="col-span-1 lg:col-span-5 rounded-[2rem] overflow-hidden bg-gray-50 border border-dashed border-gray-200 hover:border-[#EE3A39]/30 transition-all h-[240px] flex items-center justify-center p-2 relative group">
             <div className="w-full h-full relative z-10 transition-transform group-hover:scale-[0.98]">
                <FileUpload onChange={handleFileUpload} />
             </div>
             <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <ImageIcon size={40} className="text-[#EE3A39]/20 mb-2" />
             </div>
          </div>
          
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-4">
            <Textarea
              {...register("message")}
              className={cn("resize-none h-full min-h-[160px] p-6 rounded-[2rem]", inputStyle)}
              placeholder="Tell us about your specific retouching style, margins, or any technical requirements..."
            />
            <div className="flex items-center gap-2 bg-white rounded-2xl border border-gray-100 p-2 pl-4 shadow-sm">
               <Zap size={14} className="text-[#EE3A39]" />
               <span className="text-[9px] text-[#626262] font-black uppercase tracking-[2px] whitespace-nowrap hidden sm:block">Or Link:</span>
               <Input {...register("fileLink")} type="text" className="bg-gray-50 border-none shadow-none text-xs h-10 flex-1 rounded-xl focus:ring-0" placeholder="Dropbox / Google Drive / WeTransfer link" />
            </div>
          </div>
        </div>
      </div>

      {/* 5. Submit */}
      <div className="pt-8 border-t border-gray-100 flex items-center justify-between gap-4">
        <p className="text-[10px] text-gray-400 font-bold max-w-[200px] leading-relaxed">
          By submitting this trial, you agree to our terms of service. Results delivered in 24 hours.
        </p>
        <button
          disabled={isLoading}
          type="submit"
          className="w-full sm:w-auto px-10 py-5 bg-[#EE3A39] hover:bg-black text-white font-black rounded-2xl shadow-xl shadow-[#EE3A39]/20 hover:shadow-black/20 hover:-translate-y-1 transition-all duration-500 inline-flex items-center justify-center gap-3 tracking-[4px] uppercase text-xs"
        >
          {isLoading ? <ButtonLoader /> : <><Send size={16} /> Submit Free Trial</>}
        </button>
      </div>
    </form>
  );
};

export default Form;
