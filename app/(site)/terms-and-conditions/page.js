import React from "react";
import Link from "next/link";
import { FileText, ShieldCheck, CreditCard, Clock, Scale, Users, AlertTriangle, Mail } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions – BLACKFOX DIGITAL",
  description: "Read the Terms and Conditions of BLACKFOX DIGITAL. Understand your rights and obligations when using our image post-production services.",
  openGraph: {
    images: ["/logo.png"],
  },
};

const Section = ({ id, icon, number, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-start gap-3 mb-5">
      <div className="w-10 h-10 rounded-xl bg-[#EE3A39]/10 text-[#EE3A39] flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <h2 className="text-xl font-extrabold text-[#011] tracking-tight leading-snug">
        <span className="text-[#EE3A39] mr-2">{number}.</span>{title}
      </h2>
    </div>
    <div className="text-[#626262] text-sm leading-relaxed space-y-3 pl-[52px]">
      {children}
    </div>
  </section>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-2">
    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EE3A39] shrink-0 inline-block" />
    <span>{children}</span>
  </li>
);

const SubSection = ({ title, children }) => (
  <div className="pt-2">
    <p className="font-extrabold text-[#011] mb-2">{title}</p>
    {children}
  </div>
);

export default function TermsPage() {
  const lastUpdated = "23 March 2026";

  const toc = [
    { id: "introduction", label: "1. Introduction & Acceptance" },
    { id: "changes", label: "2. Changes to Terms" },
    { id: "services", label: "3. Our Services" },
    { id: "site-use", label: "4. Use of the Site" },
    { id: "user-content", label: "5. User-Generated Content" },
    { id: "rights", label: "6. Rights You Grant Us" },
    { id: "ip", label: "7. Intellectual Property" },
    { id: "payments", label: "8. Payments & Refunds" },
    { id: "turnaround", label: "9. Quotes & Turnaround" },
    { id: "third-party", label: "10. Third-Party Applications" },
    { id: "termination", label: "11. Term & Termination" },
    { id: "warranty", label: "12. Warranty & Disclaimer" },
    { id: "liability", label: "13. Limitation of Liability" },
    { id: "indemnification", label: "14. Indemnification" },
    { id: "governing-law", label: "15. Governing Law" },
    { id: "general", label: "16. General Provisions" },
    { id: "contact", label: "17. Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#011] pb-24">

      {/* Hero */}
      <section className="relative pt-32 pb-20 border-b border-gray-200 overflow-hidden bg-white">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/8 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-sm font-bold mb-6 uppercase tracking-widest shadow-sm">
            Legal
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tighter text-[#011] drop-shadow-sm leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-lg text-[#626262] mb-4 font-medium">
            These Terms and Conditions govern your use of the website and services provided by{" "}
            <strong className="text-[#011]">BLACKFOX DIGITAL</strong> ("we", "us", or "our"). Please read them carefully before using our services.
          </p>
          <p className="text-sm text-gray-400">
            Last updated: <span className="font-semibold text-[#626262]">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sticky TOC */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sticky top-32">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#626262] mb-4">Contents</p>
              <nav className="flex flex-col gap-0.5">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-xs text-[#626262] hover:text-[#EE3A39] py-1.5 border-l-2 border-gray-100 hover:border-[#EE3A39] pl-3 transition-all font-medium leading-snug"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Terms Content */}
          <main className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-12">

            {/* Acceptance Banner */}
            <div className="p-6 bg-[#EE3A39]/5 border border-[#EE3A39]/15 rounded-2xl text-sm text-[#626262] leading-relaxed">
              By accessing or using{" "}
              <a href="https://theblackfoxstudio.com/" className="text-[#EE3A39] hover:underline font-semibold">theblackfoxstudio.com</a>{" "}
              or engaging with our services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions and our{" "}
              <Link href="/privacy-policy" className="text-[#EE3A39] hover:underline font-semibold">Privacy Policy</Link>.
              If you do not agree, please do not use our website or services.
            </div>

            <Section id="introduction" icon={<FileText size={18} />} number="1" title="Introduction & Acceptance">
              <p>
                Welcome to <strong className="text-[#011]">BLACKFOX DIGITAL</strong> — a B2B image post-production company headquartered in Dhaka, Bangladesh, providing professional retouching, clipping path, masking, and related photo editing services to e-commerce brands, advertising agencies, and photographers worldwide.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you ("Client", "User", "you") and BLACKFOX DIGITAL. To use our services you must: (1) be 18 years of age or older; (2) have the legal authority to enter into binding contracts; and (3) not be barred from receiving our services under any applicable law.
              </p>
              <p>
                You also warrant that all information you provide to us is accurate, complete, and up to date.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="changes" icon={<FileText size={18} />} number="2" title="Changes to These Terms">
              <p>
                BLACKFOX DIGITAL reserves the right to revise these Terms at any time. We will indicate the date of the most recent update at the top of this page. Significant changes may also be communicated by email or via a notice on our website.
              </p>
              <p>
                Your continued use of the site or services after any changes constitutes acceptance of the revised Terms. We recommend reviewing this page periodically.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="services" icon={<ShieldCheck size={18} />} number="3" title="Our Services">
              <p>BLACKFOX DIGITAL provides B2B image post-production services including but not limited to:</p>
              <ul className="space-y-1.5 mt-2">
                <Bullet>Background removal and clipping path extraction</Bullet>
                <Bullet>Ghost mannequin / neck joint creation</Bullet>
                <Bullet>Image masking (hair, fur, complex objects)</Bullet>
                <Bullet>Product and beauty retouching</Bullet>
                <Bullet>Shadow and reflection creation</Bullet>
                <Bullet>Color correction and white balance adjustment</Bullet>
                <Bullet>Ecommerce image optimization (Amazon, Shopify, eBay, etc.)</Bullet>
              </ul>
              <p className="mt-3">
                Service availability, pricing, and turnaround times are subject to change. Current rates are available on our{" "}
                <Link href="/pricing" className="text-[#EE3A39] hover:underline font-medium">Pricing page</Link>.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="site-use" icon={<ShieldCheck size={18} />} number="4" title="Acceptable Use of the Site">
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <ul className="space-y-1.5 mt-2">
                <Bullet>Copying, redistributing, or reproducing any part of the site or its content without written permission</Bullet>
                <Bullet>Reverse-engineering, decompiling, or creating derivative works from our software or platform</Bullet>
                <Bullet>Using automated tools (bots, scrapers, spiders) to collect data from our website</Bullet>
                <Bullet>Circumventing any technology, access controls, or territorial restrictions</Bullet>
                <Bullet>Uploading files you do not have the legal right to reproduce or distribute</Bullet>
                <Bullet>Providing false or misleading registration information</Bullet>
                <Bullet>Attempting to gain unauthorized access to our systems or other users' accounts</Bullet>
                <Bullet>Selling, renting, or sublicensing your account or access rights to any third party</Bullet>
              </ul>
              <p className="mt-3">
                BLACKFOX DIGITAL reserves the right to suspend or terminate access for any violation of these guidelines without prior notice.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="user-content" icon={<Users size={18} />} number="5" title="User-Submitted Content">
              <p>
                By uploading images or files to BLACKFOX DIGITAL for editing, you confirm that:
              </p>
              <ul className="space-y-1.5 mt-2">
                <Bullet>You own or have the necessary rights and licenses to submit the content</Bullet>
                <Bullet>The content does not infringe any third-party intellectual property, privacy, or other rights</Bullet>
                <Bullet>The content does not contain illegal, harmful, or offensive material</Bullet>
              </ul>
              <p className="mt-3">
                You are solely responsible for all content you submit. BLACKFOX DIGITAL reserves the right to decline or remove any content that, in our sole discretion, violates these Terms or applicable law.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="rights" icon={<FileText size={18} />} number="6" title="Rights You Grant Us">
              <p>
                By submitting images for editing, you grant BLACKFOX DIGITAL a limited, non-exclusive, royalty-free license to access, process, and edit your files solely for the purpose of delivering the requested services.
              </p>
              <p>
                Unless you notify us in writing otherwise, you also grant us the right to display your edited images (without identifying information) in our portfolio and marketing materials as examples of our work. You may opt out of this at any time by contacting us.
              </p>
              <p>
                Any feedback or suggestions you provide may be used by us freely without compensation or obligation.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="ip" icon={<ShieldCheck size={18} />} number="7" title="Intellectual Property">
              <p>
                All content on this website — including text, graphics, logos, images, software, and compiled data — is the property of BLACKFOX DIGITAL or its content providers and is protected under the copyright and intellectual property laws of Bangladesh and applicable international treaties.
              </p>
              <p>You may:</p>
              <ul className="space-y-1.5 mt-1">
                <Bullet>Print or download site content for personal, non-commercial reference only</Bullet>
                <Bullet>Share content with attribution to BLACKFOX DIGITAL as its source</Bullet>
              </ul>
              <p className="mt-3">You may not:</p>
              <ul className="space-y-1.5 mt-1">
                <Bullet>Commercially exploit any content without our express written permission</Bullet>
                <Bullet>Remove or alter any copyright, trademark, or proprietary notices</Bullet>
                <Bullet>Frame or embed our content on other websites without permission</Bullet>
              </ul>
            </Section>

            <hr className="border-gray-100" />

            <Section id="payments" icon={<CreditCard size={18} />} number="8" title="Payments, Refunds & Pricing">
              <SubSection title="8.1 Payment Terms">
                <p>
                  Individual and new clients are required to pay in full before work commences. Corporate clients may be extended credit terms (typically net-30) at BLACKFOX DIGITAL's sole discretion, subject to satisfactory references and a signed service agreement. Monthly billing arrangements are available for high-volume clients.
                </p>
                <p className="mt-2">Accepted payment methods: PayPal, bank wire transfer, and major credit cards.</p>
              </SubSection>

              <SubSection title="8.2 Quality Guarantee & Revisions">
                <p>
                  We strive to deliver work that precisely matches your brief and approved sample. If you are not satisfied with delivered work, please submit a revision request within <strong className="text-[#011]">14 days of delivery</strong>. We will make reasonable corrections at no additional charge.
                </p>
                <p className="mt-2">
                  Refunds are not issued if: (a) the delivered images match an approved sample; (b) images have already been downloaded without a specific complaint raised; or (c) the revision request changes the original scope or requirements.
                </p>
              </SubSection>

              <SubSection title="8.3 Pricing & Changes">
                <p>
                  Prices are quoted on a per-image basis depending on complexity. BLACKFOX DIGITAL reserves the right to revise our pricing at any time. Clients will always be informed of the applicable rate before confirming any new order. Agreed project rates will not change mid-project.
                </p>
              </SubSection>

              <SubSection title="8.4 Promotions & Discounts">
                <p>
                  BLACKFOX DIGITAL may offer promotional pricing or discount codes from time to time. These are subject to specific terms and may be withdrawn at any time without prior notice.
                </p>
              </SubSection>
            </Section>

            <hr className="border-gray-100" />

            <Section id="turnaround" icon={<Clock size={18} />} number="9" title="Quotes, Orders & Turnaround Time">
              <p>
                Quotes are provided based on the complexity and volume of images described by the client. If submitted images materially differ from the sample provided at the quoting stage, BLACKFOX DIGITAL reserves the right to cancel the order and issue a revised quote.
              </p>
              <p className="mt-2">
                Turnaround time begins from the moment all images have been successfully uploaded and a project brief confirmed — not from the time the order is initially submitted. Rush delivery options (8–12 hours) are available at a premium rate, subject to capacity.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="third-party" icon={<Users size={18} />} number="10" title="Third-Party Applications">
              <p>
                Our website and services may integrate with third-party platforms including but not limited to payment processors, file transfer services, and communication tools. BLACKFOX DIGITAL is not responsible for the terms, policies, or actions of these third-party providers. Your use of such platforms is governed by their own terms and conditions.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="termination" icon={<AlertTriangle size={18} />} number="11" title="Term & Termination">
              <p>
                These Terms remain in effect for the duration of your use of our website and services. Either party may terminate the relationship at any time by providing written notice.
              </p>
              <p className="mt-2">
                BLACKFOX DIGITAL may immediately suspend or terminate your access in the event of: (a) breach of these Terms; (b) fraudulent or illegal activity; (c) non-payment of outstanding invoices; or (d) conduct harmful to BLACKFOX DIGITAL or other clients.
              </p>
              <p className="mt-2">
                Termination does not entitle you to a refund for work already in progress or delivered. Obligations relating to payment, intellectual property, and indemnification survive termination.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="warranty" icon={<AlertTriangle size={18} />} number="12" title="Warranty & Disclaimer">
              <p>
                BLACKFOX DIGITAL provides its services "as is" and "as available". While we endeavour to maintain the highest quality standards, to the fullest extent permitted by applicable law, we disclaim all warranties — express or implied — including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="mt-2">
                We make no representations that the website or services will be uninterrupted, error-free, or free of malicious components. We are not responsible or liable for the content of third-party applications or websites linked to or from our site.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="liability" icon={<Scale size={18} />} number="13" title="Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable law, BLACKFOX DIGITAL, its officers, directors, employees, and affiliates shall not be liable for any indirect, incidental, special, punitive, or consequential damages — including loss of profits, data, or goodwill — arising out of or in connection with your use of our services.
              </p>
              <p className="mt-2">
                Our maximum aggregate liability to you for any claim arising under these Terms shall not exceed the total amounts paid by you to BLACKFOX DIGITAL in the twelve (12) months preceding the claim.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="indemnification" icon={<ShieldCheck size={18} />} number="14" title="Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless BLACKFOX DIGITAL and its employees, directors, and affiliates from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from: (1) your breach of these Terms; (2) content you submit to us; (3) your violation of any applicable law; or (4) your violation of any third-party rights.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="governing-law" icon={<Scale size={18} />} number="15" title="Governing Law & Dispute Resolution">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of <strong className="text-[#011]">Bangladesh</strong>. For clients based in the European Union or United Kingdom, applicable consumer protection laws in your jurisdiction may also apply.
              </p>
              <p className="mt-2">
                In the event of any dispute arising from these Terms, both parties agree to first attempt to resolve the matter amicably through good-faith negotiation. If a resolution cannot be reached within 30 days, disputes shall be submitted to the competent courts of Dhaka, Bangladesh.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="general" icon={<FileText size={18} />} number="16" title="General Provisions">
              <SubSection title="Entire Agreement">
                <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and BLACKFOX DIGITAL and supersede all prior agreements and understandings relating to the subject matter herein.</p>
              </SubSection>
              <SubSection title="Severability">
                <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.</p>
              </SubSection>
              <SubSection title="Waiver">
                <p>Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>
              </SubSection>
              <SubSection title="Assignment">
                <p>BLACKFOX DIGITAL may assign these Terms or any part of them at any time. You may not assign, transfer, or sub-license your rights under these Terms without our prior written consent.</p>
              </SubSection>
            </Section>

            <hr className="border-gray-100" />

            <Section id="contact" icon={<Mail size={18} />} number="17" title="Contact Us">
              <p>If you have any questions about these Terms and Conditions, please contact us:</p>
              <div className="mt-4 bg-[#F8F8F8] rounded-2xl p-6 border border-gray-100 space-y-3 text-[#011]">
                <p className="font-extrabold text-lg">Blackfox Digital</p>
                <p>House 560, Road 08, Adabor, Dhaka 1207, Bangladesh</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@theblackfoxstudio.com" className="text-[#EE3A39] hover:underline font-medium">
                    info@theblackfoxstudio.com
                  </a>
                </p>
                <p>Phone: (+88) 019 24 482 868</p>
              </div>
            </Section>

          </main>
        </div>
      </div>

    </div>
  );
}
