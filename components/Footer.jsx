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
    <footer className="bg-white border-t border-gray-200 pt-10 pb-5 mt-auto">
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Compact Grid with tighter gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Brand & Global */}
          <div className="space-y-3">
            <Link href="/" className="inline-block mb-3">
              <Image src={dbSettings.logoUrl || "/logo.png"} alt="Blackfox Logo" width={400} height={160} className="object-contain object-left h-[44px] w-auto pointer-events-none" />
            </Link>
            <p className="text-[#626262] leading-snug text-xs">
              Superior Image Post-Production Services. We operate a highly secure, 24/7 backend infrastructure to scale your editing needs limitlessly.
            </p>
            <div className="flex gap-2 pt-1">
              {dbSettings.teamsUrl && (
                <a href={dbSettings.teamsUrl} className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#626262] hover:bg-[#EE3A39] hover:text-white transition-colors" title="Microsoft Teams">
                  <TeamsIcon size={14} />
                </a>
              )}
              {dbSettings.whatsappUrl && (
                <a href={dbSettings.whatsappUrl} className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#626262] hover:bg-[#EE3A39] hover:text-white transition-colors" title="WhatsApp">
                  <RiWhatsappLine size={14} />
                </a>
              )}
              {dbSettings.facebookUrl && (
                <a href={dbSettings.facebookUrl} className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#626262] hover:bg-[#EE3A39] hover:text-white transition-colors" title="Facebook">
                  <RiFacebookLine size={14} />
                </a>
              )}
              {dbSettings.instagramUrl && (
                <a href={dbSettings.instagramUrl} className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#626262] hover:bg-[#EE3A39] hover:text-white transition-colors" title="Instagram">
                  <RiInstagramLine size={14} />
                </a>
              )}
            </div>
          </div>

          {/* Bangladesh Office */}
          <div className="space-y-3">
            <h4 className="text-[#011] font-bold text-sm uppercase tracking-wide">Bangladesh HQ</h4>
            <ul className="space-y-2 text-[#626262] text-xs">
              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#EE3A39] shrink-0">
                  <RiMapPin2Fill size={12} />
                </div>
                <span className="leading-snug max-w-[180px] break-words">{dbSettings.addressHQ || "House 560, Road 08, Adabor, Dhaka 1207"}</span>
              </li>
              <li className="flex items-center gap-2 group">
                <div className="w-6 h-6 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#EE3A39] shrink-0 group-hover:bg-[#EE3A39] group-hover:text-white transition-colors">
                  <RiPhoneFill size={12} />
                </div>
                <a href={`tel:${dbSettings.phone1 || "(+88) 019 24 482 868"}`} className="font-medium group-hover:text-[#EE3A39] transition-colors">{dbSettings.phone1 || "(+88) 019 24 482 868"}</a>
              </li>
              <li className="flex items-center gap-2 group">
                <div className="w-6 h-6 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#EE3A39] shrink-0 group-hover:bg-[#EE3A39] group-hover:text-white transition-colors">
                  <RiMailFill size={12} />
                </div>
                <a href={`mailto:${dbSettings.email || "info@theblackfoxstudio.com"}`} className="font-medium group-hover:text-[#EE3A39] transition-colors">{dbSettings.email || "info@theblackfoxstudio.com"}</a>
              </li>
            </ul>
          </div>



          {/* Useful Links */}
          <div className="space-y-3">
            <h4 className="text-[#011] font-bold text-sm uppercase tracking-wide">Useful Links</h4>
            <ul className="space-y-1.5 text-[#626262] text-xs">
              {[
                { name: "Terms & Conditions", url: "/terms-and-conditions" },
                { name: "Payment Method", url: "#" },
                { name: "FAQ", url: "/faq" },
                { name: "Privacy Policy", url: "/privacy-policy" },
                { name: "Cookies Policy", url: "/cookies-policy" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.url} className="group flex items-center gap-1.5 hover:text-[#EE3A39] transition-colors inline-block py-0.5">
                    <RiArrowRightLine size={12} className="text-gray-300 group-hover:text-[#EE3A39] transition-colors inline-block -mt-0.5" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Global Bottom Bar - also extremely compact */}
        <div className="border-t border-gray-100 pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#626262] text-xs font-medium text-center md:text-left">
            {dbSettings.copyright || `© ${new Date().getFullYear()} BLACKFOX DIGITAL. All Rights Reserved.`}
          </p>
          <div className="text-[10px] uppercase font-bold text-[#EE3A39] bg-[#F8F8F8] px-3 py-1 rounded-full inline-flex items-center tracking-wider">
            Quality Priority
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
