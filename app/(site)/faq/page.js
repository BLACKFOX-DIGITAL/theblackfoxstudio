"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Mail, MessageSquare, Zap, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const data = [
  {
    category: "Getting Started",
    question: "How can I make a comment about the service I received at BLACKFOX DIGITAL?",
    answer: "We always welcome your feedback — whether you found the service helpful and exceptional, or whether it fell short of your expectations. Please contact us and we will respond as soon as possible.",
  },
  {
    category: "Getting Started",
    question: "Is there a limit on the number of images I can submit?",
    answer: "No. You are free to submit as many images as you like. For test/trial jobs, we will complete up to 10 images. Once the results are approved and an agreement has been made, we proceed with the full batch.",
  },
  {
    category: "Services",
    question: "What kind of images do you retouch?",
    answer: "We provide professional post-production for a wide variety of image types including: Beauty Retouch, Ghost Mannequin (Neck Joint), Jewelry Retouch, Product Retouch, Flat Clothing Retouch, Model Retouch, Clipping Path & Background Removal, Image Masking, Shadow Creation, and Reflection Effects. For more information please check our services page. We deliver high-quality results at scalable, competitive rates.",
  },
  {
    category: "Delivery",
    question: "What is your standard delivery time?",
    answer: "Our standard delivery time for most jobs is 24 hours. This depends on the volume of images and the complexity of retouching required. If you have a specific deadline, please mention it when submitting your order — we will do our best to accommodate your timeline.",
  },
  {
    category: "Delivery",
    question: "Do you offer priority/rush delivery?",
    answer: "Yes, we offer priority delivery options (8-hour and 12-hour turnarounds). Rush delivery is charged at an additional 50%–75% of the standard order cost, depending on the original turnaround agreed. Please note that availability may vary based on current workload — contact us before placing a rush order.",
  },
  {
    category: "Security",
    question: "How do you guarantee my photos will be safe?",
    answer: "All images submitted to BLACKFOX DIGITAL are covered by a strict non-disclosure agreement. Our servers use encryption to ensure no data is leaked or accessed by unauthorized parties. As a standard policy, all client images are securely deleted within one week of full payment being received. Your files are safe with us.",
  },
  {
    category: "Revisions & Pricing",
    question: "Do I have to pay for revisions?",
    answer: "If the delivered images do not match the original specifications you provided, revisions are completed at no additional charge. We stand behind our quality guarantee. However, if revisions are requested due to changes in requirements from what was originally briefed, additional charges may apply.",
  },
  {
    category: "Revisions & Pricing",
    question: "Is there a volume discount system?",
    answer: "Yes. We offer tiered volume discounts for bulk orders. Discounts start at 10% for 101–500 images per month, 15% for 501–1,000, and 20% for 1,000+ images per month. Every arrangement is discussed during onboarding to ensure the best possible rate for your workflow. Contact us for a custom quote.",
  },
  {
    category: "Technical",
    question: "Do you work on RAW images?",
    answer: "Yes, we work on RAW files (CR2, NEF, ARW, DNG, etc.). Working from RAW gives us significantly more editing latitude — particularly for color correction, exposure, and skin retouching — resulting in a higher quality final output.",
  },
  {
    category: "Technical",
    question: "How do I send images to you?",
    answer: "You can share files via your preferred method: direct upload through our client portal, FTP, Dropbox, Google Drive, WeTransfer, or any other file sharing platform. We will work with whatever system best fits your existing workflow.",
  },
  {
    category: "Getting Started",
    question: "How do I get in touch if I have more questions?",
    answer: "You can reach us at any time via email at info@theblackfoxstudio.com, through our website contact form, or by calling (+88) 019 24 482 868. We aim to respond to all enquiries within a few hours during business hours.",
  },
];

const categories = [...new Set(data.map((q) => q.category))];

export default function FrequentlyAskedQuestionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData = data.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const jsonLdData = data
    .filter((q) => typeof q.answer === "string")
    .map((q) => ({
      questionName: q.question,
      acceptedAnswerText: q.answer,
    }));

  return (
    <div className="min-h-screen bg-white text-[#011] pb-24 selection:bg-brandPrimary/10 selection:text-brandPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: jsonLdData.map((q) => ({
              "@type": "Question",
              name: q.questionName,
              acceptedAnswer: {
                "@type": "Answer",
                text: q.acceptedAnswerText,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 border-b border-gray-100 overflow-hidden bg-grayLight/40">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-gray/[0.03] -z-10" />
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-brandPrimary/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-brandPrimary/10 border border-brandPrimary/20 text-brandPrimary rounded-full text-[10px] font-black mb-6 uppercase tracking-[3px] shadow-sm"
          >
            Knowledge Base
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-[#011] leading-none uppercase"
          >
            Ask us <span className="text-brandPrimary">anything.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#626262] leading-relaxed font-bold mb-12 max-w-2xl mx-auto"
          >
            Find clear answers to your queries about our high-tier boutique image processing and studio workflows.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto group"
          >
            <div className="absolute inset-0 bg-brandPrimary/10 blur-[40px] rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative">
              <Search
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-brandPrimary transition-colors"
                size={22}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the knowledge base..."
                className="w-full bg-white border border-gray-100 rounded-[2rem] py-6 pl-16 pr-6 text-[#011] focus:outline-none focus:border-brandPrimary focus:ring-4 focus:ring-brandPrimary/5 transition-all shadow-xl shadow-gray-200/20 text-sm font-bold placeholder:text-gray-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b border-gray-50 flex overflow-x-auto scrollbar-hide no-scrollbar">
        <div className="container mx-auto px-4 flex justify-center gap-3">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[2px] transition-all whitespace-nowrap",
                activeCategory === cat 
                  ? "bg-[#011] text-white shadow-lg shadow-[#011]/20 -translate-y-0.5" 
                  : "bg-grayLight text-gray-400 hover:bg-gray-100 hover:text-[#011]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatePresence mode="popLayout">
            {filteredData.length > 0 ? (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {filteredData.map((faq, idx) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={`${faq.category}-${idx}`}
                    >
                      <AccordionItem
                        value={`faq-${idx}`}
                        className="bg-[#F8F8F8] border border-transparent rounded-[1.5rem] px-4 md:px-6 overflow-hidden transition-all duration-300 hover:bg-white hover:border-gray-100 hover:shadow-xl hover:shadow-gray-200/30 group"
                      >
                        <AccordionTrigger className="text-left text-base md:text-lg font-black tracking-tight text-[#011] group-hover:text-brandPrimary py-6 hover:no-underline transition-colors uppercase leading-snug">
                          <div className="flex gap-4 items-start pr-4">
                             <HelpCircle size={20} className="shrink-0 mt-1 text-gray-300 group-hover:text-brandPrimary transition-colors" />
                             <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-[#626262] text-sm md:text-base leading-relaxed font-bold pb-8 pl-9 md:pl-10 text-justify">
                          <div className="pt-2 border-t border-gray-200 flex flex-col gap-4">
                            {faq.answer}
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-[9px] font-black uppercase tracking-[2px] px-3 py-1 bg-brandPrimary/10 text-brandPrimary rounded-full">
                                {faq.category}
                              </span>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center"
              >
                <div className="w-20 h-20 bg-grayLight rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={32} className="text-gray-300" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#011]">No results found</h3>
                <p className="text-gray-400 font-bold mt-2">Try adjusting your search or category filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Support Cards */}
      <section className="py-20 bg-grayLight/30 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SupportCard 
              icon={<Mail className="text-brandPrimary" />} 
              title="Email Support" 
              desc="Detailed technical queries or bulk pricing quotes."
              link="mailto:info@theblackfoxstudio.com"
              label="info@theblackfoxstudio.com"
            />
            <SupportCard 
              icon={<MessageSquare className="text-brandPrimary" />} 
              title="Live Chat" 
              desc="Quick answers for ongoing production files."
              link="#"
              label="Open Chat Interface"
            />
            <SupportCard 
              icon={<ShieldCheck className="text-brandPrimary" />} 
              title="Help Center" 
              desc="Guides on file uploading and guidelines."
              link="/services"
              label="Read Service Guides"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="bg-[#011] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-brandPrimary/10 blur-[80px] rounded-full translate-x-1/4 -translate-y-1/4" />
              <div className="absolute bottom-0 left-0 w-[30%] h-full bg-blue-500/5 blur-[80px] rounded-full -translate-x-1/4 translate-y-1/4" />
              
              <div className="relative z-10 max-w-2xl">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8">
                   <Zap className="text-brandPrimary fill-brandPrimary" size={32} />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                   Still have <span className="text-brandPrimary text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-orange-500">questions?</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-bold mb-12 leading-relaxed">
                   Our boutique studio team is on standby 24/7. Let&apos;s clear up any doubts about your next high-volume batch.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link href="/contact" className="bg-brandPrimary hover:bg-white hover:text-brandPrimary text-white px-10 py-5 rounded-2xl font-black text-[10px] tracking-[4px] uppercase flex items-center gap-3 transition-all duration-500 shadow-xl shadow-brandPrimary/20">
                     Speak with us <ArrowRight size={16} />
                  </Link>
                  <Link href="/free-trial" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-[10px] tracking-[4px] uppercase transition-all">
                     Start Free Trial
                  </Link>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

function SupportCard({ icon, title, desc, link, label }) {
  return (
    <Link href={link} className="flex flex-col items-start p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
      <div className="w-12 h-12 bg-brandPrimary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-black uppercase tracking-tight text-[#011] mb-3">{title}</h3>
      <p className="text-[#626262] text-sm font-bold mb-6 leading-relaxed">{desc}</p>
      <span className="text-[10px] font-black uppercase tracking-[2px] text-brandPrimary group-hover:underline flex items-center gap-2">
        {label} <ArrowRight size={12} />
      </span>
    </Link>
  );
}

