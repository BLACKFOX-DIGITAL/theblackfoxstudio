"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, Settings, BarChart2, Shield, Eye, Mail, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Section = ({ id, icon, number, title, children }) => (
  <section id={id} className="scroll-mt-32 mb-16 last:mb-0">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 rounded-2xl bg-brandPrimary/10 text-brandPrimary flex items-center justify-center shrink-0 shadow-sm border border-brandPrimary/5">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[3px] text-brandPrimary mb-1">Chapter {number}</span>
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

const CookieTable = ({ rows }) => (
  <div className="overflow-x-auto mt-6 rounded-[1.5rem] border border-gray-100 shadow-sm bg-white overflow-hidden">
    <table className="w-full text-xs">
      <thead className="bg-[#011] text-white">
        <tr>
          <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-[9px]">Cookie Name</th>
          <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-[9px]">Provider</th>
          <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-[9px]">Purpose</th>
          <th className="text-left px-6 py-4 font-black uppercase tracking-widest text-[9px]">Expiry</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-grayLight/50 transition-colors">
            <td className="px-6 py-4 font-black text-brandPrimary font-mono whitespace-nowrap">{row.name}</td>
            <td className="px-6 py-4 text-[#011] font-bold">{row.provider}</td>
            <td className="px-6 py-4 text-[#626262] font-medium leading-relaxed">{row.purpose}</td>
            <td className="px-6 py-4 text-gray-400 font-bold whitespace-nowrap uppercase tracking-tighter">{row.expiry}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const BrowserLink = ({ name, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-brandPrimary hover:text-[#011] font-black uppercase tracking-widest text-[10px] transition-colors bg-brandPrimary/5 px-4 py-2 rounded-full border border-brandPrimary/10 hover:border-brandPrimary/20"
  >
    {name} <ChevronRight size={12} />
  </a>
);

export default function CookiePolicyPage() {
  const lastUpdated = "23 March 2026";
  const [activeSection, setActiveSection] = useState("");

  const toc = [
    { id: "what-are-cookies", label: "Basics", number: "01" },
    { id: "how-we-use", label: "Our Usage", number: "02" },
    { id: "essential", label: "Necessary", number: "03" },
    { id: "analytics", label: "Insights", number: "04" },
    { id: "preference", label: "Preferences", number: "05" },
    { id: "third-party", label: "External", number: "06" },
    { id: "managing", label: "Controls", number: "07" },
    { id: "updates", label: "Updates", number: "08" },
    { id: "contact", label: "Contact Us", number: "09" },
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
            Privacy Standards
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter text-[#011] leading-none uppercase"
          >
            Cookie <span className="text-brandPrimary text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-orange-500">Manifesto.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#626262] mb-10 font-bold leading-relaxed max-w-2xl mx-auto"
          >
            Transparency on how we track, analyze, and optimize your experience during image post-production sessions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-[2px] text-gray-400"
          >
             <span>Trust Certified</span>
             <span className="w-1 h-1 bg-gray-300 rounded-full mt-1.5" />
             <span>GDPR Compliant</span>
             <span className="w-1 h-1 bg-gray-300 rounded-full mt-1.5" />
             <span>Last Updated: {lastUpdated}</span>
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
                <p className="text-xs text-gray-400 font-bold">Quick navigation</p>
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
                 <Link href="/privacy-policy" className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brandPrimary transition-colors">
                    <span className="w-8 h-[1px] bg-gray-200 group-hover:bg-brandPrimary transition-colors" /> Privacy
                 </Link>
                 <Link href="/terms-and-conditions" className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brandPrimary transition-colors">
                    <span className="w-8 h-[1px] bg-gray-200 group-hover:bg-brandPrimary transition-colors" /> Terms
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
                  <Cookie size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">Cookie Statement</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-bold">
                    By continuing to use our studio platform, you consent to our use of technical and analytics cookies. You can audit and control these at any time.
                  </p>
                </div>
              </div>
            </div>

            <Section id="what-are-cookies" icon={<Cookie size={20} />} number="1" title="The Basics">
              <p>
                Cookies are tiny data packets stored on your device that help us recognize your session, remember your login state, and optimize your studio dashboard.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                 <div className="p-6 bg-grayLight rounded-2xl border border-gray-100 italic">
                    <strong className="text-[#011]">Session Packets:</strong> Temporary markers that vanish when you close your browser. Essential for live editing sessions.
                 </div>
                 <div className="p-6 bg-grayLight rounded-2xl border border-gray-100 italic">
                    <strong className="text-[#011]">Persistent Packets:</strong> Locked markers that remember your language and UI theme preferences across multiple days.
                 </div>
              </div>
            </Section>

            <Section id="how-we-use" icon={<Eye size={20} />} number="2" title="Studio Usage">
              <p>BLACKFOX DIGITAL deploys tracking technologies strictly for high-tier performance. We use them to:</p>
              <ul className="space-y-3 mt-6">
                <Bullet>Validate secure access to your private production folders</Bullet>
                <Bullet>Remember your chosen color profiles and file format settings</Bullet>
                <Bullet>Audit studio load times to maintain our 24-hour delivery promise</Bullet>
                <Bullet>Determine which retouching services are trending in your region</Bullet>
              </ul>
              <div className="mt-8 p-6 bg-brandPrimary/5 border border-brandPrimary/10 rounded-2xl text-center">
                <p className="text-xs font-black uppercase tracking-[2px] text-brandPrimary">Strict Privacy Policy</p>
                <p className="text-[11px] font-bold text-[#011] mt-1">We do NOT sell data to ad-networks or use tracking for third-party marketing.</p>
              </div>
            </Section>

            <Section id="essential" icon={<Shield size={20} />} number="3" title="Technical Necessity">
              <p>
                These cookies are strictly required for the platform to exist. Without them, you cannot log in or submit image batches securely.
              </p>
              <CookieTable rows={[
                { name: "__csrf_token", provider: "Blackfox Studio", purpose: "Cyber-security shield for client contact portals", expiry: "Session" },
                { name: "auth_state", provider: "Blackfox Studio", purpose: "Maintains your production dashboard session", expiry: "14 Days" },
              ]} />
            </Section>

            <Section id="analytics" icon={<BarChart2 size={20} />} number="4" title="Performance Insights">
              <p>
                We use privacy-first, cookie-less analytics (via Plausible) to monitor site health without invading your personal digital footprint.
              </p>
              <div className="mt-8 bg-[#011] rounded-[2rem] p-8 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-full bg-brandPrimary/10 blur-[40px] -skew-x-12" />
                 <h4 className="text-sm font-black uppercase tracking-[3px] text-brandPrimary mb-4">Privacy Optimization</h4>
                 <p className="text-white/70 text-sm font-bold leading-relaxed mb-6">
                    Our Vercel Speed Insights tool tracks real-world performance metrics so we can ensure our global asset delivery is always lightning-fast.
                 </p>
                 <CookieTable rows={[
                    { name: "va-*", provider: "Vercel SDK", purpose: "Aggregated performance & speed metrics", expiry: "Session" },
                 ]} />
              </div>
            </Section>

            <Section id="managing" icon={<Settings size={20} />} number="7" title="Managing Cookies">
              <p>
                You hold absolute authority over your cookie ecosystem. You can wipe, block, or audit these trackers via your browser&apos;s master settings.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                 <BrowserLink name="Chrome" href="https://support.google.com/chrome/answer/95647" />
                 <BrowserLink name="Safari" href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" />
                 <BrowserLink name="Firefox" href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" />
                 <BrowserLink name="Edge" href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" />
              </div>
            </Section>

            <Section id="contact" icon={<Mail size={20} />} number="9" title="Contact Us">
              <p>For deep technical audits or data access requests, contact our privacy desk:</p>
              <div className="mt-8 p-10 bg-[#F8F8F8] rounded-[2.5rem] border border-gray-100 relative group transition-colors hover:bg-white hover:shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[3px] text-brandPrimary mb-1">Compliance Team</p>
                    <p className="text-xl font-black uppercase tracking-tighter text-[#011]">Data Protection Officer</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-8 pt-6 border-t border-gray-200/50">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[2px] text-gray-400 mb-1">Email Desk</p>
                      <a href="mailto:info@theblackfoxstudio.com" className="text-sm font-black text-[#011] hover:text-brandPrimary transition-all uppercase tracking-widest leading-none">
                        info@theblackfoxstudio.com
                      </a>
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

