"use client";
import React from "react";
import { ContactForm } from "@/components/About/Contact";
import { Mail, MapPin, Phone, Clock, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib";

export default function ContactInfoClient() {
  const contactCards = [
    {
      icon: MapPin,
      label: "Bangladesh HQ",
      content: (
        <>
          <p className="text-[#626262] leading-relaxed pb-4 border-b border-gray-100 mb-4">
            House 560, Road 08<br />
            Adabor, Dhaka 1207<br />
            Bangladesh
          </p>
          <a href="tel:+8801924482868" className="flex items-center gap-3 text-[#626262] font-semibold hover:text-[#EE3A39] transition-colors">
            <Phone size={17} className="text-[#EE3A39] shrink-0" />
            (+88) 019 24 482 868
          </a>
        </>
      ),
    },
    {
      icon: Mail,
      label: "Email & Support",
      badge: "24/7",
      content: (
        <>
          <a
            href="mailto:info@theblackfoxstudio.com"
            className="flex items-center gap-3 text-[#626262] font-semibold hover:text-[#EE3A39] transition-colors pb-4 border-b border-gray-100 mb-4"
          >
            <Mail size={17} className="text-[#EE3A39] shrink-0" />
            info@theblackfoxstudio.com
          </a>
          <div className="flex items-center gap-3 text-[#626262] font-semibold">
            <Clock size={17} className="text-[#EE3A39] shrink-0" />
            24/7 Support Available
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#011]">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 border-b border-gray-200 overflow-hidden bg-white">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-sm font-bold mb-6 uppercase tracking-widest shadow-sm">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter text-[#011] leading-tight">
            We&apos;d Love To{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">
              Hear From You.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#626262] leading-relaxed font-medium max-w-2xl mx-auto mb-12">
            Whether you have a question about pricing, bulk volumes, or anything else, our team is ready to help — typically within a few hours.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-bold text-[#011] uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available 24/7
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#EE3A39]" />
              Replies within 4 hours
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#EE3A39]" />
              Dhaka Headquarters
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM + MAP */}
      <section className="py-24 bg-[#F8F8F8] w-full">
        <div className="container mx-auto px-4 max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-start">

            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full">
              {contactCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden flex flex-col w-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EE3A39]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] pointer-events-none" />

                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#EE3A39]/10 text-[#EE3A39] flex items-center justify-center p-3 group-hover:bg-[#EE3A39] group-hover:text-white transition-all duration-500">
                        <Icon size={26} />
                      </div>
                      {card.badge && (
                        <span className="px-3 py-1 bg-[#EE3A39] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-[#EE3A39]/20">
                          {card.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-black text-[#011] mb-5 uppercase tracking-[3px] text-xs opacity-90">
                      {card.label}
                    </h3>
                    <div className="w-full">
                      {card.content}
                    </div>
                  </div>
                );
              })}

              {/* Quick CTA Card */}
              <div className="bg-[#011] rounded-[2.5rem] p-10 text-white relative overflow-hidden group w-full shadow-2xl shadow-[#011]/30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE3A39]/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:scale-125 transition-transform duration-1000" />
                <h4 className="font-black text-2xl mb-3 relative z-10 uppercase tracking-tighter">Free Trial</h4>
                <p className="text-gray-400 text-sm mb-8 relative z-10 leading-relaxed font-medium">
                  Experience boutique quality on your images today. No credit card required.
                </p>
                <Link
                  href="/take-free-trial"
                  className="relative z-10 inline-flex items-center gap-2 text-sm font-black text-[#EE3A39] hover:text-white transition-all group/cta uppercase tracking-[3px]"
                >
                  Get Started <ArrowRight size={16} className="group-hover/cta:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Form + Map */}
            <div className="lg:col-span-8 flex flex-col gap-10 w-full">

              {/* Form */}
              <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-10 md:p-14 border border-white shadow-2xl relative overflow-hidden w-full">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#EE3A39] to-orange-500" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EE3A39]/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black text-[#011] tracking-tighter mb-4 leading-none">
                    Send Message
                  </h2>
                  <p className="text-xl text-[#626262] mb-14 font-medium leading-relaxed max-w-xl">
                    Fill out the form below and our boutique support team will reply within 4 hours.
                  </p>

                  <div className="w-full">
                    <ContactForm
                      textAreaClass="min-h-[160px] bg-gray-50/50 border-gray-100 focus-visible:ring-[#EE3A39]/10 text-base p-8 rounded-3xl shadow-inner placeholder:text-gray-300"
                      buttonClass="w-full sm:w-auto px-12 bg-[#011] hover:bg-[#EE3A39] text-white font-black py-6 rounded-2xl shadow-xl shadow-[#011]/10 hover:shadow-[#EE3A39]/30 hover:-translate-y-1 transition-all duration-500 mt-8 text-base tracking-[4px] uppercase flex items-center justify-center gap-3"
                    />
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <MapSection />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function MapSection() {
  const mapUrl = "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=House%20560,%20Road%2008,%20Adabor,%20Dhaka%201207+(THE%20BLACK%20FOX%20STUDIO)&t=&z=14&ie=UTF8&iwloc=B&output=embed";

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-white shadow-xl relative group h-[500px]">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#EE3A39] to-orange-500 z-20" />
      
      <div className="absolute top-8 left-8 z-30">
        <div className="bg-[#EE3A39] text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-lg shadow-[#EE3A39]/30">
          Bangladesh HQ
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-black/5 pointer-events-none group-hover:bg-transparent transition-all duration-1000" />
      <iframe
        className="w-full h-full grayscale-[0.3] contrast-[1.1] transition-all duration-1000 group-hover:grayscale-0"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={mapUrl}
        title="Physical Studio Location"
      />
    </div>
  );
}
