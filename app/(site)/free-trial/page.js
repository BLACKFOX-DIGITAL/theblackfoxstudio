import Form from "@/components/FreeTrail/Form";
import { Sparkles, Shield, Clock, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Free Trial — Image Editing Service | Blackfox Digital",
  description: "Try Blackfox Digital's professional image editing service for free. Submit up to 10 images — background removal, retouching, ghost mannequin and more. No credit card. Results in 24 hours.",
  openGraph: {
    title: "Free Image Editing Trial | Blackfox Digital",
    description: "Submit up to 10 images and test our quality risk-free. No credit card required. 24-hour delivery.",
    images: ["/logo.png"],
  },
};

export default function TakeFreeTrialPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Image Editing Trial",
    "provider": {
      "@type": "Organization",
      "name": "Blackfox Digital"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const benefits = [
    { text: "Fast turnaround (24 hours)", icon: Clock },
    { text: "No credit card required", icon: Shield },
    { text: "Up to 10 images free", icon: Sparkles },
    { text: "Keep 100% of final files", icon: CheckCircle2 },
  ];

  const stats = [
    { label: "10 Images", sub: "Free Trial", icon: Sparkles },
    { label: "24hr", sub: "Delivery", icon: Clock },
    { label: "No CC", sub: "Required", icon: Shield },
    { label: "Keep All", sub: "Final Files", icon: CheckCircle2 },
  ];

  const nextSteps = [
    { step: "1", text: "We receive your files securely" },
    { step: "2", text: "Our editors start within 2 hours" },
    { step: "3", text: "Edited images delivered in 24hrs" },
    { step: "4", text: "Review quality then decide" }
  ];

  return (
    <main className="min-h-screen bg-[#F8F8F8] text-[#011] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Dynamic Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#EE3A39]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-orange-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Copy & Trust Signals */}
          <div className="lg:col-span-5 flex flex-col pt-8">
            <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-sm font-bold w-max mb-6 uppercase tracking-widest shadow-sm">
              Free Trial
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-[#011] leading-none uppercase">
              Free Image Editing Trial — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">
                No Credit Card Required
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#011] leading-relaxed font-bold mb-10">
              Submit up to 10 images and receive professionally edited results within 24 hours — completely free, with no obligation to continue.
            </p>

            {/* Benefits List */}
            <ul className="space-y-5 mb-12">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="bg-white group-hover:bg-[#EE3A39]/10 transition-colors p-2.5 rounded-xl border border-gray-200">
                      <Icon size={20} className="text-[#EE3A39] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-bold text-[#011] tracking-tight">{benefit.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* Social Proof Mini */}
            <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm relative overflow-hidden group mb-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EE3A39]/5 blur-3xl rounded-full" />
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#EE3A39] text-[#EE3A39]" />
                ))}
              </div>
              <p className="text-[#626262] italic text-base leading-relaxed font-medium relative z-10">
                "We sent a test batch to Blackfox Digital and the quality blew us away. They nailed our strict margins on the first try."
              </p>
              <h4 className="font-black text-[10px] mt-6 tracking-[2px] uppercase text-[#011] opacity-70">
                — James R., E-Commerce Manager, United States
              </h4>
            </div>

            {/* Moving Next Steps Here */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white shadow-sm">
              <h4 className="text-sm font-black text-[#011] tracking-[2px] mb-6 uppercase">What Happens Next</h4>
              <div className="space-y-6">
                {nextSteps.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-[#EE3A39] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-lg shadow-[#EE3A39]/20">
                      {s.step}
                    </div>
                    <p className="text-xs font-bold text-[#626262] group-hover:text-[#011] transition-colors">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Form */}
          <div className="lg:col-span-7 w-full z-20">
            {/* Stats Row above form */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((s, i) => (
                <div key={i} className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm text-center">
                  <p className="text-sm font-black text-[#EE3A39] mb-1 leading-none uppercase">{s.label}</p>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{s.sub}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[3rem] p-8 sm:p-12 border border-gray-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#EE3A39] to-orange-500" />
              
              <h3 className="text-3xl font-black text-[#011] tracking-tighter mb-2 uppercase">Submit Requirement</h3>
              <p className="text-[#626262] mb-10 font-bold text-sm">
                Fill in your exact specifications. Attach raw files below.
              </p>
              
              <div className="w-full">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
