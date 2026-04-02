import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { OrganizationJsonLd } from "next-seo";
import CookieConstantWrapper from "@/components/Cookies/CookieConstantWrapper";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import { getFontFamily } from "@/utils/font";
import { cn } from "@/lib";
import { services as mockServices, siteSettings as mockSettings } from "@/lib/mock-data";

export const metadata = {
  title: "BLACKFOX DIGITAL | Professional Image Post-Production Services",
  description: "BLACKFOX DIGITAL offers professional image post-production services including background removal, clipping path, ghost mannequin, beauty retouching and more. Trusted by 500+ global brands.",
  openGraph: {
    title: "BLACKFOX DIGITAL",
    description: "Expert Image Post-Processing Services: Clipping, Masking, Shadow, Beauty Retouch, Product Retouch, Ecommerce Retouching and more.",
    url: "https://theblackfoxstudio.com/",
    siteName: "BLACKFOX DIGITAL",
    type: "website",
    images: [
      {
        url: "/hero-2.jpg",
        width: 1920,
        height: 1168,
        alt: "BLACKFOX DIGITAL — Professional Image Post-Production Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@blackfoxdigital",
    title: "BLACKFOX DIGITAL",
    description: "Expert Image Post-Processing Services: Clipping, Masking, Shadow, Beauty Retouch, Product Retouch, Ecommerce Retouching and more.",
    creator: "@blackfoxdigital",
    images: {
      url: "/hero-2.jpg",
      alt: "BLACKFOX DIGITAL — Professional Image Post-Production Studio",
    },
  },
};

export default function SiteLayout({ children }) {
  const dbServices = mockServices;
  const dbSettings = mockSettings;

  return (
    <div className={cn("flex flex-col min-h-screen", getFontFamily("roboto"))}>
      <OrganizationJsonLd
        useAppDir
        type="Corporation"
        id="https://theblackfoxstudio.com"
        logo="https://theblackfoxstudio.com/logo.png"
        legalName="BLACKFOX DIGITAL"
        name="BLACKFOX DIGITAL"
        address={{
          streetAddress: "House 560, Road 08, Adabor",
          addressLocality: "Dhaka",
          postalCode: "1207",
          addressCountry: "BD",
        }}
        contactPoint={[
          {
            telephone: "(+88) 019 24 482 868",
            contactType: "Customer Service",
            email: "info@theblackfoxstudio.com",
            availableLanguage: ["English"],
          },
        ]}
        sameAs={[
          "https://www.facebook.com/theblackfoxstudio/",
          "https://bd.linkedin.com/company/the-black-fox-studio",
        ]}
        url="https://theblackfoxstudio.com"
      />
      <Toaster />
      <Header dbServices={dbServices} dbSettings={dbSettings} />
      <main className="flex-1 mt-0">
        {children}
      </main>
      <Footer dbSettings={dbSettings} />
      <SpeedInsights />
      <Script
        defer
        data-domain="theblackfoxstudio.com"
        src="https://self-project-plausible.56ldyw.easypanel.host/js/script.js"
      />
    </div>
  );
}
