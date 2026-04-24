"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, ShieldCheck, CreditCard, Clock, Scale, Users, AlertTriangle, Mail, ChevronRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Section = ({ id, icon, number, title, children }) => (
  <section id={id} className="scroll-mt-32 mb-16 last:mb-0">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 rounded-2xl bg-brandPrimary/10 text-brandPrimary flex items-center justify-center shrink-0 shadow-sm border border-brandPrimary/5">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[3px] text-brandPrimary mb-1">Section {number}</span>
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

const SubSection = ({ title, children }) => (
  <div className="pt-6 border-t border-gray-100/50 mt-6 first:pt-0 first:border-0 first:mt-0">
    <p className="font-black text-[#011] mb-3 uppercase tracking-tight text-sm">{title}</p>
    <div className="space-y-4">{children}</div>
  </div>
);

export default function TermsPage() {
  const lastUpdated = "23 March 2026";
  const [activeSection, setActiveSection] = useState("");

  const toc = [
    { id: "introduction", label: "Acceptance", number: "01" },
    { id: "changes", label: "Modifications", number: "02" },
    { id: "services", label: "Our Services", number: "03" },
    { id: "site-use", label: "Acceptable Use", number: "04" },
    { id: "user-content", label: "User Content", number: "05" },
    { id: "rights", label: "Usage Rights", number: "06" },
    { id: "ip", label: "IP Rights", number: "07" },
    { id: "payments", label: "Billing & Refunds", number: "08" },
    { id: "turnaround", label: "Quotes & Speed", number: "09" },
    { id: "third-party", label: "External Tools", number: "10" },
    { id: "termination", label: "Term & End", number: "11" },
    { id: "warranty", label: "Disclaimers", number: "12" },
    { id: "liability", label: "Liability", number: "13" },
    { id: "indemnification", label: "Indemnity", number: "14" },
    { id: "governing-law", label: "Legal Venue", number: "15" },
    { id: "general", label: "General", number: "16" },
    { id: "contact", label: "Contact Us", number: "17" },
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
            Legal Framework
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter text-[#011] leading-none uppercase"
          >
            Terms of <span className="text-brandPrimary">Service.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#626262] mb-10 font-bold leading-relaxed max-w-2xl mx-auto"
          >
            Rules of engagement for our global image post-production studio operations. Please read these terms carefully before engaging our services.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-[2px] text-gray-400"
          >
            <span>Current Version: 2026.1</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full mt-1.5" />
            <span>Updated: {lastUpdated}</span>
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
                <p className="text-[10px] font-black uppercase tracking-[2px] text-[#011]">Navigation Guide</p>
                <p className="text-xs text-gray-400 font-bold">Jump to specific sections</p>
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
            </div>
          </aside>

          {/* Core Content */}
          <main className="flex-1 max-w-4xl">
            {/* Quick Acceptance Box */}
            <div className="p-8 md:p-10 bg-[#011] rounded-[2.5rem] text-white mb-20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brandPrimary/20 blur-[60px] rounded-full" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-16 h-16 rounded-2xl bg-brandPrimary flex items-center justify-center shrink-0 shadow-2xl shadow-brandPrimary/20">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">Binding Agreement</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-bold">
                    By accessing <a href="/" className="text-brandPrimary hover:underline uppercase tracking-widest text-[10px]">theblackfoxstudio.com</a>, you are entering a legally binding agreement. If you do not agree to these terms, please stop using the site immediately.
                  </p>
                </div>
              </div>
            </div>

            <Section id="introduction" icon={<FileText size={20} />} number="1" title="Core Acceptance">
              <p>
                Welcome to <strong className="text-[#011]">BLACKFOX DIGITAL</strong> — the premier B2B image post-production studio based in Dhaka, Bangladesh. We provide elite-level retouching and digital asset management for global brands.
              </p>
              <p>
                These Terms constitute a legally binding contract. By ordering services or using our platform, you warrant that you are of legal age and possess the authority to bind your organization to these conditions.
              </p>
            </Section>

            <Section id="changes" icon={<Clock size={20} />} number="2" title="Term Maintenance">
              <p>
                BLACKFOX DIGITAL evolves rapidly. We reserve the right to modify these Terms at any time. Significant shifts will be broadcast via email or clear dashboard notices.
              </p>
              <p>
                Continuous engagement with our studio following updates implies full acceptance. We recommend auditing this ledger periodically.
              </p>
            </Section>

            <Section id="services" icon={<Zap size={20} />} number="3" title="Service Catalog">
              <p>We provide enterprise-grade image processing including:</p>
              <ul className="space-y-3 mt-4">
                <Bullet>Precision Clipping Path & Background Removal</Bullet>
                <Bullet>Advanced Ghost Mannequin & 3D Neck Joint Stitching</Bullet>
                <Bullet>High-End Beauty & Product Retouching</Bullet>
                <Bullet>Color Calibration & SKU Recoloring</Bullet>
                <Bullet>Global E-commerce Optimization Workflows</Bullet>
              </ul>
              <p className="mt-4 pt-4 border-t border-gray-100">
                Detailed breakdowns and volume modeling are available on our official <Link href="/services" className="text-brandPrimary hover:underline font-black uppercase tracking-widest text-[11px]">Services Grid</Link>.
              </p>
            </Section>

            <Section id="site-use" icon={<ShieldCheck size={20} />} number="4" title="Operating Standards">
              <p>Users must adhere to strict operational guidelines. Prohibited acts include:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mt-6">
                <Bullet>Unauthorised content extraction</Bullet>
                <Bullet>Reverse engineering our pipelines</Bullet>
                <Bullet>Automated scraping or bot entry</Bullet>
                <Bullet>Uploading malicious code or files</Bullet>
                <Bullet>Sub-licensing studio access</Bullet>
                <Bullet>Misrepresentation of identity</Bullet>
              </div>
            </Section>

            <Section id="user-content" icon={<Users size={20} />} number="5" title="Content Integrity">
              <p>
                You retain ultimate ownership of your raw assets. However, by uploading, you certify that:
              </p>
              <ul className="space-y-3 mt-4">
                <Bullet>You hold absolute IP rights for the assets</Bullet>
                <Bullet>The content is legal and non-harmful</Bullet>
                <Bullet>You possess all necessary release forms for models/locations</Bullet>
              </ul>
            </Section>

            <Section id="rights" icon={<CreditCard size={20} />} number="6" title="Usage Rights">
              <p>
                You grant BLACKFOX DIGITAL a non-exclusive license to process your assets solely for fulfilling your orders. 
              </p>
              <p className="p-6 bg-grayLight/50 border border-gray-100 rounded-2xl italic text-[#011] font-bold">
                Portfolio Clause: Unless explicitly opted-out in writing, you grant us the right to showcase your edited images in our portfolio as technical demonstration of our capabilities.
              </p>
            </Section>

            <Section id="payments" icon={<CreditCard size={20} />} number="8" title="Billing Architecture">
              <SubSection title="8.1 Payment Terms">
                <p>New clients operate on a prepaid basis via PayPal or Bank Transfer. Enterprise credit (Net-30) is available for high-volume accounts subject to status audit.</p>
              </SubSection>
              <SubSection title="8.2 Quality & Revisions">
                <p>We provide a 100% Quality Guarantee. If results differ from agreed samples, submit a revision within <span className="text-brandPrimary">14 days</span>. Revisions are free unless scope changes.</p>
              </SubSection>
            </Section>

            <Section id="termination" icon={<AlertTriangle size={20} />} number="11" title="Account Status">
              <p>
                We may suspend access for non-payment, IP violations, or conduct that threatens studio integrity. Termination does not absolve outstanding debts or IP obligations.
              </p>
            </Section>

            <Section id="contact" icon={<Mail size={20} />} number="17" title="Direct Contact">
              <p>For legal inquiries or clarifications on these standards, reach our compliance team:</p>
              <div className="mt-8 p-10 bg-[#011] rounded-[2.5rem] text-white border border-[#011] shadow-xl relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brandPrimary/10 blur-[60px] rounded-full group-hover:bg-brandPrimary/20 transition-colors" />
                <div className="space-y-6 relative z-10">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[3px] text-brandPrimary mb-1">Global Headquarters</p>
                    <p className="text-xl font-black uppercase tracking-tighter">BLACKFOX DIGITAL Studio</p>
                  </div>
                  <div className="space-y-2 text-white/70 font-bold text-sm">
                    <p>House 560, Road 08, Adabor,</p>
                    <p>Dhaka 1207, Bangladesh</p>
                  </div>
                  <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-8">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[2px] text-brandPrimary mb-1">Support Email</p>
                      <a href="mailto:info@theblackfoxstudio.com" className="text-sm font-black hover:text-brandPrimary transition-all uppercase tracking-widest">
                        info@theblackfoxstudio.com
                      </a>
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[2px] text-brandPrimary mb-1">Direct Line</p>
                      <p className="text-sm font-black uppercase tracking-widest">+88 019 24 482 868</p>
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

