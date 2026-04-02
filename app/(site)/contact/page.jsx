import ContactInfoClient from "./ContactInfoClient";

export const metadata = {
  title: "Contact BLACKFOX DIGITAL — Image Post-Production Services",
  description: "Contact BLACKFOX DIGITAL for professional image post-production services. Get a quote, ask about bulk pricing or start your free trial. We reply within 2 hours, 24/7.",
  alternates: { canonical: "https://theblackfoxstudio.com/contact" },
  openGraph: {
    title: "Contact BLACKFOX DIGITAL — Image Post-Production Services",
    description: "Connect with our 24/7 production lab for professional image editing and retouching. We reply within 2 hours.",
    url: "https://theblackfoxstudio.com/contact",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function ContactInfoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact BLACKFOX DIGITAL",
    "description": "Contact page for BLACKFOX DIGITAL image editing services",
    "url": "https://theblackfoxstudio.com/contact"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactInfoClient />
    </>
  );
}
