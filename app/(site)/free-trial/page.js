import Form from "@/components/FreeTrail/Form";
import { Sparkles, Shield, Clock, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Take a Free Trial | BLACKFOX DIGITAL",
  description: "Test our expert image post-processing services absolutely free. Scale your post-production effortlessly.",
  openGraph: {
    images: ["/logo.png"],
  },
};

export default function TakeFreeTrialPage() {
  const benefits = [
    { text: "Fast turnaround (12-24 hours)", icon: Clock },
    { text: "No credit card required", icon: Shield },
    { text: "Up to 10 images free", icon: Sparkles },
    { text: "Keep 100% of final files", icon: CheckCircle2 },
  ];

  return (
    <main className="min-h-screen bg-[#F8F8F8] text-[#011] overflow-hidden">
      
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
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tighter text-[#011] leading-tight">
              Test Our Quality,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">
                Risk Free.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-[#626262] leading-relaxed font-medium mb-12">
              We know switching editing partners is a big decision. Submit a small test batch today, and we'll deliver perfectly retouched images so you can evaluate our precision and speed firsthand.
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
                    <span className="font-bold text-[#011]">{benefit.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* Social Proof Mini */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#EE3A39] text-[#EE3A39]" />
                ))}
              </div>
              <p className="text-[#626262] italic text-sm leading-relaxed">
                "We sent a test batch to BLACKFOX DIGITAL and the quality blew us away. They nailed our strict margins on the first try."
              </p>
              <h4 className="font-bold text-xs mt-4 tracking-wider uppercase text-[#011]">
                — Global E-Commerce Brand
              </h4>
            </div>
          </div>

          {/* Right Column: Embedded Form */}
          <div className="lg:col-span-7 w-full z-20">
            <div className="bg-white rounded-[2rem] p-8 sm:p-12 border border-gray-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#EE3A39] to-orange-500" />
              
              <h3 className="text-3xl font-extrabold text-[#011] tracking-tight mb-2">Submit Guidelines</h3>
              <p className="text-[#626262] mb-10 font-medium">
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
