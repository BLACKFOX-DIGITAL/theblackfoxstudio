import { services, portfolio as mockPortfolio, faqs as mockFaqs } from '@/lib/mock-data';
import { ArrowRight, CheckCircle, Download, MonitorPlay, FileCheck, Truck, Zap } from 'lucide-react';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';


// Dynamically generate metadata for SEO
export function generateMetadata({ params }) {
  const slug = params.slug;
  const dbService = services.find(s => s.slug === slug);

  if (dbService) {
    return {
      title: `${dbService.title} | Blackfox Digital`,
      description: dbService.shortDescription || dbService.description,
    };
  }

  // Fallback for missing entries
  return {
    title: `${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} | Blackfox Digital`,
    description: `Professional ${slug.replace(/-/g, ' ')} services for global e-commerce brands and photographers.`,
  };
}

export default function ServicePage({ params }) {
  const slug = params.slug;
  
  // 1. Fetch from Mock records
  const dbService = services.find(s => s.slug === slug);
  const dbPortfolio = mockPortfolio.filter(p => p.category === slug).slice(0, 3);
  const dbFaqs = mockFaqs.filter(f => f.category === slug || f.category === 'general').slice(0, 5);
  const dbRelatedServices = services.filter(s => s.slug !== slug).slice(0, 3);

  // 2. Generate Placeholders based on requested slug
  const formattedSlugTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const service = dbService ? {
    ...dbService,
    features: Array.isArray(dbService.features) ? dbService.features : JSON.parse(dbService.features || '[]')
  } : {
    title: formattedSlugTitle,
    description: `Expert ${formattedSlugTitle} tailored for high-volume studios, ecommerce storefronts, and professional photographers. We ensure every detail is pristine, driving higher conversion rates and brand trust.`,
    shortDescription: `Top-tier ${formattedSlugTitle} specifically designed for commercial perfection.`,
    priceStarting: 0.49,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['High-resolution output', 'Quality-checked masking', 'Unlimited revisions', 'Custom guidelines adherence'],
  };


  const portfolio = dbPortfolio.length > 0 ? dbPortfolio : [
    { id: '1', title: 'Example 1', category: slug, beforeImage: '', afterImage: '' },
    { id: '2', title: 'Example 2', category: slug, beforeImage: '', afterImage: '' },
    { id: '3', title: 'Example 3', category: slug, beforeImage: '', afterImage: '' }
  ];

  const faqs = dbFaqs.length > 0 ? dbFaqs : [
    { question: `What is the delivery time for ${formattedSlugTitle}?`, answer: 'Standard delivery is within 24 hours. We also offer rush 12-hour delivery for urgent campaigns.' },
    { question: 'What file formats do you accept?', answer: 'We process JPG, PNG, TIFF, PSD, and most RAW file formats directly from your camera.' },
    { question: 'Can I request a sample before bulk ordering?', answer: 'Absolutely. We offer a free trial for up to 3 images so you can evaluate our quality.' },
    { question: 'Do you offer bulk discounts?', answer: 'Yes! We provide tiered discounts for orders exceeding 500 and 1,000 images per month.' },
    { question: 'Is my data secure?', answer: 'We maintain strict NDAs and internal security protocols. Your raw images are never used for other purposes without explicit consent.' }
  ];

  const relatedServices = dbRelatedServices.length > 0 ? dbRelatedServices : [
    { title: 'Ghost Mannequin', slug: 'ghost-mannequin', description: 'Create hollow 3D apparel effects.' },
    { title: 'Beauty Skin Retouch', slug: 'beauty-skin-retouch', description: 'Flawless skin retouching and dodging.' },
    { title: 'Color Correction', slug: 'color-correction', description: 'Accurate color grading for apparel.' }
  ];

  return (
    <div className="min-h-screen bg-white text-[#011]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-32 border-b border-gray-100 overflow-hidden bg-white">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-orange-500/3 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-xs font-black mb-8 uppercase tracking-[3px] shadow-sm">
              Professional Service
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-[#011] leading-[0.9]">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i === service.title.split(' ').length - 1 ? "text-[#EE3A39]" : ""}>
                   {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-[#011]/60 mb-12 leading-relaxed font-medium">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/free-trial" className="bg-[#EE3A39] hover:bg-[#011] text-white px-10 py-5 rounded-2xl font-black shadow-[0_20px_40px_rgba(238,58,57,0.2)] hover:-translate-y-1 transition-all duration-500 text-sm tracking-[3px] uppercase inline-flex items-center gap-3 group">
                Get Free Trial <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/get-quote" className="bg-white hover:bg-[#F8F8F8] border-2 border-[#011] text-[#011] px-10 py-5 rounded-2xl font-black hover:-translate-y-1 transition-all duration-500 text-sm tracking-[3px] uppercase inline-block shadow-sm">
                Get Quote
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#EE3A39]/20 to-orange-500/10 blur-[60px] rounded-[3rem] opacity-50"></div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white shadow-2xl group">
              <Image 
                src={service.heroImage || service.afterImage || '/logo.png'} 
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl">
                    <span className="text-white text-[10px] font-black uppercase tracking-[3px]">Commercial Grade</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRECISION COMPARISON (BOUTIQUE POLISH) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#EE3A39]/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-[#011] tracking-tighter uppercase leading-[0.9]">Precision <br/> <span className="text-[#EE3A39]">You Can See.</span></h2>
            <p className="text-lg md:text-xl text-[#011]/60 leading-relaxed font-medium">Drag the slider to compare the raw files against our final delivery. Observe the technical transformation of every edge and shadow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {portfolio.map((item, idx) => (
              <div key={idx} className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white group transition-all duration-700 hover:scale-[1.02]">
                <BeforeAfterSlider 
                  label={`Sample Project ${idx+1}`} 
                  beforeImage={item.beforeImage} 
                  afterImage={item.afterImage} 
                />
                <div className="absolute top-6 left-6 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="bg-white/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg">
                      <span className="text-[#011] text-[10px] font-black uppercase tracking-[3px]">Boutique Retouch</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO & 4. FEATURES LIST - REFACTORED FOR WRAPPING */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          
          <div className="w-full">
            {/* Service Details Box - Floated for Desktop Wrapping */}
            <div className="lg:float-right lg:ml-12 lg:mb-12 w-full lg:w-[450px] bg-grayLight border border-gray-200 p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.02)] relative z-10 clear-both">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#011]">
                <MonitorPlay className="text-brandPrimary" /> Service Details
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-brandPrimary/10 p-2.5 rounded-xl text-brandPrimary h-fit shadow-sm"><CheckCircle size={20} /></div>
                  <div>
                    <h4 className="font-extrabold text-[#011] tracking-tight uppercase text-xs mb-2">What&apos;s Included</h4>
                    <ul className="text-[#626262] text-sm flex flex-col gap-2 font-medium">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brandPrimary mt-1.5 w-1 h-1 rounded-full bg-brandPrimary shrink-0"></span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-brandPrimary/10 p-2.5 rounded-xl text-brandPrimary h-fit shadow-sm"><Download size={20} /></div>
                  <div>
                    <h4 className="font-extrabold text-[#011] tracking-tight uppercase text-xs mb-2">Accepted Formats</h4>
                    <p className="text-[#626262] text-sm font-medium">RAW, CR2, NEF, DNG, PSD, TIFF, JPG, PNG</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-brandPrimary/10 p-2.5 rounded-xl text-brandPrimary h-fit shadow-sm flex items-center justify-center w-10 h-10"><Zap size={20} /></div>
                  <div>
                    <h4 className="font-extrabold text-[#011] tracking-tight uppercase text-xs mb-2">Turnaround Time</h4>
                    <p className="text-[#626262] text-sm font-medium">{service.turnaround || '12-24 hours'}</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <div className="bg-brandPrimary/10 p-2.5 rounded-xl text-brandPrimary h-fit shadow-sm flex items-center justify-center w-10 h-10"><span className="font-extrabold">$</span></div>
                  <div>
                    <h4 className="font-extrabold text-[#011] tracking-tight uppercase text-xs mb-2">Pricing Starts From</h4>
                    <p className="text-brandPrimary font-black text-2xl tracking-tighter">
                      ${service.priceStarting?.toFixed(2) || '0.49'} <span className="text-xs font-bold text-[#626262] uppercase tracking-widest ml-1">/ {service.priceUnit || 'image'}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Description - Justified for Premium Editorial Look */}
            <div 
              className="prose prose-lg prose-headings:font-extrabold prose-headings:text-[#011] text-[#626262] prose-p:leading-relaxed max-w-none mb-10 text-justify"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
          </div>
          
        </div>
      </section>

      {/* 5. USE CASES */}
      <section className="py-24 bg-grayLight overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#011]">Who Needs This Service?</h2>
          <p className="text-[#626262] mb-12">Designed for high-output commercial entities that demand consistency across large volumes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['E-Commerce Fashion Brands', 'Professional Photographers', 'Amazon / eBay Sellers', 'Advertising Agencies', 'Magazine Publishers', 'Footwear Retailers'].map((industry, i) => (
              <span key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#626262] shadow-sm">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS STEPS */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute -inset-4 bg-[#EE3A39]/10 blur-[40px] rounded-[2.5rem]"></div>
               <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl">
                  <Image 
                    src={service.workflowImage || '/logo.png'} 
                    alt="Boutique Workflow"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011]/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                     <span className="text-white text-[10px] font-black uppercase tracking-[3px]">Expert Studio Operations</span>
                  </div>
               </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-12 text-[#011] tracking-tighter leading-tight">Boutique Workflow.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { icon: <Download size={24} />, title: '1. Secure Upload', desc: 'Surgical batch precision starts with a clean file transfer.' },
                  { icon: <CheckCircle size={24} />, title: '2. Expert Edit', desc: 'Your brand guidelines are our blueprint for perfection.' },
                  { icon: <FileCheck size={24} />, title: '3. Multi-Tier QC', desc: 'Every pixel is audited before delivery.' },
                  { icon: <Truck size={24} />, title: '4. Fast Delivery', desc: 'Ready-to-publish files, delivered without delay.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="w-12 h-12 bg-[#EE3A39]/10 border border-[#EE3A39]/20 rounded-xl flex items-center justify-center text-[#EE3A39] mb-5">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-black text-[#011] mb-2 uppercase tracking-tight">{step.title}</h3>
                    <p className="text-[#011]/50 text-xs leading-relaxed font-medium uppercase tracking-wider">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ (EXPANDED FOR SUBSTANCE) */}
      <section className="py-32 bg-[#F8F8F8] border-y border-gray-100">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#011] tracking-tighter uppercase">Service Intelligence</h2>
            <p className="text-[#011]/50 text-xs font-black uppercase tracking-[3px] leading-relaxed">Everything you need to know about our precision workflow.</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: `What is the delivery time for ${formattedSlugTitle}?`, a: 'Standard delivery is within 24 hours. We also offer rush 12-hour delivery for urgent campaigns.' },
              { q: 'What file formats do you accept?', a: 'We process JPG, PNG, TIFF, PSD, and all major RAW file formats directly from your studio camera.' },
              { q: 'Can I request a sample before bulk ordering?', a: 'Absolutely. We offer an interactive free trial for up to 3 images so you can evaluate our pixel-perfect quality.' },
              { q: 'Do you offer bulk enterprise discounts?', a: 'Yes! We provide tiered high-volume discounts for catalogs exceeding 1,000 images per month.' },
              { q: 'How do you handle transparent objects?', a: 'We use advanced alpha channel masking and path layering to preserve every detail of glass, water, or transparent fabrics.' },
              { q: 'Is my studio data secure?', a: 'We maintain strict NDAs and internal security protocols. Your raw images are never used for other purposes without explicit consent.' }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-none bg-white rounded-3xl px-8 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left text-lg font-black text-[#011] hover:text-[#EE3A39] py-6 uppercase tracking-tight">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#011]/60 text-base leading-relaxed font-medium pb-8 border-t border-gray-50 pt-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 8. RELATED SERVICES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#011] mb-2">Explore Related Services</h2>
              <p className="text-[#626262]">Compliment your workflow with these retouching options.</p>
            </div>
            <Link href="/services" className="hidden sm:flex text-brandPrimary font-medium items-center gap-2 hover:text-red-700 transition-colors">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={`/services/${rel.slug}`} className="group block bg-[#F8F8F8] p-4 rounded-[2rem] border border-gray-100 hover:border-[#EE3A39]/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-md">
                   <Image 
                     src={rel.afterImage || '/logo.png'} 
                     alt={rel.title}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-700"
                     unoptimized
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                   <div className="absolute bottom-4 left-4">
                      <span className="text-white text-[10px] font-black uppercase tracking-[2px] bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">Studio Service</span>
                   </div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-lg font-black text-[#011] mb-2 uppercase tracking-tighter group-hover:text-[#EE3A39] transition-colors">{rel.title}</h3>
                  <p className="text-[#011]/50 text-xs font-medium line-clamp-2 uppercase tracking-wide leading-relaxed">{rel.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-brandPrimary">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Try This Service Free</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Upload up to 3 test images right now. Let us prove our quality before you commit to bulk volumes.
          </p>
          <button className="bg-white text-brandPrimary px-8 py-4 rounded-lg font-extrabold text-lg flex items-center gap-3 justify-center mx-auto hover:bg-gray-100 transition-colors shadow-xl">
            <Zap className="fill-current" size={24} /> Get Your Free Trial
          </button>
        </div>
      </section>

    </div>
  );
}
