import ContactInfoClient from "./ContactInfoClient";

export const metadata = {
  title: "Contact Blackfox Digital — Image Post-Production Services",
  description: "Contact Blackfox Digital for professional image post-production services. Get a quote, ask about bulk pricing or start your free trial. We reply within 2 hours, 24/7.",
  openGraph: {
    title: "Contact Blackfox Digital — Image Post-Production Services",
    description: "Connect with our 24/7 production lab for professional image editing and retouching. We reply within 2 hours.",
    images: ["/logo.png"],
  },
};

export default function ContactInfoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Blackfox Digital",
    "description": "Contact page for Blackfox Digital image editing services",
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
