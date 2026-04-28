import {
  RiFacebookLine,
  RiInstagramLine,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiSkypeFill,
  RiWhatsappLine,
  RiArrowRightLine
} from "@remixicon/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import TeamsIcon from "./TeamsIcon";

const Footer = ({ dbSettings = {} }) => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 md:pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-12 items-start">

          {/* Brand & Socials */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image src={(dbSettings.logoUrl || "/logo.png") + "?v=2"} alt="BLACKFOX DIGITAL Logo" width={220} height={50} className="object-contain object-left h-[44px] w-auto pointer-events-none" unoptimized />
            </Link>
            <p className="text-[#626262] leading-relaxed text-sm max-w-sm">
              80+ specialist editors. 5,000+ images daily. Human-edited, commercial-grade post-production trusted by 500+ brands across 30 countries.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: TeamsIcon, url: dbSettings.teamsUrl, title: "Teams", custom: true },
                { icon: RiWhatsappLine, url: dbSettings.whatsappUrl, title: "WhatsApp" },
                { icon: RiFacebookLine, url: dbSettings.facebookUrl, title: "Facebook" },
                { icon: RiInstagramLine, url: dbSettings.instagramUrl, title: "Instagram" }
              ].map((social, i) => social.url && (
                <a key={i} href={social.url} className="w-9 h-9 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#626262] hover:bg-[#EE3A39] hover:text-white transition-all shadow-sm hover:shadow-md" title={social.title}>
                  {social.custom ? <social.icon size={16} /> : <social.icon size={16} />}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:pt-2">
            <h4 className="text-[#011] font-black text-xs uppercase tracking-[3px] mb-8">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Background Removal", url: "/services/background-removal-service" },
                { name: "Clipping Path", url: "/services/clipping-path-service" },
                { name: "Ghost Mannequin", url: "/services/ghost-mannequin-service" },
                { name: "Beauty Retouch", url: "/services/beauty-skin-retouching-service" },
                { name: "Jewelry Retouch", url: "/services/jewelry-retouching-service" },
                { name: "Real Estate Editing", url: "/services/real-estate-photo-editing" },
                { name: "Car Photo Editing", url: "/services/car-photo-editing-service" },
                { name: "View All Services →", url: "/services" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.url} className="group flex items-center gap-2 text-sm font-bold text-[#626262] hover:text-[#EE3A39] transition-all">
                    <RiArrowRightLine size={14} className="text-gray-300 group-hover:text-[#EE3A39] group-hover:translate-x-1 transition-all shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:pt-2">
            <h4 className="text-[#011] font-black text-xs uppercase tracking-[3px] mb-8">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", url: "/about" },
                { name: "Portfolio", url: "/portfolio" },
                { name: "Pricing", url: "/pricing" },
                { name: "Get a Quote", url: "/get-quote" },
                { name: "Free Trial", url: "/free-trial" },
                { name: "FAQ", url: "/faq" },
                { name: "Payment Methods", url: "/payment-method" },
                { name: "Privacy Policy", url: "/privacy-policy" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.url} className="group flex items-center gap-2 text-sm font-bold text-[#626262] hover:text-[#EE3A39] transition-all">
                    <RiArrowRightLine size={14} className="text-gray-300 group-hover:text-[#EE3A39] group-hover:translate-x-1 transition-all shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bangladesh HQ */}
          <div className="lg:pt-2">
            <h4 className="text-[#011] font-black text-xs uppercase tracking-[3px] mb-8">Contact Us</h4>
            <ul className="space-y-5 text-[#626262]">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#F8F8F8] flex items-center justify-center text-[#EE3A39] shrink-0 shadow-sm">
                  <RiMapPin2Fill size={14} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Location</span>
                   <span className="text-sm font-bold text-[#011] leading-snug">{dbSettings.addressHQ || "House 560, Road 08, Adabor, Dhaka 1207"}</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-xl bg-[#F8F8F8] flex items-center justify-center text-[#EE3A39] shrink-0 group-hover:bg-[#EE3A39] group-hover:text-white transition-all shadow-sm">
                  <RiPhoneFill size={14} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Phone</span>
                   <a href={`tel:${dbSettings.phone1 || "+8801924482868"}`} className="text-sm font-bold text-[#011] hover:text-[#EE3A39] transition-colors">{dbSettings.phone1 || "(+88) 019 24 482 868"}</a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-xl bg-[#F8F8F8] flex items-center justify-center text-[#EE3A39] shrink-0 group-hover:bg-[#EE3A39] group-hover:text-white transition-all shadow-sm">
                  <RiMailFill size={14} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Email</span>
                   <a href={`mailto:${dbSettings.email || "info@theblackfoxstudio.com"}`} className="text-sm font-bold text-[#011] hover:text-[#EE3A39] transition-colors">{dbSettings.email || "info@theblackfoxstudio.com"}</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#626262] text-xs font-bold uppercase tracking-widest">
            {dbSettings.copyright || `© ${new Date().getFullYear()} BLACKFOX DIGITAL. All Rights Reserved.`}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms-and-conditions" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#EE3A39] transition-colors">Terms</Link>
            <span className="text-gray-200">|</span>
            <Link href="/cookies-policy" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#EE3A39] transition-colors">Cookies</Link>
            <span className="text-gray-200">|</span>
            <div className="text-[10px] font-black uppercase tracking-[3px] text-[#EE3A39] bg-[#EE3A39]/5 px-4 py-2 rounded-full border border-[#EE3A39]/10">
              Human-Edited. Always.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
