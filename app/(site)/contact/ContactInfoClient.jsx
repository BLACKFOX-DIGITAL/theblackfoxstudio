"use client";
import React from "react";
import Link from "next/link";
import { ContactForm } from "@/components/About/Contact";
import { Mail, MapPin, Phone, Clock, MessageSquare, ArrowRight, Zap } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

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
      <section className="relative pt-32 pb-20 border-b border-gray-200 overflow-hidden bg-white">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-sm font-bold mb-6 uppercase tracking-widest shadow-sm">
            Available 24/7/365
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-[#011] leading-none uppercase">
            Contact Blackfox Digital — <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-[#ff6b6b]">Image Post-Production Services</span>
          </h1>
          <p className="text-lg md:text-xl text-[#626262] leading-relaxed font-bold max-w-3xl mx-auto mb-10">
            Our team is available 24/7 to answer your questions about pricing, bulk volumes and turnaround times.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] font-black text-[#011] uppercase tracking-[3px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live Now
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#EE3A39]" />
              Replies within 2 hours
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare size={14} className="text-[#EE3A39]" />
              Free Quote Response
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="py-24 bg-[#F8F8F8] w-full">
        <div className="container mx-auto px-4 max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-start">

            {/* Left: Contact Info & FAQs */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full sticky top-32">
              {contactCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-[2.5rem] p-8 border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden flex flex-col w-full"
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

              {/* FAQs - Converted to Accordion for vertical space saving */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-gray-50 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-[3px] text-[#011] mb-6">Common Questions</h4>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {[
                    { q: "How quickly do you reply?", a: "We reply within 2 hours, 24 hours a day, 7 days a week." },
                    { q: "What file formats do you accept?", a: "We accept JPG, PNG, PSD, TIFF, RAW and most common formats. Files via FTP, Dropbox or WeTransfer." },
                    { q: "Do you offer bulk pricing?", a: "Yes! Orders of 1000+ images receive 20% discount automatically." }
                  ].map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-[#F8F8F8] rounded-2xl px-5">
                      <AccordionTrigger className="text-left text-xs font-black text-[#011] hover:text-[#EE3A39] py-4 uppercase tracking-tight">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#626262] text-sm font-medium pb-4 border-t border-gray-200 pt-3">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Quick CTA Card */}
              <div className="bg-[#011] rounded-[2.5rem] p-10 text-white relative overflow-hidden group w-full shadow-2xl shadow-[#011]/30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE3A39]/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:scale-125 transition-transform duration-1000" />
                <h4 className="font-black text-2xl mb-3 relative z-10 uppercase tracking-tighter">Free Trial</h4>
                <p className="text-gray-400 text-sm mb-8 relative z-10 leading-relaxed font-medium">
                  Experience boutique quality on your images today. No credit card required.
                </p>
                <Link
                  href="/free-trial"
                  className="relative z-10 inline-flex items-center gap-2 text-sm font-black text-[#EE3A39] hover:text-white transition-all group/cta uppercase tracking-[3px]"
                >
                  Get Started <ArrowRight size={16} className="group-hover/cta:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Form + File Transfer */}
            <div className="lg:col-span-8 flex flex-col gap-10 w-full">

              {/* Form Integrated with File Transfer for Cohesion */}
              <div className="bg-white/80 backdrop-blur-md rounded-[3rem] border border-white shadow-2xl relative overflow-hidden w-full flex flex-col">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#EE3A39] to-orange-500" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EE3A39]/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10 p-8 md:p-14 pb-10">
                  <h2 className="text-3xl md:text-5xl font-black text-[#011] tracking-tighter mb-4 leading-none uppercase">
                    Submit Requirement
                  </h2>
                  <p className="text-lg text-[#626262] mb-12 font-medium leading-relaxed max-w-xl">
                    Fill out the form below and our production team will reply within 2 hours.
                  </p>

                  <div className="w-full">
                    <ContactForm
                      textAreaClass="min-h-[120px] bg-gray-50/50 border-gray-100 focus-visible:ring-[#EE3A39]/10 text-xs p-6 rounded-2xl shadow-inner placeholder:text-gray-300"
                      buttonClass="w-full sm:w-auto px-12 bg-[#EE3A39] hover:bg-black text-white font-black py-5 rounded-2xl shadow-xl shadow-[#EE3A39]/20 hover:shadow-black/20 hover:-translate-y-1 transition-all duration-500 mt-8 text-sm tracking-[4px] uppercase flex items-center justify-center gap-3"
                    />
                  </div>
                </div>

                {/* File Transfer Info - Integrated as Form Footer */}
                <div className="bg-[#F8F8F8]/80 border-t border-gray-100 px-6 py-8 md:p-10 flex flex-col items-center justify-center gap-6 mt-auto relative z-10 w-full text-center">
                  <h4 className="text-[10px] font-black uppercase tracking-[4px] text-gray-400 w-full">We accept files via</h4>
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-12 w-full pt-2">
                    {[
                      { name: "FTP", icon: "RiCloudFill" },
                      { name: "Dropbox", icon: "RiDropboxFill" },
                      { name: "WeTransfer", icon: "RiSendPlaneFill" },
                      { name: "Google Drive", icon: "RiGoogleFill" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 grayscale border border-transparent opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default group">
                        <div className="text-gray-400 group-hover:text-[#EE3A39] transition-all">
                          <Zap size={16} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
                      </div>
                    ))}
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
