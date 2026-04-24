export const metadata = {
  title: "FAQ — Frequently Asked Questions | BLACKFOX DIGITAL",
  description:
    "Find answers to common questions about BLACKFOX DIGITAL's image retouching services: turnaround times, file formats, revisions, pricing, and data security.",
  alternates: { canonical: "https://theblackfoxstudio.com/faq" },
  openGraph: {
    title: "FAQ | BLACKFOX DIGITAL",
    description:
      "Common questions about retouching services, delivery times, pricing, and data security at BLACKFOX DIGITAL.",
    url: "https://theblackfoxstudio.com/faq",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How can I make a comment about the service I received at BLACKFOX DIGITAL?", "acceptedAnswer": { "@type": "Answer", "text": "We always welcome your feedback — whether you found the service helpful and exceptional, or whether it fell short of your expectations. Please contact us and we will respond as soon as possible." } },
    { "@type": "Question", "name": "Is there a limit on the number of images I can submit?", "acceptedAnswer": { "@type": "Answer", "text": "No. You are free to submit as many images as you like. For test/trial jobs, we will complete up to 10 images. Once the results are approved and an agreement has been made, we proceed with the full batch." } },
    { "@type": "Question", "name": "What kind of images do you retouch?", "acceptedAnswer": { "@type": "Answer", "text": "We provide professional post-production for a wide variety including: Beauty Retouch, Ghost Mannequin, Jewelry Retouch, Product Retouch, Flat Clothing Retouch, Model Retouch, Clipping Path & Background Removal, Image Masking, Shadow Creation, and Reflection Effects." } },
    { "@type": "Question", "name": "What is your standard delivery time?", "acceptedAnswer": { "@type": "Answer", "text": "Our standard delivery time for most jobs is 24 hours. This depends on the volume of images and the complexity of retouching required." } },
    { "@type": "Question", "name": "Do you offer priority/rush delivery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer priority delivery options (8-hour and 12-hour turnarounds). Rush delivery is charged at an additional 50%–75% of the standard order cost." } },
    { "@type": "Question", "name": "How do you guarantee my photos will be safe?", "acceptedAnswer": { "@type": "Answer", "text": "All images submitted to BLACKFOX DIGITAL are covered by a strict non-disclosure agreement. Our servers use encryption to ensure no data is leaked. All client images are securely deleted within one week of full payment being received." } },
    { "@type": "Question", "name": "Do I have to pay for revisions?", "acceptedAnswer": { "@type": "Answer", "text": "If the delivered images do not match the original specifications you provided, revisions are completed at no additional charge. We stand behind our quality guarantee." } },
    { "@type": "Question", "name": "Is there a volume discount system?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer tiered volume discounts: 10% for 101–500 images/month, 15% for 501–1,000, and 20% for 1,000+ images/month." } },
    { "@type": "Question", "name": "Do you work on RAW images?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we work on RAW files (CR2, NEF, ARW, DNG, etc.). Working from RAW gives us significantly more editing latitude for color correction, exposure, and skin retouching." } },
    { "@type": "Question", "name": "How do I send images to you?", "acceptedAnswer": { "@type": "Answer", "text": "You can share files via direct upload through our client portal, FTP, Dropbox, Google Drive, WeTransfer, or any other file sharing platform." } },
    { "@type": "Question", "name": "How do I get in touch if I have more questions?", "acceptedAnswer": { "@type": "Answer", "text": "You can reach us at any time via email at info@theblackfoxstudio.com, through our website contact form, or by calling (+88) 019 24 482 868. We aim to respond within a few hours." } },
  ],
};

export default function FaqLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
