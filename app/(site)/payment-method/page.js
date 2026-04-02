"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CreditCard, Wallet, Banknote, ShieldCheck, Globe, Clock, ChevronRight, Zap, BadgeCheck, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Section = ({ id, icon, number, title, children }) => (
  <section id={id} className="scroll-mt-32 mb-16 last:mb-0">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 rounded-2xl bg-brandPrimary/10 text-brandPrimary flex items-center justify-center shrink-0 shadow-sm border border-brandPrimary/5">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[3px] text-brandPrimary mb-1">Method {number}</span>
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

export default function PaymentMethodPage() {
  const lastUpdated = "24 March 2026";
  const [activeSection, setActiveSection] = useState("");

  const toc = [
    { id: "international", label: "Credit Cards", number: "01" },
    { id: "online-wallets", label: "Digital Wallets", number: "02" },
    { id: "bank-transfer", label: "Bank Wire", number: "03" },
    { id: "billing-cycle", label: "Billing Cycle", number: "04" },
    { id: "security", label: "Secure Gateway", number: "05" },
    { id: "refunds", label: "Refund Policy", number: "06" },
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
            Financial Logistics
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-[#011] leading-none uppercase"
          >
            Payment <span className="text-brandPrimary text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-orange-500">Infrastructure.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#626262] mb-10 font-bold leading-relaxed max-w-2xl mx-auto"
          >
            Flexible global billing solutions tailored for enterprise studios, high-volume photographers, and agencies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-[2px] text-gray-400"
          >
             <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-brandPrimary" /> PCI-DSS Level 1</span>
             <span className="flex items-center gap-1"><Globe size={12} className="text-brandPrimary" /> 135+ Currencies</span>
             <span className="flex items-center gap-1"><Clock size={12} className="text-brandPrimary" /> Net-30 Available</span>
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
                <p className="text-[10px] font-black uppercase tracking-[2px] text-[#011]">Billing Options</p>
                <p className="text-xs text-gray-400 font-bold">Secure gateways</p>
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

              <div className="mt-12 p-6 bg-grayLight rounded-2xl border border-gray-100">
                 <p className="text-[10px] font-black uppercase tracking-[2px] text-[#011] mb-2">Need a custom plan?</p>
                 <p className="text-xs text-gray-400 font-bold mb-4">We offer volume-based invoicing for agencies.</p>
                 <Link href="/contact" className="text-[10px] font-black uppercase tracking-[2px] text-brandPrimary hover:underline flex items-center gap-2">
                    Speak with finance <ChevronRight size={12} />
                 </Link>
              </div>
            </div>
          </aside>

          {/* Core Content */}
          <main className="flex-1 max-w-4xl">
            {/* Payment Summary Box */}
            <div className="p-8 md:p-10 bg-[#011] rounded-[2.5rem] text-white mb-20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brandPrimary/20 blur-[60px] rounded-full" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-16 h-16 rounded-2xl bg-brandPrimary flex items-center justify-center shrink-0 shadow-2xl shadow-brandPrimary/20">
                  <DollarSign size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">Financial Flexibility</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-bold">
                    Whether you are a solo photographer or a global enterprise, our billing infrastructure scales with your production volume. Simple, secure, and fast.
                  </p>
                </div>
              </div>
            </div>

            <Section id="international" icon={<CreditCard size={20} />} number="1" title="Credit & Debit Cards">
              <p>We accept all major international card networks through our secure PCI-compliant processor.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                 {["Visa", "Mastercard", "American Express", "Discover"].map((card) => (
                   <div key={card} className="flex flex-col items-center justify-center p-4 bg-grayLight rounded-2xl border border-gray-100 group hover:border-brandPrimary/20 transition-all">
                      <span className="text-[10px] font-black uppercase tracking-[2px] text-[#011]">{card}</span>
                   </div>
                 ))}
              </div>
              <p className="mt-6 text-sm text-gray-400 italic font-bold">
                 * Cards are processed via 256-bit SSL encryption. We never store your full card details on our servers.
              </p>
            </Section>

            <Section id="online-wallets" icon={<Wallet size={20} />} number="2" title="Digital Wallets">
              <p>For instantaneous project kick-offs, we support a variety of digital payment ecosystems:</p>
              <ul className="space-y-4 mt-8">
                <Bullet>
                   <strong className="text-[#011]">PayPal:</strong> Direct checkout and recurring billing available for retainer clients.
                </Bullet>
                <Bullet>
                   <strong className="text-[#011]">Payoneer:</strong> Preferred for large-scale international B2B transfers with lower fees.
                </Bullet>
                <Bullet>
                   <strong className="text-[#011]">Skrill & Wise:</strong> Optimized for cross-border currency exchange at mid-market rates.
                </Bullet>
              </ul>
            </Section>

            <Section id="bank-transfer" icon={<Banknote size={20} />} number="3" title="Corporate Bank Wire">
              <p>
                Enterprise clients and agencies placing high-volume monthly orders can utilize direct SWIFT/Bank wire transfers.
              </p>
              <div className="mt-8 p-8 bg-grayLight border border-gray-100 rounded-3xl">
                 <h4 className="text-xs font-black uppercase tracking-[3px] text-brandPrimary mb-4">Wire Requirements</h4>
                 <ul className="space-y-2 text-sm font-bold text-[#011]">
                    <li className="flex items-center gap-3">
                       <Zap size={14} className="text-brandPrimary" /> 
                       Minimum Invoice Value: $500 USD
                    </li>
                    <li className="flex items-center gap-3">
                       <Zap size={14} className="text-brandPrimary" /> 
                       Standard Settlement: 2-5 Business Days
                    </li>
                 </ul>
                 <p className="mt-6 text-xs text-gray-400">
                    Banking details (IBAN/BIC) will be provided on your official invoice.
                 </p>
              </div>
            </Section>

            <Section id="billing-cycle" icon={<Clock size={20} />} number="4" title="Billing Cycles">
              <p>We offer three tiers of billing frequency to match your project pacing:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                 {[
                   { type: "Pay-Per-Job", desc: "Best for one-off projects or bulk tests." },
                   { type: "Weekly Batch", desc: "For steady weekly production volume." },
                   { type: "Monthly Net-30", desc: "Enterprise only. Fixed monthly invoicing." }
                 ].map((tier, idx) => (
                   <div key={idx} className="p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all">
                      <p className="text-[10px] font-black uppercase tracking-[2px] text-brandPrimary mb-2">{tier.type}</p>
                      <p className="text-xs font-bold text-[#626262] leading-relaxed">{tier.desc}</p>
                   </div>
                 ))}
              </div>
            </Section>

            <Section id="security" icon={<ShieldCheck size={20} />} number="5" title="Financial Security">
              <p>Your financial integrity is our primary concern. Our global payment stack includes:</p>
              <ul className="space-y-3 mt-6">
                <Bullet>AES-256 Data Encryption at rest and in transit</Bullet>
                <Bullet>3D Secure 2.0 (3DS2) authentication for all card payments</Bullet>
                <Bullet>Regular VPC penetration testing and security audits</Bullet>
                <Bullet>Strict internal access controls on all billing logs</Bullet>
              </ul>
            </Section>

            <Section id="refunds" icon={<BadgeCheck size={20} />} number="6" title="Satisfaction & Refund Policy">
              <p>
                We operate a **Quality-First** guarantee. If you are not satisfied with the output:
              </p>
              <ul className="space-y-4 mt-8">
                <Bullet>
                   <strong className="text-[#011]">Infinite Revisions:</strong> We will rework the files until they meet your original specification at no extra cost.
                </Bullet>
                <Bullet>
                   <strong className="text-[#011]">Partial Credits:</strong> If a specific image cannot be salvaged, we issue a credit to your account for future batches.
                </Bullet>
              </ul>
              <p className="mt-6 text-sm font-bold text-gray-400">
                * Refunds are handled case-by-case by our accounts department. Contact info@theblackfoxstudio.com for disputes.
              </p>
            </Section>

          </main>
        </div>
      </div>
    </div>
  );
}
