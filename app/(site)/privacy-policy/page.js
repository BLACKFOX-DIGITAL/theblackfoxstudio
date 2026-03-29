import React from "react";
import Link from "next/link";
import { ShieldCheck, Eye, Lock, Users, FileText, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy – Blackfox Digital",
  description: "Read the Privacy Policy of Blackfox Digital. Understand how we collect, use, and protect your personal data.",
  openGraph: {
    images: ["/logo.png"],
  },
};

const Section = ({ id, icon, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 rounded-xl bg-[#EE3A39]/10 text-[#EE3A39] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <h2 className="text-xl font-extrabold text-[#011] tracking-tight">{title}</h2>
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

export default function PrivacyPolicyPage() {
  const lastUpdated = "23 March 2026";

  const toc = [
    { id: "information-we-collect", label: "Information We Collect" },
    { id: "how-we-use-data", label: "How We Use Your Data" },
    { id: "data-sharing", label: "Data Sharing & Disclosure" },
    { id: "data-retention", label: "Data Retention" },
    { id: "your-rights", label: "Your Rights" },
    { id: "cookies", label: "Cookies & Tracking" },
    { id: "security", label: "Data Security" },
    { id: "third-party", label: "Third-Party Services" },
    { id: "children", label: "Children's Privacy" },
    { id: "changes", label: "Changes to This Policy" },
    { id: "contact", label: "Contact Us" },
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
            Privacy Policy
          </h1>
          <p className="text-lg text-[#626262] mb-4 font-medium">
            This policy describes how <strong className="text-[#011]">Blackfox Digital</strong> ("we", "us", or "our") collects, uses, and protects your personal information when you use our website and services.
          </p>
          <p className="text-sm text-gray-400">
            Last updated: <span className="font-semibold text-[#626262]">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Main Layout: TOC + Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sticky Table of Contents */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sticky top-32">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#626262] mb-4">Contents</p>
              <nav className="flex flex-col gap-1">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm text-[#626262] hover:text-[#EE3A39] py-1.5 border-l-2 border-gray-100 hover:border-[#EE3A39] pl-3 transition-all font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy Content */}
          <main className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-12">

            {/* Intro */}
            <div className="p-6 bg-[#EE3A39]/5 border border-[#EE3A39]/15 rounded-2xl text-sm text-[#626262] leading-relaxed">
              By accessing or using the website at{" "}
              <a href="https://theblackfoxstudio.com/" className="text-[#EE3A39] hover:underline font-semibold">
                theblackfoxstudio.com
              </a>{" "}
              or engaging with our image post-production services, you agree to the terms set out in this Privacy Policy. Please read it carefully. If you do not agree, you should not use our website or services.
            </div>

            <Section id="information-we-collect" icon={<FileText size={18} />} title="Information We Collect">
              <p>We collect information you voluntarily provide and data generated automatically when you use our website.</p>
              <p className="font-semibold text-[#011] pt-1">Information you provide:</p>
              <ul className="space-y-1.5 mt-1">
                <Bullet>Full name, business name, and email address (via contact and free trial forms)</Bullet>
                <Bullet>Phone number, company website, and file-sharing links</Bullet>
                <Bullet>Image files and creative assets submitted for editing</Bullet>
                <Bullet>Messages, project briefs, and instructions submitted through our website</Bullet>
              </ul>
              <p className="font-semibold text-[#011] pt-3">Automatically collected data:</p>
              <ul className="space-y-1.5 mt-1">
                <Bullet>IP address, browser type, operating system, and device information</Bullet>
                <Bullet>Pages visited, session duration, and referral source</Bullet>
                <Bullet>Cookie identifiers and usage analytics data</Bullet>
              </ul>
            </Section>

            <hr className="border-gray-100" />

            <Section id="how-we-use-data" icon={<Eye size={18} />} title="How We Use Your Data">
              <p>Blackfox Digital uses your data solely for legitimate business and operational purposes:</p>
              <ul className="space-y-1.5 mt-2">
                <Bullet>To respond to your enquiries, free trial requests, and project briefs</Bullet>
                <Bullet>To deliver and improve our image post-production services</Bullet>
                <Bullet>To process payments and issue invoices</Bullet>
                <Bullet>To send project updates and service communications</Bullet>
                <Bullet>To analyze website traffic and improve user experience</Bullet>
                <Bullet>To comply with legal obligations and respond to lawful requests</Bullet>
              </ul>
              <p className="mt-3">We do <strong className="text-[#011]">not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.</p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="data-sharing" icon={<Users size={18} />} title="Data Sharing & Disclosure">
              <p>We may share your information only in the following limited circumstances:</p>
              <ul className="space-y-1.5 mt-2">
                <Bullet><strong className="text-[#011]">Service Providers:</strong> Trusted third-party partners who assist in operating our website or delivering services (e.g. cloud storage, payment processors, communication tools), bound by confidentiality obligations.</Bullet>
                <Bullet><strong className="text-[#011]">Legal Requirements:</strong> If required by law, court order, or government authority, we may disclose data in compliance with that obligation.</Bullet>
                <Bullet><strong className="text-[#011]">Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your data may be transferred as part of that transaction. You will be notified beforehand.</Bullet>
              </ul>
            </Section>

            <hr className="border-gray-100" />

            <Section id="data-retention" icon={<Lock size={18} />} title="Data Retention">
              <p>We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy:</p>
              <ul className="space-y-1.5 mt-2">
                <Bullet>Client data and project files are retained for the duration of our business relationship and up to 3 years following its conclusion, for archival and legal purposes.</Bullet>
                <Bullet>Free trial submissions and general enquiries are retained for up to 12 months.</Bullet>
                <Bullet>Analytics and usage data is retained in aggregated, anonymized form.</Bullet>
              </ul>
              <p className="mt-3">Once data is no longer required, it is securely deleted or anonymized.</p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="your-rights" icon={<ShieldCheck size={18} />} title="Your Rights">
              <p>Depending on your jurisdiction (including the EU/EEA under GDPR), you may have the following rights regarding your personal data:</p>
              <ul className="space-y-1.5 mt-2">
                <Bullet><strong className="text-[#011]">Right of Access:</strong> Request a copy of the personal data we hold about you.</Bullet>
                <Bullet><strong className="text-[#011]">Right to Rectification:</strong> Ask us to correct inaccurate or incomplete data.</Bullet>
                <Bullet><strong className="text-[#011]">Right to Erasure:</strong> Request deletion of your data where it is no longer necessary.</Bullet>
                <Bullet><strong className="text-[#011]">Right to Restrict Processing:</strong> Ask us to stop using your data in certain ways.</Bullet>
                <Bullet><strong className="text-[#011]">Right to Data Portability:</strong> Receive your data in a commonly used, machine-readable format.</Bullet>
                <Bullet><strong className="text-[#011]">Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing.</Bullet>
                <Bullet><strong className="text-[#011]">Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time.</Bullet>
              </ul>
              <p className="mt-3">To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@theblackfoxstudio.com" className="text-[#EE3A39] hover:underline font-medium">
                  info@theblackfoxstudio.com
                </a>. We will respond within 30 days.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="cookies" icon={<Eye size={18} />} title="Cookies & Tracking Technologies">
              <p>Our website uses cookies and similar tracking technologies to enhance your experience and analyze website traffic.</p>
              <p className="font-semibold text-[#011] pt-2">Types of cookies we use:</p>
              <ul className="space-y-1.5 mt-1">
                <Bullet><strong className="text-[#011]">Essential Cookies:</strong> Required for the website to function correctly. Cannot be disabled.</Bullet>
                <Bullet><strong className="text-[#011]">Analytics Cookies:</strong> Used via Google Analytics to understand how visitors interact with our site. All data is anonymized.</Bullet>
                <Bullet><strong className="text-[#011]">Preference Cookies:</strong> Store your settings and preferences between visits.</Bullet>
              </ul>
              <p className="mt-3">You can manage cookie preferences through your browser settings or via our Cookie Policy page. Disabling certain cookies may affect site functionality.</p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="security" icon={<Lock size={18} />} title="Data Security">
              <p>Blackfox Digital implements industry-standard technical and organizational security measures to protect your personal data against unauthorized access, disclosure, modification, or destruction. These include:</p>
              <ul className="space-y-1.5 mt-2">
                <Bullet>HTTPS encryption on all website pages and data transfers</Bullet>
                <Bullet>Strict access controls limiting data access to authorized personnel only</Bullet>
                <Bullet>Secure, encrypted file storage for all submitted image assets</Bullet>
                <Bullet>Regular security audits and system monitoring</Bullet>
              </ul>
              <p className="mt-3">Despite these measures, no method of transmission over the internet is 100% secure. If you suspect a security breach affecting your data, please contact us immediately.</p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="third-party" icon={<Users size={18} />} title="Third-Party Services">
              <p>Our website integrates with the following third-party services which may independently process your data. We encourage you to review their privacy policies:</p>
              <ul className="space-y-1.5 mt-2">
                <Bullet><strong className="text-[#011]">Google Analytics</strong> – Website traffic analysis. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#EE3A39] hover:underline">Privacy Policy</a></Bullet>
                <Bullet><strong className="text-[#011]">Google Fonts</strong> – Web typography rendering. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#EE3A39] hover:underline">Privacy Policy</a></Bullet>
                <Bullet><strong className="text-[#011]">Tawk.to</strong> – Live chat support platform. <a href="https://www.tawk.to/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#EE3A39] hover:underline">Privacy Policy</a></Bullet>
                <Bullet><strong className="text-[#011]">Vercel</strong> – Website hosting and performance analytics. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#EE3A39] hover:underline">Privacy Policy</a></Bullet>
              </ul>
            </Section>

            <hr className="border-gray-100" />

            <Section id="children" icon={<Users size={18} />} title="Children's Privacy">
              <p>Our website and services are not directed at individuals under the age of <strong className="text-[#011]">16 years</strong>. We do not knowingly collect personal data from children. If you believe a child has provided us with personal information, please contact us immediately and we will take steps to delete the data.</p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="changes" icon={<FileText size={18} />} title="Changes to This Policy">
              <p>Blackfox Digital reserves the right to update this Privacy Policy at any time. When we make significant changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify you via email or a prominent notice on the website.</p>
              <p className="mt-2">We encourage you to review this policy periodically for the latest information on our privacy practices. Continued use of our services following any changes constitutes acceptance of the revised policy.</p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="contact" icon={<Mail size={18} />} title="Contact Us">
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact us:</p>
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
              <p className="mt-4">
                You also have the right to lodge a complaint with your local data protection authority if you believe your rights have been infringed. For EU residents, this is typically the supervisory authority in your country of residence.
              </p>
            </Section>

          </main>

        </div>
      </div>

    </div>
  );
}
