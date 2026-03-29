"use client";
import React from "react";
import Gallery from "@/components/Gallery";
import { services as dbServices, portfolio as dbPortfolio } from "@/lib/mock-data";

export default function PortfolioPage() {
  // Transform the flat portfolio mock data into the structure expected by the Gallery component
  const galleryData = dbServices.map(service => {
    const categoryContent = dbPortfolio
      .filter(item => item.category === service.slug)
      .map(item => ({
        before: item.beforeImage,
        after: item.afterImage,
        title: item.title
      }));

    return {
      name: service.title,
      slug: service.slug,
      content: categoryContent
    };
  }).filter(cat => cat.content.length > 0);

  return (
    <main>
      <Gallery data={galleryData} />
    </main>
  );
}
