import { services as mockServices } from '@/lib/mock-data';
import Link from 'next/link';
import { CheckCircle, Zap, Building2, Crown, Sparkles, AlertCircle } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export const metadata = {
  title: 'Bulk Photo Editing Pricing & Volume Discounts | BLACKFOX DIGITAL',
  description: 'Transparent photo editing pricing from $0.29/image. Background removal, retouching & more. Volume discounts up to 20% for agencies. No hidden fees.',
  alternates: { canonical: 'https://theblackfoxstudio.com/pricing' },
  openGraph: {
    title: 'Pricing & Volume Discounts | BLACKFOX DIGITAL',
    description: 'Transparent per-image pricing for professional photo editing. Background removal from $0.29. Volume discounts for 100+ images/month.',
    url: 'https://theblackfoxstudio.com/pricing',
    type: 'website',
  },
};

export default function PricingPage() {
  const serviceRates = mockServices.map(s => ({
    service: s.title,
    slug: s.slug,
    price: `$${s.priceStarting?.toFixed(2) || '0.29'}`,
    desc: s.shortDescription || 'Professional high-volume editing solution.'
  }));

  const packages = [
    {
      name: 'Starter',
      volume: 'Up to 100 images / month',
      icon: <CheckCircle className="text-[#EE3A39] w-8 h-8 mb-4" />,
      desc: 'Right for you if: you\'re testing a new supplier, running a small store, or have an occasional batch to clear.',
      features: ['Standard 24hr Turnaround', 'Basic Quality Assurance', 'Email Support', 'JPG/PNG Delivery']
    },
    {
      name: 'Business',
      volume: 'Up to 500 images / month',
      popular: true,
      icon: <Building2 className="text-white w-8 h-8 mb-4" />,
      desc: 'Right for you if: you run regular catalog drops, seasonal collections, or process 100–500 images consistently each month.',
      features: ['Priority 18hr Turnaround', 'Multi-level Quality Assurance', 'Dedicated Slack Channel', 'Any Format (PSD, TIFF)']
    },
    {
      name: 'Enterprise',
      volume: '1,000+ images / month',
      icon: <Crown className="text-[#EE3A39] w-8 h-8 mb-4" />,
      desc: 'Right for you if: you need a production infrastructure — high weekly volume, predictable SLA, white-label, or API integration.',
      features: ['Custom SLA (8-12hr Turnaround)', 'Dedicated Project Manager', 'API Integration', 'Custom Style Guidelines']
    }
  ];

  const faqs = [
    { question: 'How do volume discounts apply?', answer: 'Discounts are calculated based on your total monthly volume. As you cross pricing tiers, the new discounted rate applies to all images processed in that tier.' },
    { question: 'Are there any hidden setup fees?', answer: 'No. We believe in 100% transparent pricing. You only pay for the images we edit based on the agreed complexity rate.' },
    { question: 'How do I pay?', answer: 'Invoices are generated bi-weekly or monthly based on the actual number of images delivered. We accept Wire Transfers, Credit Cards, and PayPal.' },
    { question: 'What if an image requires multiple services?', answer: 'If an image needs background removal + high-end product retouching, we will provide a custom blended rate prior to execution so there are no surprises.' },
    { question: 'Can I test the quality before signing an SLA?', answer: 'Absolutely. We offer a 10-image free trial with zero obligations so you can verify our precision and turnaround time.' },
    { question: 'What happens if I\'m not happy with an edited image?', answer: 'We offer unlimited revisions on every order. If an image doesn\'t meet the standard we agreed on, we fix it at no extra cost. Our multi-tier QC means revision requests are rare — but the guarantee is always there.' },
    { question: 'Can you match my brand\'s specific editing style?', answer: 'Yes. During onboarding we document your brand guidelines — color tone, shadow style, background preference, skin retouching level, and more. All subsequent batches are edited to those documented standards for consistency across your entire catalog.' },
    { question: 'Is there a minimum order size?', answer: 'No minimum. You can submit a single image or 10,000 — we handle both. Volume discounts kick in automatically at 101 images/month, so there\'s no commitment required to benefit from lower rates as you grow.' }
  ];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const pricingLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Professional Photo Editing Services',
    'provider': {
      '@type': 'Organization',
      'name': 'BLACKFOX DIGITAL',
      'url': 'https://theblackfoxstudio.com',
    },
    'areaServed': 'Worldwide',
    'offers': mockServices.map(s => ({
      '@type': 'Offer',
      'name': s.title,
      'description': s.shortDescription || 'Professional high-volume editing solution.',
      'price': s.priceStarting?.toFixed(2) || '0.29',
      'priceCurrency': 'USD',
      'url': `https://theblackfoxstudio.com/services/${s.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#011] pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingLd) }} />

      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 border-b border-gray-200 overflow-hidden bg-white">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-sm font-bold mb-6 uppercase tracking-widest shadow-sm">
            Pricing
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter text-[#011] drop-shadow-sm leading-tight">
            Photo Editing Pricing — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">Per Image Rates & Volume Discounts</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-[#626262] leading-relaxed font-medium max-w-2xl mx-auto">
            Transparent, per-image rates that scale down as your volume scales up. Never pay for more than what you use.
          </p>
        </div>
      </section>

      {/* 2. CORE SERVICES PRICING TABLE */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-[#011]">Standard Rates</h2>
            <p className="text-[#626262] text-sm hidden sm:block">Per image pricing. Contact us for bulk deals.</p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {serviceRates.map((pkg, idx) => (
                <div key={idx} className="p-6 md:p-8 flex items-center justify-between hover:bg-[#F8F8F8] transition-colors group">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#011] mb-1 group-hover:text-[#EE3A39] transition-colors">
                      <Link href={`/services/${pkg.slug}`} className="hover:text-[#EE3A39] transition-colors">
                        {pkg.service}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#626262]">{pkg.desc}</p>
                  </div>
                  <div className="text-right shrink-0 pl-4">
                    <p className="text-xs text-gray-400 mb-1 leading-none font-medium uppercase tracking-wider">from</p>
                    <p className="text-2xl font-extrabold text-[#EE3A39] tracking-tight">{pkg.price}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Disclaimer row */}
            <div className="bg-[#F8F8F8] px-6 py-4 border-t border-gray-100 flex items-center gap-3 text-sm text-[#626262]">
              <AlertCircle size={16} className="text-[#EE3A39] shrink-0" />
              <p>Prices depend on the complexity of the raw images. Exact rates are locked in during onboarding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VOLUME DISCOUNTS */}
      <section className="py-20 bg-[#F8F8F8] border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#011] mb-4">Volume Discounts</h2>
            <p className="text-[#626262] text-lg">Send more, save more. Discounts applied automatically to your monthly invoice.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm">
              <p className="text-[#626262] text-xs font-bold mb-3 uppercase tracking-widest">1–100 Images</p>
              <h4 className="text-2xl font-extrabold text-[#011]">Standard Rate</h4>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm hover:border-[#EE3A39]/30 transition-colors">
              <p className="text-[#626262] text-xs font-bold mb-3 uppercase tracking-widest">101–500 Images</p>
              <h4 className="text-2xl font-extrabold text-[#EE3A39]">10% Off</h4>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm hover:border-[#EE3A39]/50 transition-colors">
              <p className="text-[#626262] text-xs font-bold mb-3 uppercase tracking-widest">501–1000 Images</p>
              <h4 className="text-2xl font-extrabold text-[#EE3A39]">15% Off</h4>
            </div>
            <div className="bg-[#EE3A39] border border-[#EE3A39] p-6 rounded-2xl text-center shadow-xl shadow-[#EE3A39]/20 transform lg:scale-105">
              <Sparkles size={18} className="text-white mx-auto mb-2 opacity-80" />
              <p className="text-white/80 text-xs font-bold mb-2 uppercase tracking-widest">1000+ Images</p>
              <h4 className="text-2xl font-extrabold text-white">20% Off</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PACKAGES */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#011] mb-4">Service Tier Breakdown</h2>
            <p className="text-[#626262] text-lg">Find the right service level for your operational needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-end">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-[#011] border-[#011] shadow-2xl pb-12' 
                  : 'bg-white border-gray-100 shadow-sm hover:shadow-xl hover:border-[#EE3A39]/20'
              }`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EE3A39] text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}
                {pkg.icon}
                <h3 className={`text-2xl font-extrabold mb-2 ${pkg.popular ? 'text-white' : 'text-[#011]'}`}>{pkg.name}</h3>
                <p className={`font-medium mb-6 text-sm ${pkg.popular ? 'text-[#EE3A39]' : 'text-[#EE3A39]'}`}>{pkg.volume}</p>
                <p className={`text-sm mb-8 min-h-[40px] ${pkg.popular ? 'text-gray-400' : 'text-[#626262]'}`}>{pkg.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className={`flex gap-3 items-center text-sm ${pkg.popular ? 'text-gray-300' : 'text-[#626262]'}`}>
                      <Zap size={14} className={pkg.popular ? "text-[#EE3A39]" : "text-gray-300"} />
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <Link href="/free-trial" className={`block text-center w-full py-3 rounded-xl font-bold transition-all text-sm ${
                  pkg.popular 
                    ? 'bg-[#EE3A39] text-white hover:bg-red-600 shadow-md' 
                    : 'bg-[#F8F8F8] border border-gray-200 text-[#011] hover:border-[#EE3A39] hover:text-[#EE3A39]'
                }`}>
                   Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING FAQ */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-extrabold text-center text-[#011] mb-12">Frequent Questions About Pricing</h2>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-gray-100 rounded-2xl shadow-sm px-2 overflow-hidden">
                <AccordionTrigger className="text-left text-base font-bold text-[#011] hover:text-[#EE3A39] px-4 py-4 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#626262] text-sm leading-relaxed px-4 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-[#011] rounded-3xl p-6 sm:p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#EE3A39]/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10">Not sure which rate applies to you?</h2>
            <p className="text-xl text-gray-400 mb-10 font-medium relative z-10">Send us your raw images. We&apos;ll edit 10 for free and give you an exact quote.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/free-trial" className="relative z-10 inline-flex items-center justify-center bg-[#EE3A39] hover:bg-red-700 text-white px-8 py-4 rounded-xl font-extrabold text-base hover:shadow-xl transition-all shadow-md group">
                Get 10 Free Images
              </Link>
              <Link href="/get-quote" className="relative z-10 inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-extrabold text-base hover:shadow-xl transition-all shadow-md backdrop-blur-sm group">
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
