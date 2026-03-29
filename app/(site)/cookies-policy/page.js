import React from "react";
import Link from "next/link";
import { Cookie, Settings, BarChart2, Shield, Eye, Mail } from "lucide-react";

export const metadata = {
  title: "Cookie Policy – BLACKFOX DIGITAL",
  description: "Learn how BLACKFOX DIGITAL uses cookies and similar tracking technologies on our website.",
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

const CookieTable = ({ rows }) => (
  <div className="overflow-x-auto mt-3 rounded-xl border border-gray-100">
    <table className="w-full text-xs">
      <thead className="bg-[#F8F8F8] border-b border-gray-100">
        <tr>
          <th className="text-left px-4 py-3 font-extrabold text-[#011] uppercase tracking-wider">Cookie Name</th>
          <th className="text-left px-4 py-3 font-extrabold text-[#011] uppercase tracking-wider">Provider</th>
          <th className="text-left px-4 py-3 font-extrabold text-[#011] uppercase tracking-wider">Purpose</th>
          <th className="text-left px-4 py-3 font-extrabold text-[#011] uppercase tracking-wider">Expiry</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-[#F8F8F8] transition-colors">
            <td className="px-4 py-3 font-mono text-[#EE3A39] font-semibold whitespace-nowrap">{row.name}</td>
            <td className="px-4 py-3 text-[#626262]">{row.provider}</td>
            <td className="px-4 py-3 text-[#626262]">{row.purpose}</td>
            <td className="px-4 py-3 text-[#626262] whitespace-nowrap">{row.expiry}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const BrowserLink = ({ name, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-[#EE3A39] hover:underline font-medium"
  >
    {name} →
  </a>
);

export default function CookiePolicyPage() {
  const lastUpdated = "23 March 2026";

  const toc = [
    { id: "what-are-cookies", label: "1. What Are Cookies?" },
    { id: "how-we-use", label: "2. How We Use Cookies" },
    { id: "essential", label: "3. Essential Cookies" },
    { id: "analytics", label: "4. Analytics Cookies" },
    { id: "preference", label: "5. Preference Cookies" },
    { id: "third-party", label: "6. Third-Party Services" },
    { id: "managing", label: "7. Managing Cookies" },
    { id: "updates", label: "8. Policy Updates" },
    { id: "contact", label: "9. Contact Us" },
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
            Cookie Policy
          </h1>
          <p className="text-lg text-[#626262] mb-4 font-medium">
            This Cookie Policy explains how <strong className="text-[#011]">BLACKFOX DIGITAL</strong> uses cookies and similar tracking technologies when you visit our website at{" "}
            <a href="https://theblackfoxstudio.com/" className="text-[#EE3A39] hover:underline font-semibold">theblackfoxstudio.com</a>.
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

              <div className="mt-8 pt-6 border-t border-gray-100 space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#626262] mb-3">Related</p>
                <Link href="/privacy-policy" className="flex items-center gap-2 text-xs text-[#626262] hover:text-[#EE3A39] transition-colors font-medium py-1">
                  → Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="flex items-center gap-2 text-xs text-[#626262] hover:text-[#EE3A39] transition-colors font-medium py-1">
                  → Terms & Conditions
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-12">

            {/* Intro Banner */}
            <div className="p-6 bg-[#EE3A39]/5 border border-[#EE3A39]/15 rounded-2xl text-sm text-[#626262] leading-relaxed">
              By continuing to use our website, you consent to the use of cookies as described in this policy. You may withdraw your consent at any time by adjusting your browser settings or using the opt-out mechanisms described below.
            </div>

            <Section id="what-are-cookies" icon={<Cookie size={18} />} number="1" title="What Are Cookies?">
              <p>
                Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, remember your preferences, and provide information to website owners.
              </p>
              <p>
                Cookies cannot run programs or deliver viruses. They are uniquely assigned to your device and can only be read by the web server that set them.
              </p>
              <p className="font-semibold text-[#011] pt-1">There are two main types:</p>
              <ul className="space-y-2 mt-1">
                <Bullet><strong className="text-[#011]">Session Cookies:</strong> Temporary cookies that expire when you close your browser. Used to maintain your session while browsing.</Bullet>
                <Bullet><strong className="text-[#011]">Persistent Cookies:</strong> Remain stored on your device for a set period — or until deleted manually — and are re-activated each time you visit the site that set them.</Bullet>
              </ul>
            </Section>

            <hr className="border-gray-100" />

            <Section id="how-we-use" icon={<Eye size={18} />} number="2" title="How We Use Cookies">
              <p>BLACKFOX DIGITAL uses cookies and similar local storage technologies for the following purposes:</p>
              <ul className="space-y-2 mt-2">
                <Bullet>To ensure the website functions correctly and securely</Bullet>
                <Bullet>To remember your preferences and settings between visits</Bullet>
                <Bullet>To analyze how visitors use our website — anonymously and in aggregate</Bullet>
                <Bullet>To improve site performance and user experience</Bullet>
                <Bullet>To understand where traffic comes from and which pages are most popular</Bullet>
              </ul>
              <p className="mt-3">
                We do <strong className="text-[#011]">not</strong> use cookies to serve targeted advertising, and we do not sell your data to any third party.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="essential" icon={<Shield size={18} />} number="3" title="Essential / Strictly Necessary Cookies">
              <p>
                These cookies are required for the website to function correctly. They enable core features like session management and security. They cannot be disabled without impairing site functionality.
              </p>
              <CookieTable rows={[
                { name: "__csrf_token", provider: "BLACKFOX DIGITAL", purpose: "Protects contact and enquiry forms against cross-site request forgery (CSRF) attacks", expiry: "Session" },
                { name: "lang_code", provider: "BLACKFOX DIGITAL", purpose: "Stores your preferred language setting", expiry: "1 year" },
              ]} />
            </Section>

            <hr className="border-gray-100" />

            <Section id="analytics" icon={<BarChart2 size={18} />} number="4" title="Analytics Cookies">
              <p>
                We use privacy-friendly analytics tools to understand how visitors interact with our website — which pages are most popular, how long users stay, and where they arrive from. This helps us improve the site over time.
              </p>
              <p>
                Unlike traditional analytics platforms, our analytics tools are designed with privacy in mind: <strong className="text-[#011]">no personal data is collected</strong>, <strong className="text-[#011]">no cross-site tracking</strong>, and <strong className="text-[#011]">no cookies are shared with third-party ad networks</strong>.
              </p>

              <div className="bg-[#F8F8F8] rounded-2xl p-5 border border-gray-100 mt-4">
                <p className="font-extrabold text-[#011] mb-2">📊 Plausible Analytics (Self-hosted)</p>
                <p>
                  We use a self-hosted instance of{" "}
                  <a href="https://plausible.io" target="_blank" rel="noopener noreferrer" className="text-[#EE3A39] hover:underline font-medium">Plausible Analytics</a>
                  {" "}— an open-source, GDPR-compliant analytics tool. Plausible does not use cookies and does not collect personally identifiable information. All data is aggregated and stored on our own infrastructure.
                </p>
                <div className="mt-3 p-4 bg-green-50 border border-green-100 rounded-xl text-green-700 text-xs font-medium">
                  ✅ Cookie-free — Plausible Analytics does not set any cookies on your device.
                </div>
                <p className="mt-3 text-xs">
                  Learn more:{" "}
                  <a href="https://plausible.io/privacy-focused-web-analytics" target="_blank" rel="noopener noreferrer" className="text-[#EE3A39] hover:underline font-medium">
                    How Plausible respects your privacy →
                  </a>
                </p>
              </div>

              <div className="bg-[#F8F8F8] rounded-2xl p-5 border border-gray-100 mt-4">
                <p className="font-extrabold text-[#011] mb-2">⚡ Vercel Speed Insights</p>
                <p>
                  Our website is hosted on Vercel. We use Vercel Speed Insights to monitor real-world performance metrics (Core Web Vitals). This tool collects anonymized performance data to help us optimize page load times and user experience.
                </p>
                <CookieTable rows={[
                  { name: "va-*", provider: "Vercel", purpose: "Tracks anonymized performance metrics (Core Web Vitals)", expiry: "Session" },
                ]} />
                <p className="mt-3 text-xs">
                  Learn more:{" "}
                  <a href="https://vercel.com/docs/speed-insights/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#EE3A39] hover:underline font-medium">
                    Vercel Speed Insights Privacy →
                  </a>
                </p>
              </div>
            </Section>

            <hr className="border-gray-100" />

            <Section id="preference" icon={<Settings size={18} />} number="5" title="Preference / Functional Cookies">
              <p>
                These cookies enable the website to remember choices you make — such as your language preference — to provide a more personalized experience between visits.
              </p>
              <CookieTable rows={[
                { name: "lang_id", provider: "BLACKFOX DIGITAL", purpose: "Stores your preferred language/locale for the site", expiry: "1 year" },
                { name: "cookie_consent", provider: "BLACKFOX DIGITAL", purpose: "Records your cookie consent choice so we don't ask again", expiry: "1 year" },
              ]} />
            </Section>

            <hr className="border-gray-100" />

            <Section id="third-party" icon={<Eye size={18} />} number="6" title="Third-Party Services">
              <p>
                Our website uses a small number of external services. These are listed below along with any cookies or storage they may set. We do not integrate any advertising or social media tracking cookies.
              </p>

              <div className="bg-[#F8F8F8] rounded-2xl p-5 border border-gray-100 mt-4">
                <p className="font-extrabold text-[#011] mb-2">🔤 Google Fonts</p>
                <p>
                  We use Google Fonts (loaded via <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">next/font/google</code>) to render our website typography. Next.js automatically downloads and self-hosts font files at build time, which means <strong className="text-[#011]">no requests are made to Google servers at runtime</strong> and no Google cookies are set on your device.
                </p>
                <div className="mt-3 p-4 bg-green-50 border border-green-100 rounded-xl text-green-700 text-xs font-medium">
                  ✅ Cookie-free — fonts are self-hosted. Google does not receive any requests from your browser.
                </div>
              </div>

              <div className="bg-[#F8F8F8] rounded-2xl p-5 border border-gray-100 mt-4">
                <p className="font-extrabold text-[#011] mb-2">🗺️ Google Maps (Contact Page)</p>
                <p>
                  Our contact page embeds a Google Maps iframe to display our office location. When this iframe is loaded, Google may set cookies on your device to track map interactions.
                </p>
                <CookieTable rows={[
                  { name: "NID, CONSENT, SOCS", provider: "Google Maps", purpose: "Map personalization, user preferences, and consent management", expiry: "Up to 2 years" },
                ]} />
                <p className="mt-3 text-xs">
                  Learn more:{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#EE3A39] hover:underline font-medium">
                    Google Privacy Policy →
                  </a>
                </p>
              </div>
            </Section>

            <hr className="border-gray-100" />

            <Section id="managing" icon={<Settings size={18} />} number="7" title="Managing & Disabling Cookies">
              <p>
                You have the right to accept or reject cookies (other than strictly essential ones). You can manage cookie settings directly through your browser. Note that disabling certain cookies may affect the functionality of this website.
              </p>

              <p className="font-semibold text-[#011] pt-2">Cookie settings in popular browsers:</p>
              <ul className="space-y-2 mt-2">
                <Bullet>
                  <BrowserLink name="Google Chrome" href="https://support.google.com/chrome/answer/95647" />
                </Bullet>
                <Bullet>
                  <BrowserLink name="Mozilla Firefox" href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" />
                </Bullet>
                <Bullet>
                  <BrowserLink name="Apple Safari" href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" />
                </Bullet>
                <Bullet>
                  <BrowserLink name="Microsoft Edge" href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" />
                </Bullet>
              </ul>
            </Section>

            <hr className="border-gray-100" />

            <Section id="updates" icon={<Cookie size={18} />} number="8" title="Updates to This Cookie Policy">
              <p>
                BLACKFOX DIGITAL may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our use of cookies. When we make significant updates, we will revise the "Last updated" date at the top of this page.
              </p>
              <p>
                We encourage you to check this page periodically to stay informed about how we use cookies.
              </p>
            </Section>

            <hr className="border-gray-100" />

            <Section id="contact" icon={<Mail size={18} />} number="9" title="Contact Us">
              <p>If you have any questions or concerns about this Cookie Policy, please contact us:</p>
              <div className="mt-4 bg-[#F8F8F8] rounded-2xl p-6 border border-gray-100 space-y-3 text-[#011]">
                <p className="font-extrabold text-lg">BLACKFOX DIGITAL</p>
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
