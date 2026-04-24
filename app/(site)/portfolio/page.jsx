import React from "react";
import Gallery from "@/components/Gallery";
import { services as dbServices, portfolio as dbPortfolio } from "@/lib/mock-data";

export const metadata = {
  title: "Portfolio — Before & After Image Editing Gallery | BLACKFOX DIGITAL",
  description: "Browse real before & after results for background removal, ghost mannequin, beauty retouching and 20+ professional image editing services. 500,000+ images edited.",
  alternates: { canonical: "https://theblackfoxstudio.com/portfolio" },
  openGraph: {
    title: "Before & After Image Editing Portfolio | BLACKFOX DIGITAL",
    description: "Real before and after results across 20+ services — background removal, ghost mannequin, beauty retouching, and more.",
    url: "https://theblackfoxstudio.com/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  // Transform the flat portfolio mock data into the structure expected by the Gallery component
  const galleryData = dbServices.map(service => {
    const categoryContent = dbPortfolio
      .filter(item => item.category === service.slug)
      .map(item => ({
        before: item.beforeImage,
        after: item.afterImage,
        title: item.title,
        serviceName: item.serviceName
      }));

    return {
      name: service.title,
      slug: service.slug,
      content: categoryContent
    };
  }).filter(cat => cat.content.length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "BLACKFOX DIGITAL — Before & After Image Editing Portfolio",
    "description": "Real before and after results from 500,000+ professionally edited images across 20+ service categories including background removal, ghost mannequin, beauty retouching, jewelry retouching, and e-commerce photo editing.",
    "url": "https://theblackfoxstudio.com/portfolio",
    "provider": {
      "@type": "Organization",
      "name": "BLACKFOX DIGITAL",
      "url": "https://theblackfoxstudio.com",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theblackfoxstudio.com" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://theblackfoxstudio.com/portfolio" },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Gallery data={galleryData} services={dbServices} />
    </main>
  );
}
