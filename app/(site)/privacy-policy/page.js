"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, Eye, Lock, Users, FileText, Mail, ChevronRight, Scale, Info, Database } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Section = ({ id, icon, number, title, children }) => (
  <section id={id} className="scroll-mt-32 mb-16 last:mb-0">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 rounded-2xl bg-brandPrimary/10 text-brandPrimary flex items-center justify-center shrink-0 shadow-sm border border-brandPrimary/5">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[3px] text-brandPrimary mb-1">Clause {number}</span>
        <h2 className="text-2xl md:text-3xl font-black text-[#011] tracking-tighter uppercase leading-none">
          {title}
        </h2>
      </div>
    </div>
    <div className="text-[#626262] text-sm md:text-base leading-relaxed space-y-4 pl-0 md:pl-16 font-medium">
      {children}
    </div>
  </section>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3 group">
    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brandPrimary shrink-0 shadow-[0_0_8px_rgba(238,58,57,0.4)] group-hover:scale-125 transition-transform" />
    <span className="group-hover:text-[#011] transition-colors">{children}</span>
  </li>
);

export default function PrivacyPolicyPage() {
  const lastUpdated = "24 March 2026";
  const [activeSection, setActiveSection] = useState("");

  const toc = [
    { id: "information-we-collect", label: "Collection", number: "01" },
    { id: "how-we-use-data", label: "Usage", number: "02" },
    { id: "data-sharing", label: "Sharing", number: "03" },
    { id: "data-retention", label: "Retention", number: "04" },
    { id: "your-rights", label: "Your Rights", number: "05" },
    { id: "cookies", label: "Tracking", number: "06" },
    { id: "security", label: "Security", number: "07" },
    { id: "third-party", label: "Third Parties", number: "08" },
    { id: "contact", label: "Privacy Desk", number: "09" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-100px 0px -70% 0px" }
    );

    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#011] scroll-smooth">
      {/* Hero Header */}
      <section className="relative pt-32 pb-24 border-b border-gray-100 overflow-hidden bg-grayLight/30">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-gray/[0.03] -z-10" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-brandPrimary/10 border border-brandPrimary/20 text-brandPrimary rounded-full text-[10px] font-black mb-6 uppercase tracking-[3px] shadow-sm"
          >
            Privacy Policy
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-[#011] leading-none uppercase"
          >
            Privacy <span className="text-brandPrimary text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-orange-500">Policy.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#626262] mb-10 font-bold leading-relaxed max-w-2xl mx-auto"
          >
            A high-level overview of our commitment to data integrity, protection, and your individual rights as a BLACKFOX DIGITAL client.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-[2px] text-gray-400"
          >
             <span>ISO Compliant Protocols</span>
             <span className="w-1 h-1 bg-gray-300 rounded-full mt-1.5" />
             <span>Secure Asset Custody</span>
             <span className="w-1 h-1 bg-gray-300 rounded-full mt-1.5" />
             <span>Revision: {lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* Main Grid Layout */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col xl:flex-row gap-16">
          
          {/* Sidebar Navigation */}
          <aside className="xl:w-80 shrink-0 hidden xl:block">
            <div className="sticky top-32">
              <div className="mb-6 pl-4 border-l-2 border-brandPrimary/20">
                <p className="text-[10px] font-black uppercase tracking-[2px] text-[#011]">Policy Sections</p>
                <p className="text-xs text-gray-400 font-bold">Policy breakdown</p>
              </div>
              <nav className="flex flex-col space-y-1">
                {toc.map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={cn(
                      "group flex items-center justify-between text-left px-4 py-3 rounded-xl transition-all duration-300 border border-transparent",
                      activeSection === item.id 
                        ? "bg-[#011] text-white shadow-lg shadow-[#011]/10 -translate-x-2" 
                        : "hover:bg-grayLight/50 text-gray-500 hover:text-[#011] hover:border-gray-100"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "text-[9px] font-black uppercase tracking-[1px]",
                        activeSection === item.id ? "text-brandPrimary" : "text-gray-300 group-hover:text-gray-400"
                      )}>{item.number}</span>
                      <span className="text-[11px] font-black uppercase tracking-[1px]">{item.label}</span>
                    </div>
                    <ChevronRight size={12} className={cn(
                      "transition-all",
                      activeSection === item.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                    )} />
                  </button>
                ))}
              </nav>

              <div className="mt-12 space-y-4">
                 <Link href="/terms-and-conditions" className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brandPrimary transition-colors">
                    <span className="w-8 h-[1px] bg-gray-200 group-hover:bg-brandPrimary transition-colors" /> Terms
                 </Link>
                 <Link href="/cookies-policy" className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brandPrimary transition-colors">
                    <span className="w-8 h-[1px] bg-gray-200 group-hover:bg-brandPrimary transition-colors" /> Cookies
                 </Link>
              </div>
            </div>
          </aside>

          {/* Core Content */}
          <main className="flex-1 max-w-4xl">
            {/* Quick Summary Box */}
            <div className="p-8 md:p-10 bg-[#011] rounded-[2.5rem] text-white mb-20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brandPrimary/20 blur-[60px] rounded-full" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-16 h-16 rounded-2xl bg-brandPrimary flex items-center justify-center shrink-0 shadow-2xl shadow-brandPrimary/20">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">Our Commitment</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-bold">
                    We treat your image assets and personal data with the same precision we apply to our post-production. Zero data resale, absolute asset security.
                  </p>
                </div>
              </div>
            </div>

            <Section id="information-we-collect" icon={<Database size={20} />} number="1" title="What We Collect">
              <p>We collect essential information to facilitate our production cycle and client communication.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[3px] text-brandPrimary flex items-center gap-2">
                    <Info size={14} /> Explicit Data
                  </h4>
                  <ul className="space-y-2">
                    <Bullet>Contact signatures (Name, Email, Business)</Bullet>
                    <Bullet>Production assets (Image Files, Briefs)</Bullet>
                    <Bullet>Workflow metadata (File URLs, Instructions)</Bullet>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[3px] text-brandPrimary flex items-center gap-2">
                    <Info size={14} /> Technical Log
                  </h4>
                  <ul className="space-y-2">
                    <Bullet>Network identity (Anonymized IP)</Bullet>
                    <Bullet>Browser environment (Type, Version)</Bullet>
                    <Bullet>Interaction history (Heatmaps, Clicks)</Bullet>
                  </ul>
                </div>
              </div>
            </Section>

            <Section id="how-we-use-data" icon={<Scale size={20} />} number="2" title="How We Use Your Data">
              <p>BLACKFOX DIGITAL utilizes your data exclusively for operational excellence:</p>
              <ul className="space-y-3 mt-6">
                <Bullet>Validating and executing high-tier boutique image retouching</Bullet>
                <Bullet>Securing B2B communication channels for project iterations</Bullet>
                <Bullet>Optimizing regional server load for faster asset delivery</Bullet>
                <Bullet>Complying with international fiscal and tax regulations</Bullet>
              </ul>
              <div className="mt-8 p-6 bg-red-50 border border-red-100 rounded-2xl text-center">
                 <p className="text-[11px] font-black text-brandPrimary uppercase tracking-widest">The Non-Marketing Guarantee</p>
                 <p className="text-xs font-bold text-[#011] mt-1">Your data is never sold to advertising networks, period.</p>
              </div>
            </Section>

            <Section id="data-retention" icon={<Lock size={20} />} number="4" title="Data Retention">
              <p>We maintain a lean data footprint. Retention is dictated by business necessity and legal mandate:</p>
              <div className="mt-8 space-y-4">
                 <div className="flex items-center gap-6 p-6 bg-grayLight rounded-2xl border border-gray-100">
                    <div className="text-2xl font-black text-[#011]">3Y</div>
                    <div className="text-xs font-bold text-[#626262]">Client records and fiscal transactional history.</div>
                 </div>
                 <div className="flex items-center gap-6 p-6 bg-grayLight rounded-2xl border border-gray-100">
                    <div className="text-2xl font-black text-[#011]">12M</div>
                    <div className="text-xs font-bold text-[#626262]">Inquiry metadata and general lead communication logs.</div>
                 </div>
                 <div className="flex items-center gap-6 p-6 bg-grayLight rounded-2xl border border-gray-100">
                    <div className="text-2xl font-black text-[#011] uppercase tracking-tighter text-brandPrimary">Instant</div>
                    <div className="text-xs font-bold text-[#626262]">Proprietary image assets can be purged immediately upon job completion request.</div>
                 </div>
              </div>
            </Section>

            <Section id="your-rights" icon={<ShieldCheck size={20} />} number="5" title="Your Rights">
              <p>You maintain absolute control over your digital identity. Under global frameworks, you hold the right to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                 {[
                   "Audit & Access Records",
                   "Rectify Incomplete Data",
                   "Request Global Erasure",
                   "Restrict Automated Usage",
                   "Data Format Portability",
                   "Object to Processing"
                 ].map((right, idx) => (
                   <div key={idx} className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl hover:border-brandPrimary/20 transition-colors">
                      <div className="w-1.5 h-1.5 bg-brandPrimary rounded-full" />
                      <span className="text-xs font-black uppercase tracking-tight text-[#011]">{right}</span>
                   </div>
                 ))}
              </div>
            </Section>

            <Section id="contact" icon={<Mail size={20} />} number="9" title="Contact Us">
              <p>For escalation, audit requests, or technical inquiries regarding your privacy:</p>
              <div className="mt-8 p-10 bg-[#F8F8F8] rounded-[2.5rem] border border-gray-100 relative group transition-colors hover:bg-white hover:shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[3px] text-brandPrimary mb-1">Privacy Team</p>
                    <p className="text-xl font-black uppercase tracking-tighter text-[#011]">BLACKFOX DIGITAL</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-8 pt-6 border-t border-gray-200/50">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[2px] text-gray-400 mb-1">Email Enquiries</p>
                      <a href="mailto:info@theblackfoxstudio.com" className="text-sm font-black text-[#011] hover:text-brandPrimary transition-all uppercase tracking-widest leading-none">
                        info@theblackfoxstudio.com
                      </a>
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[2px] text-gray-400 mb-1">HQ Response Time</p>
                      <p className="text-xs font-black text-[#011] uppercase tracking-widest">{"<"} 24 Business Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}

