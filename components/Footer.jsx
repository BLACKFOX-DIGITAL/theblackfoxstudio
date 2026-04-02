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
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 items-start">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src={dbSettings.logoUrl || "/logo.png"} alt="BLACKFOX DIGITAL Logo" width={220} height={50} className="object-contain object-left h-[44px] w-auto pointer-events-none" />
            </Link>
            <p className="text-[#626262] leading-relaxed text-sm max-w-sm">
              Superior Image Post-Production Services. We operate a highly secure, 24/7 backend infrastructure to scale your editing needs limitlessly.
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

          {/* Bangladesh HQ */}
          <div className="lg:pt-2">
            <h4 className="text-[#011] font-black text-xs uppercase tracking-[3px] mb-8">Bangladesh HQ</h4>
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
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Phone Line</span>
                   <a href={`tel:${dbSettings.phone1 || "(+88) 019 24 482 868"}`} className="text-sm font-bold text-[#011] hover:text-[#EE3A39] transition-colors">{dbSettings.phone1 || "(+88) 019 24 482 868"}</a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-xl bg-[#F8F8F8] flex items-center justify-center text-[#EE3A39] shrink-0 group-hover:bg-[#EE3A39] group-hover:text-white transition-all shadow-sm">
                  <RiMailFill size={14} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Email Us</span>
                   <a href={`mailto:${dbSettings.email || "info@theblackfoxstudio.com"}`} className="text-sm font-bold text-[#011] hover:text-[#EE3A39] transition-colors">{dbSettings.email || "info@theblackfoxstudio.com"}</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="lg:pt-2">
            <h4 className="text-[#011] font-black text-xs uppercase tracking-[3px] mb-8">Useful Links</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                { name: "Terms & Conditions", url: "/terms-and-conditions" },
                { name: "Payment Method", url: "/payment-method" },
                { name: "FAQ", url: "/faq" },
                { name: "Privacy Policy", url: "/privacy-policy" },
                { name: "Cookies Policy", url: "/cookies-policy" },
                { name: "About Us", url: "/about" },
                { name: "Our Services", url: "/services" },
                { name: "Order Now", url: "/order" }
              ].map((link, i) => (
                <Link key={i} href={link.url} className="group flex items-center gap-2 text-sm font-bold text-[#626262] hover:text-[#EE3A39] transition-all">
                  <RiArrowRightLine size={14} className="text-gray-300 group-hover:text-[#EE3A39] group-hover:translate-x-1 transition-all" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Global Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#626262] text-xs font-bold uppercase tracking-widest">
            {dbSettings.copyright || `© ${new Date().getFullYear()} BLACKFOX DIGITAL. All Rights Reserved.`}
          </p>
          <div className="flex items-center gap-2">
            <div className="text-[10px] font-black uppercase tracking-[3px] text-[#EE3A39] bg-[#EE3A39]/5 px-4 py-2 rounded-full border border-[#EE3A39]/10">
              Quality Priority
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
