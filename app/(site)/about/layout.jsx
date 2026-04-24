export const metadata = {
  title: "About BLACKFOX DIGITAL — Outsource Photo Editing Studio, Dhaka",
  description: "BLACKFOX DIGITAL is a professional photo editing studio in Dhaka. 80+ expert editors, 5,000+ images/day. Trusted by 500+ global e-commerce brands since 2016.",
  alternates: { canonical: "https://theblackfoxstudio.com/about" },
  openGraph: {
    title: "About BLACKFOX DIGITAL — Professional Image Editing Studio",
    description: "Founded in 2016. 80+ expert editors. Trusted by 500+ global e-commerce brands for background removal, retouching, and image post-production.",
    url: "https://theblackfoxstudio.com/about",
    type: "website",
  },
};

export default function AboutLayout({ children }) {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About BLACKFOX DIGITAL",
    "description": "Professional image post-production studio in Dhaka, Bangladesh. 80+ specialist editors processing 5,000+ images daily for global e-commerce brands since 2016.",
    "url": "https://theblackfoxstudio.com/about",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BLACKFOX DIGITAL",
    "url": "https://theblackfoxstudio.com",
    "logo": "https://theblackfoxstudio.com/logo.png",
    "email": "info@theblackfoxstudio.com",
    "telephone": "+8801924482868",
    "foundingDate": "2016",
    "numberOfEmployees": "80",
    "description": "Professional image post-production studio helping global brands with high-volume photo editing and retouching. Background removal, clipping path, ghost mannequin, beauty retouching and 20+ specialized services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House 560, Road 08, Adabor",
      "addressLocality": "Dhaka",
      "postalCode": "1207",
      "addressCountry": "BD",
    },
    "areaServed": "Worldwide",
    "sameAs": [],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {children}
    </>
  );
}
