import { services, portfolio as mockPortfolio, faqs as mockFaqs } from '@/lib/mock-data';
import { ArrowRight, CheckCircle, Download, MonitorPlay, FileCheck, Truck, Zap, Star, ShieldCheck, DollarSign, Clock, Layers } from 'lucide-react';
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
      title: dbService.pageTitle || `${dbService.title} | Blackfox Digital`,
      description: dbService.schemaDescription || dbService.shortDescription || `Professional ${dbService.title} services for global brands. From $${dbService.priceStarting}/image. 24-hour delivery. Free trial available.`,
    };
  }

  return {
    title: `${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} Service | Blackfox Digital`,
    description: `Professional ${slug.replace(/-/g, ' ')} services for global e-commerce brands and photographers.`,
  };
}

export default function ServicePage({ params }) {
  const slug = params.slug;
  
  // 1. Fetch from Mock records
  const dbService = services.find(s => s.slug === slug);
  const dbPortfolio = mockPortfolio.filter(p => p.category === slug).slice(0, 3);
  const dbRelatedServices = services.filter(s => s.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 3);

  // 2. Data Definitions
  const title = dbService?.title || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const heroLabel = dbService?.heroLabel || "Professional Service";
  
  const heroSubtext = dbService?.shortDescription || `Professional ${title} for global marketplaces. Consistent results that drive results. 24-hour delivery.`;

  const pricingData = dbService?.pricingData || [
    { type: 'Standard', price: `$${dbService?.priceStarting || '0.49'}/image`, desc: 'Standard turnaround and quality' },
    { type: 'Express', price: '+20%', desc: '24-hour priority delivery' },
    { type: 'Rush', price: '+40%', desc: '12-hour high-speed delivery' },
    { type: 'Emergency', price: '+60%', desc: '2-4 hour urgent delivery' }
  ];

  const turnaroundOptions = [
    { time: 'Normal 24-48hrs', add: 'Standard Price' },
    { time: 'Rush 24hrs', add: '+20%' },
    { time: 'Super Rush 12hrs', add: '+40%' },
    { time: 'Emergency 6hrs', add: '+60%' }
  ];

  const faqs = dbService?.customFaqs || [
    { q: `What is the delivery time for ${title}?`, a: "Standard delivery is 24-48 hours. Express options are available for urgent projects." },
    { q: "Can I get a free trial?", a: "Yes, we offer up to 10 images free for every new client to test our quality." },
    { q: "What is your pricing model?", a: "We offer per-image pricing based on complexity, starting from $0.35/image for high-volume orders." },
    { q: "Do you sign NDAs?", a: "Yes, we handle sensitive studio data for global brands and sign non-disclosure agreements routinely." },
    { q: "How are files delivered?", a: "Files are delivered via secure links (Dropbox, WeTransfer) or directly to your FTP server." }
  ];

  const h2Title = dbService?.h2Title || `Professional ${title} Workflows`;
  const targetAudience = dbService?.targetAudience || null;

  // SEO Alt Texts
  const titleLower = title.replace(/ service/i, '').toLowerCase() + ' service';
  const heroAlt = `${titleLower} before and after example`;
  const beforeAlt = `${titleLower} raw unedited image`;
  const afterAlt = `${titleLower} final edited result`;

  // Internal Link Helper
  const processDescription = (html) => {
    if (!html) return '';
    let processed = html;
    const links = [
      { text: 'background removal', url: '/services/background-removal-service' },
      { text: 'image masking', url: '/services/image-masking-service' },
      { text: 'e-commerce photo editing', url: '/services/ecommerce-photo-editing' },
      { text: 'color correction', url: '/services/color-correction-service' },
      { text: 'clipping path', url: '/services/clipping-path-service' }
    ];
    links.forEach(link => {
      const regex = new RegExp(`(${link.text})`, 'gi');
      processed = processed.replace(regex, `<a href="${link.url}" class="text-[#EE3A39] hover:underline font-bold">$1</a>`);
    });
    return processed;
  };

  const serviceDescription = processDescription(dbService?.description || `<p>Professional ${title} services tailored for high-volume studios and brands.</p>`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "provider": {
      "@type": "Organization",
      "name": "Blackfox Digital"
    },
    "description": dbService?.schemaDescription || heroSubtext,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": dbService?.priceStarting || "0.35",
      "priceSpecification": {
        "minPrice": dbService?.priceStarting || "0.35",
        "maxPrice": "3.00"
      }
    },
    "areaServed": "Worldwide"
  };

  return (
    <div className="min-h-screen bg-white text-[#011]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-32 border-b border-gray-100 overflow-hidden bg-white">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-orange-500/3 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[2px] text-gray-400 mb-8">
              <Link href="/" className="hover:text-[#EE3A39] transition-colors">Home</Link>
              <ArrowRight size={8} className="text-gray-300" />
              <Link href="/services" className="hover:text-[#EE3A39] transition-colors">Services</Link>
              <ArrowRight size={8} className="text-gray-300" />
              <span className="text-[#EE3A39]">{title}</span>
            </nav>

            <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-xs font-black mb-8 uppercase tracking-[3px] shadow-sm">
              {heroLabel}
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-[#011] leading-[0.9] uppercase">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-[#011]/60 mb-12 leading-relaxed font-bold">
              {heroSubtext}
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/free-trial" className="bg-[#EE3A39] hover:bg-[#011] text-white px-10 py-5 rounded-2xl font-black shadow-[0_20px_40px_rgba(238,58,57,0.2)] hover:-translate-y-1 transition-all duration-500 text-sm tracking-[3px] uppercase inline-flex items-center gap-3 group">
                Start Free Trial <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
                src={dbService?.heroImage || dbService?.afterImage || '/logo.png'} 
                alt={heroAlt}
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

      {/* 2. PRECISION COMPARISON */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#EE3A39]/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-[#011] tracking-tighter uppercase leading-[0.9]">{title} — <br/> <span className="text-[#EE3A39]">Before & After Results</span></h2>
            <p className="text-lg md:text-xl text-[#011]/60 leading-relaxed font-bold">Drag the slider to compare original raw files against our studio-grade delivery. Experience the technical transformation of every edge, shadow, and color profile.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {dbPortfolio.map((item, idx) => (
              <div key={idx} className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white group transition-all duration-700 hover:scale-[1.02]">
                <BeforeAfterSlider 
                  label={`${title} Comparison ${idx+1}`} 
                  beforeImage={item.beforeImage} 
                  afterImage={item.afterImage}
                  beforeAlt={beforeAlt}
                  afterAlt={afterAlt}
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

      {/* 3. SERVICE DETAILS & PRICING */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="w-full">
            {/* Service Details Box */}
            <div className="lg:float-right lg:ml-12 lg:mb-12 w-full lg:w-[450px] space-y-6 clear-both">
              
              {/* Feature Stats */}
              <div className="bg-[#011] text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#EE3A39]/20 blur-[50px] rounded-full"></div>
                <h3 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-tighter">
                  <ShieldCheck className="text-[#EE3A39]" /> Service Specs
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-[#EE3A39] mt-1"><Layers size={20} /></div>
                    <div>
                      <h4 className="font-extrabold text-white/40 tracking-[2px] uppercase text-[9px] mb-2">Scope of Work</h4>
                      <ul className="text-white/80 text-sm flex flex-col gap-2 font-bold">
                        {(dbService?.features || ['High-end Masking', 'Channel Clipping', 'Color Matching']).map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                             <div className="w-1 h-1 bg-[#EE3A39] rounded-full"></div> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 border-t border-white/5 pt-6">
                    <div className="text-[#EE3A39] mt-1"><Clock size={20} /></div>
                    <div>
                      <h4 className="font-extrabold text-white/40 tracking-[2px] uppercase text-[9px] mb-1">Standard Delivery</h4>
                      <p className="text-white text-sm font-black uppercase tracking-tight">{dbService?.turnaround || '12-48 Hours'}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 border-t border-white/5 pt-6">
                    <div className="text-[#EE3A39] mt-1"><DollarSign size={20} /></div>
                    <div>
                      <h4 className="font-extrabold text-white/40 tracking-[2px] uppercase text-[9px] mb-1">Pricing From</h4>
                      <p className="text-[#EE3A39] font-black text-3xl tracking-tighter">
                        ${dbService?.priceStarting || '0.35'} <span className="text-[10px] font-bold text-white/40 uppercase tracking-[2px] ml-1">/ {dbService?.priceUnit || 'image'}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Turnaround Table */}
              <div className="bg-[#F8F8F8] border border-gray-200 p-8 rounded-[2.5rem] shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-[3px] text-[#011] mb-6 flex items-center gap-3">
                  <Zap size={16} className="text-[#EE3A39]" /> Speed Options
                </h4>
                <div className="space-y-3">
                  {turnaroundOptions.map((opt, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                      <span className="text-xs font-bold text-[#011]/60 uppercase tracking-tight">{opt.time}</span>
                      <span className="text-[10px] font-black text-white bg-[#011] px-3 py-1 rounded-full uppercase tracking-[2px]">{opt.add}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-[10px] font-black text-[#EE3A39] uppercase tracking-[2px] text-center">
                    Order 1000+ images? Get 20% off
                  </p>
                  <Link href="/pricing" className="block text-center mt-3 text-[10px] font-black uppercase tracking-[2px] hover:underline">View pricing guide</Link>
                </div>
              </div>

            </div>

            {/* Main Description */}
            <div className="max-w-3xl">
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">{h2Title}</h2>
              <div 
                className="prose prose-lg prose-headings:font-black prose-headings:text-[#011] text-[#011]/70 prose-p:leading-relaxed max-w-none mb-12 text-justify font-bold"
                dangerouslySetInnerHTML={{ __html: serviceDescription }}
              />
              
              {/* Target Audience Section (Dynamically Injected) */}
              {targetAudience && (
                <div className="mt-12 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                   <div className="absolute -inset-4 bg-[#EE3A39]/5 blur-[30px] rounded-full pointer-events-none"></div>
                   <h3 className="text-xl font-black uppercase tracking-tight mb-8 text-[#011] relative z-10">Who Needs {title}?</h3>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                     {targetAudience.map((audience, idx) => (
                       <li key={idx} className="flex items-center gap-3">
                         <div className="w-2 h-2 bg-[#EE3A39] rounded-full shrink-0"></div>
                         <span className="font-bold text-[#011]/80 text-sm tracking-wide">{audience}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              )}

              {/* Complexity Table */}
              <div className="mt-12 bg-[#F8F8F8] rounded-[2rem] p-8 border border-gray-100">
                <h3 className="text-lg font-black uppercase tracking-tight mb-8">Service Complexity Pricing</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {pricingData.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 group hover:border-[#EE3A39]/30 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black uppercase tracking-[2px] text-gray-400">{item.type}</span>
                        <span className="text-sm font-black text-[#EE3A39]">{item.price}</span>
                      </div>
                      <p className="text-xs font-bold text-[#011]/60 leading-relaxed group-hover:text-[#011] transition-colors">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS STEPS */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute -inset-4 bg-[#EE3A39]/10 blur-[40px] rounded-[2.5rem]"></div>
               <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl bg-[#011] flex items-center justify-center">
                  {dbService?.workflowImage && dbService.workflowImage !== '/logo.png' ? (
                    <Image 
                      src={dbService.workflowImage} 
                      alt={`Our ${title} Process Workflow`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-4 text-white/20">
                      <Layers size={64} strokeWidth={1} />
                      <span className="text-[10px] font-black uppercase tracking-[4px]">Studio Workflow Viz</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011]/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                     <span className="text-white text-[10px] font-black uppercase tracking-[3px]">Expert Studio Operations</span>
                  </div>
               </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-12 text-[#011] tracking-tighter leading-tight uppercase">Our Professional <br/> Editing Process</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { icon: <Download size={24} />, title: '1. Secure Upload', desc: 'Batch precision starts with a clean file transfer via FTP or Cloud.' },
                  { icon: <CheckCircle size={24} />, title: '2. Expert Edit', desc: 'Your brand guidelines are the blueprint for pixel perfection.' },
                  { icon: <FileCheck size={24} />, title: '3. Multi-Tier QC', desc: 'Every pixel is audited by lead editors before approval.' },
                  { icon: <Truck size={24} />, title: '4. Fast Delivery', desc: 'Ready-to-publish files delivered in your chosen format.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-start translate-y-0 hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-14 h-14 bg-[#EE3A39]/10 border border-[#EE3A39]/20 rounded-2xl flex items-center justify-center text-[#EE3A39] mb-5 shadow-inner">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-black text-[#011] mb-2 uppercase tracking-tight">{step.title}</h3>
                    <p className="text-[#011]/50 text-[10px] leading-relaxed font-black uppercase tracking-wider">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-32 bg-[#F8F8F8] border-y border-gray-100">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#011] tracking-tighter uppercase">{title} FAQ</h2>
            <p className="text-[#011]/50 text-xs font-black uppercase tracking-[3px] leading-relaxed">Everything you need to know about our precision workflow.</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-none bg-white rounded-3xl px-8 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left text-lg font-black text-[#011] hover:text-[#EE3A39] py-8 uppercase tracking-tight">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#011]/60 text-base leading-relaxed font-bold pb-8 border-t border-gray-50 pt-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 6. RELATED SERVICES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-[#011] mb-2 uppercase tracking-tighter">Related Services</h2>
              <p className="text-[#011]/50 text-xs font-black uppercase tracking-[3px]">Compliment your workflow with these retouching options.</p>
            </div>
            <Link href="/services" className="hidden sm:flex text-[#EE3A39] font-black items-center gap-2 hover:text-[#011] transition-colors text-[10px] uppercase tracking-[2px]">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dbRelatedServices.map((rel, idx) => (
              <Link key={idx} href={`/services/${rel.slug}`} className="group block bg-[#F8F8F8] p-4 rounded-[2rem] border border-gray-100 hover:border-[#EE3A39]/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-md bg-[#011]">
                   <Image 
                     src={rel.afterImage || '/logo.png'} 
                     alt={`${rel.title} preview`}
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
                  <p className="text-[#011]/50 text-[10px] font-black line-clamp-2 uppercase tracking-wide leading-relaxed">{rel.shortDescription || rel.description?.replace(/<[^>]*>?/gm, '').slice(0, 100)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-[#EE3A39]">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-inner">
             <Star className="text-white fill-white" size={40} />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">Try This Service Free</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-bold leading-relaxed">
            Upload up to 10 images right now. Let us prove our professional quality before you commit to bulk studio volumes. No credit card required.
          </p>
          <Link href="/free-trial" className="bg-white text-[#EE3A39] px-12 py-6 rounded-[1.5rem] font-black text-sm uppercase tracking-[3px] flex items-center gap-3 justify-center mx-auto hover:bg-[#011] hover:text-white transition-all shadow-2xl hover:-translate-y-1">
            <Zap className="fill-current" size={20} /> Get Your Free Trial
          </Link>
        </div>
      </section>

    </div>
  );
}
