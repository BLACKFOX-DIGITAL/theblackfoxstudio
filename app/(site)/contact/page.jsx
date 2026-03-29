import ContactInfoClient from "./ContactInfoClient";

export const metadata = {
  title: "Contact Us | BLACKFOX DIGITAL",
  description: "Get in touch with BLACKFOX DIGITAL. Our team replies within 4 hours.",
  openGraph: {
    title: "Contact Us | BLACKFOX DIGITAL",
    description: "Get in touch with BLACKFOX DIGITAL. Specialists in Image Post-Production.",
    images: ["/logo.png"],
  },
};

export default function ContactInfoPage() {
  return <ContactInfoClient />;
}
