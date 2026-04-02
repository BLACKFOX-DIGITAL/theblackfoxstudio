import React from "react";
import Gallery from "@/components/Gallery";
import { services as dbServices, portfolio as dbPortfolio } from "@/lib/mock-data";

export const metadata = {
  title: "Portfolio — Before & After Image Editing Gallery | BLACKFOX DIGITAL",
  description: "Browse BLACKFOX DIGITAL's image editing portfolio. See real before and after results for background removal, ghost mannequin, beauty retouching and 20+ other services.",
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
    "name": "BLACKFOX DIGITAL Portfolio",
    "description": "Before and after image editing portfolio",
    "url": "https://theblackfoxstudio.com/portfolio"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Gallery data={galleryData} />
    </main>
  );
}
