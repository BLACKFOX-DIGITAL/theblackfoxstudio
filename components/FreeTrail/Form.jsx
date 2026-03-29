"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { FileUpload } from "../ui/file-upload";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { cn } from "@/lib";
import ButtonLoader from "../ButtonLoader";
import { toast } from "sonner";
import { Send } from "lucide-react";

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

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Trial request submitted successfully! We will contact you shortly.");
    } catch (error) {
      toast.error("An error occurred while submitting your request.");
    } finally {
      setIsLoading(false);
    }
  };

  const servicesList = [
    "Background Removal", "Ghost Mannequin", "Beauty Retouch", 
    "Flatlay", "Masking", "Shadow Creation", 
    "Manipulation", "Model Retouch", "Color Correction", 
    "Jewelry Retouch", "Product Retouch"
  ];

  return (
    <form className="space-y-5">
      
      {/* 1. Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Input aria-label="name" placeholder="Full Name *" type="text" {...register("name", { required: "Name is required" })} className={cn("bg-[#F8F8F8] border-gray-200 h-10 text-sm text-[#011]", errors?.name && "border-red-500")} />
        </div>
        <div>
          <Input aria-label="email" placeholder="Work Email *" type="email" {...register("email", { required: "Email is required" })} className={cn("bg-[#F8F8F8] border-gray-200 h-10 text-sm text-[#011]", errors?.email && "border-red-500")} />
        </div>
        <div>
          <Input aria-label="phone no" placeholder="Phone Number" type="text" {...register("phone", { required: "Phone is required" })} className={cn("bg-[#F8F8F8] border-gray-200 h-10 text-sm text-[#011]", errors?.phone && "border-red-500")} />
        </div>
        <div>
          <Input aria-label="website" placeholder="Company Website" type="text" {...register("website", { required: "Website is required" })} className={cn("bg-[#F8F8F8] border-gray-200 h-10 text-sm text-[#011]", errors?.website && "border-red-500")} />
        </div>
      </div>

      {/* 2. Services Selection (Compact Chips) */}
      <div className="pt-3 border-t border-gray-100">
        <p className="text-sm font-semibold text-[#011] mb-2">Required Services</p>
        <div className="flex flex-wrap gap-2">
          {servicesList.map((service, index) => (
            <label key={index} className="cursor-pointer group flex-shrink-0">
              <input type="checkbox" value={service} {...register("services")} className="peer sr-only" />
              <div className="px-3 py-1.5 rounded-lg border border-gray-200 text-[0.7rem] uppercase tracking-wider font-bold text-[#626262] text-center peer-checked:bg-[#EE3A39] peer-checked:text-white peer-checked:border-[#EE3A39] hover:bg-gray-50 transition-all select-none">
                {service}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* 3. Instructions & Uploads (Compressed Grid) */}
      <div className="pt-3 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-2">
          {/* Enhanced Dropzone container */}
          <div className="col-span-1 lg:col-span-5 rounded-2xl overflow-hidden bg-gray-50/50 hover:bg-gray-50 transition-colors h-[210px] w-full flex items-center justify-center p-2">
            <div className="w-full h-full">
               <FileUpload onChange={handleFileUpload} />
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-4">
            <Textarea
              {...register("message")}
              className="resize-none h-full min-h-[140px] bg-[#F8F8F8] border-gray-200 focus-visible:ring-[#EE3A39]/20 text-[#011] p-4 text-sm rounded-2xl transition-all"
              placeholder="Specific instructions or requirements..."
            />
            <div className="flex items-center gap-2 bg-[#F8F8F8] rounded-2xl border border-gray-100 p-2 pl-4 focus-within:ring-2 focus-within:ring-[#EE3A39]/20 transition-all">
               <span className="text-xs text-[#626262] whitespace-nowrap hidden sm:block font-bold uppercase tracking-wider">External Link:</span>
               <Input {...register("file-link")} type="text" className="bg-white border-gray-200 shadow-sm text-sm h-10 flex-1 rounded-xl focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Paste Dropbox / Drive / WeTransfer link..." />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Submit */}
      <div className="pt-6 border-t border-gray-100 text-right flex justify-end">
        <button
          disabled={isLoading}
          onClick={handleSubmit(onSubmit)}
          aria-label="Get free trial"
          className="w-full sm:w-auto px-8 py-4 bg-[#011] hover:bg-[#EE3A39] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none transition-all duration-300 inline-flex items-center justify-center gap-3 tracking-wide disabled:opacity-70 disabled:hover:translate-y-0 text-sm"
        >
          {isLoading ? <ButtonLoader /> : <><Send size={18} /> Submit Trial Request</>}
        </button>
      </div>
    </form>
  );
};

export default Form;
