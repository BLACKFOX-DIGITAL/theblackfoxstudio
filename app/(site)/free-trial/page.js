import Form from "@/components/FreeTrail/Form";
import { Sparkles, Shield, Clock, CheckCircle2, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Free Trial — Image Editing Service | BLACKFOX DIGITAL",
  description: "Try BLACKFOX DIGITAL's professional image editing service for free. Submit up to 10 images — background removal, retouching, ghost mannequin and more. No credit card. Results in 24 hours.",
  alternates: { canonical: "https://theblackfoxstudio.com/free-trial" },
  openGraph: {
    title: "Free Image Editing Trial | BLACKFOX DIGITAL",
    description: "Submit up to 10 images and test our quality risk-free. No credit card required. 24-hour delivery.",
    url: "https://theblackfoxstudio.com/free-trial",
    type: "website",
    images: ["/hero-2.jpg"],
  },
};

export default function TakeFreeTrialPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Image Editing Trial",
    "provider": {
      "@type": "Organization",
      "name": "BLACKFOX DIGITAL"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const benefits = [
    { text: "Editing starts within 2 hours of upload", icon: Clock },
    { text: "No payment info required — ever", icon: Shield },
    { text: "Up to 10 images, professionally edited, free", icon: Sparkles },
    { text: "Full-res files delivered — no watermarks, no catch", icon: CheckCircle2 },
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
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Copy & Trust Signals (STICKY) */}
          <div className="lg:w-5/12 flex flex-col lg:sticky lg:top-32 space-y-6">
            <div>
              <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-sm font-bold w-max mb-6 uppercase tracking-widest shadow-sm">
                Free Trial
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-[#011] leading-none uppercase">
                See Exactly What We Can Do — On Your Own Images. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">
                  Free. No Card. 24 Hours.
                </span>
              </h1>
              <p className="text-base md:text-lg text-[#011] font-bold mb-0">
                We don't show you curated samples. Send your actual product shots, fashion images, or property photos — we'll edit them to our commercial standard and send them back.
              </p>
            </div>

            {/* Benefits List - Slightly more compact */}
            <div className="grid grid-cols-1 gap-3">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex items-center gap-3 group bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-white hover:border-[#EE3A39]/20 transition-all shadow-sm group">
                    <div className="bg-white group-hover:bg-[#EE3A39] transition-all p-2 rounded-lg border border-gray-100 group-hover:text-white text-[#EE3A39]">
                      <Icon size={18} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-black text-[10px] uppercase tracking-[1px] text-[#011] leading-tight">{benefit.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Proof Mini - Slightly more compact */}
            <div className="p-8 bg-[#011] text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EE3A39]/20 blur-3xl rounded-full" />
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                   <Star key={i} size={12} className="fill-[#EE3A39] text-[#EE3A39]" />
                ))}
              </div>
              <p className="text-gray-300 italic text-sm leading-relaxed font-medium relative z-10">
                "We sent a test batch to BLACKFOX DIGITAL and the quality blew us away. They nailed our strict margins on the first try."
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                 <h4 className="font-black text-[10px] tracking-[2px] uppercase text-brandPrimary">
                   — James R.
                 </h4>
                 <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">E-Commerce Manager</p>
              </div>
            </div>

            {/* Process Pipeline - Slightly more compact */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white shadow-sm border-dashed">
              <h4 className="text-[10px] font-black text-[#011] tracking-[3px] mb-6 uppercase text-center">Process Pipeline</h4>
              <div className="space-y-6">
                {nextSteps.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-xl bg-white text-[#011] border border-gray-100 flex items-center justify-center font-black text-[10px] shrink-0 shadow-sm group-hover:bg-[#EE3A39] group-hover:text-white transition-all group-hover:rotate-6">
                      {s.step}
                    </div>
                    <p className="text-[9px] uppercase tracking-[1px] font-black text-gray-400 group-hover:text-[#011] transition-colors leading-tight">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Form (SCROLLS) */}
          <div className="lg:w-7/12 w-full z-20">
            <div className="bg-white rounded-[3.5rem] p-8 sm:p-14 border border-gray-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#EE3A39] to-orange-500" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE3A39]/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-[#011] tracking-tighter mb-4 leading-none uppercase">Submit Your Images</h3>
                <p className="text-[#626262] mb-12 font-bold text-lg leading-relaxed max-w-xl">
                  Tell us what you need, upload your files, and our production team starts within 2 hours. Edited results back in 24 hours — no commitment required.
                </p>
                
                <div className="w-full">
                  <Form />
                </div>
              </div>
            </div>

            {/* Quick Support / Contact */}
            <div className="mt-10 p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-grayLight rounded-[3rem] border border-white">
               <div className="text-center md:text-left">
                  <p className="text-[10px] font-black uppercase tracking-[3px] text-brandPrimary mb-2">Need Immediate Help?</p>
                  <p className="text-sm font-bold text-[#011]">Talk to a production specialist via live chat or email.</p>
               </div>
               <Link href="/contact" className="px-10 py-4 bg-[#011] text-white rounded-2xl text-[10px] font-black uppercase tracking-[3px] hover:bg-brandPrimary transition-all shadow-xl shadow-[#011]/20">
                  Talk to a Specialist
               </Link>
            </div>
            
            {/* Added runway for stickiness */}
            <div className="h-20" />
          </div>
        </div>
      </div>
    </main>
  );
}
