import React from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Search, Mail } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions – Blackfox Digital",
  description: "Find answers to the most common questions about our image post-production process, turnaround times, file security, revisions, and pricing.",
  openGraph: {
    images: ["/logo.png"],
  },
};

const data = [
  {
    category: "Getting Started",
    question: "How can I make a comment about the service I received at Blackfox Digital?",
    answer: "We always welcome your feedback — whether you found the service helpful and exceptional, or whether it fell short of your expectations. Please contact us and we will respond as soon as possible.",
  },
  {
    category: "Getting Started",
    question: "Is there a limit on the number of images I can submit?",
    answer: "No. You are free to submit as many images as you like. For test/trial jobs, we will complete up to 10 images. Once the results are approved and an agreement has been made, we proceed with the full batch.",
  },
  {
    category: "Services",
    question: "What kind of images do you retouch?",
    answer: "We provide professional post-production for a wide variety of image types including: Beauty Retouch, Ghost Mannequin (Neck Joint), Jewelry Retouch, Product Retouch, Flat Clothing Retouch, Model Retouch, Clipping Path & Background Removal, Image Masking, Shadow Creation, and Reflection Effects. For more information please check our services page. We deliver high-quality results at scalable, competitive rates.",
  },
  {
    category: "Delivery",
    question: "What is your standard delivery time?",
    answer: "Our standard delivery time for most jobs is 24 hours. This depends on the volume of images and the complexity of retouching required. If you have a specific deadline, please mention it when submitting your order — we will do our best to accommodate your timeline.",
  },
  {
    category: "Delivery",
    question: "Do you offer priority/rush delivery?",
    answer: "Yes, we offer priority delivery options (8-hour and 12-hour turnarounds). Rush delivery is charged at an additional 50%–75% of the standard order cost, depending on the original turnaround agreed. Please note that availability may vary based on current workload — contact us before placing a rush order.",
  },
  {
    category: "Security",
    question: "How do you guarantee my photos will be safe?",
    answer: "All images submitted to Blackfox Digital are covered by a strict non-disclosure agreement. Our servers use encryption to ensure no data is leaked or accessed by unauthorized parties. As a standard policy, all client images are securely deleted within one week of full payment being received. Your files are safe with us.",
  },
  {
    category: "Revisions & Pricing",
    question: "Do I have to pay for revisions?",
    answer: "If the delivered images do not match the original specifications you provided, revisions are completed at no additional charge. We stand behind our quality guarantee. However, if revisions are requested due to changes in requirements from what was originally briefed, additional charges may apply.",
  },
  {
    category: "Revisions & Pricing",
    question: "Is there a volume discount system?",
    answer: "Yes. We offer tiered volume discounts for bulk orders. Discounts start at 10% for 101–500 images per month, 15% for 501–1,000, and 20% for 1,000+ images per month. Every arrangement is discussed during onboarding to ensure the best possible rate for your workflow. Contact us for a custom quote.",
  },
  {
    category: "Technical",
    question: "Do you work on RAW images?",
    answer: "Yes, we work on RAW files (CR2, NEF, ARW, DNG, etc.). Working from RAW gives us significantly more editing latitude — particularly for color correction, exposure, and skin retouching — resulting in a higher quality final output.",
  },
  {
    category: "Technical",
    question: "How do I send images to you?",
    answer: "You can share files via your preferred method: direct upload through our client portal, FTP, Dropbox, Google Drive, WeTransfer, or any other file sharing platform. We will work with whatever system best fits your existing workflow.",
  },
  {
    category: "Getting Started",
    question: "How do I get in touch if I have more questions?",
    answer: "You can reach us at any time via email at info@theblackfoxstudio.com, through our website contact form, or by calling (+88) 019 24 482 868. We aim to respond to all enquiries within a few hours during business hours.",
  },
];

const categories = [...new Set(data.map((q) => q.category))];

export default function FrequentlyAskedQuestionsPage() {
  const jsonLdData = data
    .filter((q) => typeof q.answer === "string")
    .map((q) => ({
      questionName: q.question,
      acceptedAnswerText: q.answer,
    }));

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#011] pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: jsonLdData.map((q) => ({
              "@type": "Question",
              name: q.questionName,
              acceptedAnswer: {
                "@type": "Answer",
                text: q.acceptedAnswerText,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 border-b border-gray-200 overflow-hidden bg-white">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-sm font-bold mb-6 uppercase tracking-widest shadow-sm">
            FAQ
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter text-[#011] drop-shadow-sm leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">
              Questions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#626262] leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
            Everything you need to know about working with us. Can&apos;t find
            your answer? Get in touch directly.
          </p>

          <div className="relative max-w-xl mx-auto group">
            <Search
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#EE3A39] transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              className="w-full bg-white border border-gray-200 rounded-full py-4 pl-14 pr-6 text-[#011] focus:outline-none focus:border-[#EE3A39] focus:ring-4 focus:ring-[#EE3A39]/10 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-sm font-medium"
            />
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-extrabold text-[#011] mb-6 flex items-center gap-4 uppercase tracking-widest">
                <span className="w-8 h-[3px] bg-[#EE3A39] inline-block rounded-full" />
                {category}
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {data
                  .filter((q) => q.category === category)
                  .map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`${category}-${idx}`}
                      className="bg-white border border-gray-100 rounded-2xl shadow-sm px-2 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left text-base font-bold text-[#011] hover:text-[#EE3A39] px-4 py-4 transition-colors hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#626262] text-sm leading-relaxed px-4 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-[#011] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#EE3A39]/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-2">
                Still have questions?
              </h2>
              <p className="text-gray-400 text-lg">
                Our team is available 24/7 to walk you through the process.
              </p>
            </div>
            <Link
              href="/contact-info"
              className="relative z-10 bg-[#EE3A39] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-colors flex items-center gap-3 whitespace-nowrap shadow-lg shrink-0"
            >
              <Mail size={20} /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
