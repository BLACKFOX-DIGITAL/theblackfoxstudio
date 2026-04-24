import ContactInfoClient from "./ContactInfoClient";

export const metadata = {
  title: "Contact BLACKFOX DIGITAL — Image Post-Production Services",
  description: "Get a quote for professional image post-production. Ask about bulk pricing or start your 10-image free trial. We reply in 2 hours, 24/7.",
  alternates: { canonical: "https://theblackfoxstudio.com/contact" },
  openGraph: {
    title: "Contact BLACKFOX DIGITAL — Image Post-Production Services",
    description: "Connect with our 24/7 production lab for professional image editing and retouching. We reply within 2 hours.",
    url: "https://theblackfoxstudio.com/contact",
    type: "website",
  },
};

export default function ContactInfoPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact BLACKFOX DIGITAL",
    "description": "Contact page for BLACKFOX DIGITAL image editing services",
    "url": "https://theblackfoxstudio.com/contact",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BLACKFOX DIGITAL",
    "description": "Professional image post-production outsourcing — background removal, clipping path, ghost mannequin, beauty retouching, and 20+ specialized editing services.",
    "url": "https://theblackfoxstudio.com",
    "telephone": "+8801924482868",
    "email": "info@theblackfoxstudio.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House 560, Road 08, Adabor",
      "addressLocality": "Dhaka",
      "postalCode": "1207",
      "addressCountry": "BD",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
    "priceRange": "$$",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly do you reply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We reply within 2 hours, 24 hours a day, 7 days a week.",
        },
      },
      {
        "@type": "Question",
        "name": "What file formats do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept JPG, PNG, PSD, TIFF, RAW and most common formats. Files can be transferred via FTP, Dropbox or WeTransfer.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you offer bulk pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Orders of 1,000+ images receive a 20% discount automatically. Enterprise clients can also negotiate custom SLA pricing.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ContactInfoClient />
    </>
  );
}
