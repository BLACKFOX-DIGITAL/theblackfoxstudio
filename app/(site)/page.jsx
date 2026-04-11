import Hero from "@/components/Hero";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { cn } from "@/lib";
import { services } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "@/components/ui/TestimonialSlider";
import { ArrowRight, CheckCircle2, CloudUpload, Eye, Zap, Image as ImageIcon, CheckCircle, Target, Award, Infinity, MessageSquare, Scissors, Layers } from "lucide-react";

export const metadata = {
  title: "Outsource Photo Editing & Retouching Services | BLACKFOX DIGITAL",
  description: "Outsource photo editing to BLACKFOX DIGITAL — 80+ professional retouchers delivering background removal, clipping path, ghost mannequin, beauty retouch and 20+ services. From $0.29/image. 24-hour delivery. Trusted by 500+ global brands. Free trial.",
  alternates: { canonical: "https://theblackfoxstudio.com/" },
};

export default function Home() {
  // Use mock services to feature on the homepage
  // Feature exactly 9 key services for the homepage Core Capabilities
  const featuredSlugs = [
    'background-removal-service',
    'ecommerce-photo-editing',
    'ghost-mannequin-service',
    'beauty-skin-retouching-service',
    'clipping-path-service',
    'product-retouching-service',
    'jewelry-retouching-service',
    'image-masking-service',
    'shadow-reflection-service'
  ];
  
  const dbServices = services
    .filter(s => featuredSlugs.includes(s.slug))
    .sort((a, b) => featuredSlugs.indexOf(a.slug) - featuredSlugs.indexOf(b.slug));

  const workflowSteps = [
    { title: "Upload Files", desc: "Clients upload their raw files/images securely on our FTP server or cloud drive.", icon: CloudUpload, img: "/upload.png" },
    { title: "Processing", desc: "Our 24/7 expert team immediately downloads the images and starts the retouching pipeline.", icon: Zap, img: "/download.png" },
    { title: "Quality Check", desc: "Editing is completed and moved to our rigorous multi-tier Quality Control division.", icon: Eye, img: "/retouching_done.png" },
    { title: "Encrypted Delivery", desc: "Passed files are immediately uploaded back to your secure file transfer of choice.", icon: Infinity, img: "/free.png" },
    { title: "Ready for Download", desc: "You are notified instantly when the flawless final images are ready.", icon: CheckCircle, img: "/retouch_done_download.png" },
  ];

  const differences = [
    { title: "Quality You Can Count On", desc: "Every image goes through a multi-step QC process before delivery to ensure surgical precision.", icon: Award },
    { title: "Turnaround That Fits Your Schedule", desc: "Standard, express, and bulk options available to perfectly align with your production calendar.", icon: Zap },
    { title: "Transparent Pricing", desc: "No surprises and no hidden fees—just straightforward, per-image rates you can plan around.", icon: Target },
    { title: "24/7 Global Support", desc: "Round-the-clock access to dedicated support managers ready to assist in every time zone.", icon: MessageSquare },
  ];

  const homepageTestimonials = [
    { stars: 5, text: "BLACKFOX DIGITAL transformed our entire Amazon product catalog. Turnaround was 24 hours and quality was exceptional.", author: "James R.", role: "E-Commerce Manager", loc: "United States" },
    { stars: 5, text: "We process 2,000+ fashion images monthly with BLACKFOX DIGITAL. Their ghost mannequin work is the best we have found globally.", author: "Sophie M.", role: "Creative Director", loc: "United Kingdom" },
    { stars: 5, text: "Reliable, fast and pixel-perfect every time. Our jewelry retouching has never looked better.", author: "Lars K.", role: "Brand Manager", loc: "Germany" },
    { stars: 5, text: "We outsource all our background removal to BLACKFOX DIGITAL. 500+ images weekly, always delivered on time with zero errors.", author: "Michael T.", role: "Operations Director", loc: "Australia" },
    { stars: 5, text: "The clipping path quality is outstanding. Sharp edges, clean paths — exactly what our catalog needs for print and web.", author: "Anna K.", role: "Art Director", loc: "Netherlands" },
    { stars: 5, text: "Switched from our previous editing team to BLACKFOX DIGITAL and the difference in quality was immediately noticeable.", author: "David L.", role: "E-Commerce Manager", loc: "Canada" },
    { stars: 5, text: "Their beauty retouching is world-class. Our model images look editorial-quality every single time.", author: "Isabella F.", role: "Fashion Photographer", loc: "Italy" },
    { stars: 5, text: "Fast, affordable and incredibly consistent. BLACKFOX DIGITAL handles our entire Shopify product catalog monthly.", author: "Thomas B.", role: "Store Owner", loc: "Germany" },
    { stars: 5, text: "The ghost mannequin results are flawless. Our fashion brand has never looked more professional online.", author: "Emma S.", role: "Brand Manager", loc: "France" },
    { stars: 5, text: "We send 1,000+ images per week and BLACKFOX DIGITAL never misses a deadline. Exceptional service and great communication.", author: "Ahmed R.", role: "Creative Director", loc: "UAE" },
    { stars: 5, text: "Our jewelry photography has transformed since working with BLACKFOX DIGITAL. Every gem looks stunning and precise.", author: "Priya M.", role: "Jewelry Brand Owner", loc: "United States" },
    { stars: 5, text: "Best image editing partner we have worked with in 8 years. Quality is consistent, pricing is fair and delivery is fast.", author: "Kevin O.", role: "Photo Studio Owner", loc: "United Kingdom" },
    { stars: 5, text: "Their real estate photo editing is exceptional. HDR blending, sky replacement — all perfect. Highly recommended.", author: "Marcus H.", role: "Real Estate Photographer", loc: "United States" },
    { stars: 5, text: "We process our entire Amazon FBA catalog with BLACKFOX DIGITAL. White background compliance is always perfect first time.", author: "Sarah W.", role: "Amazon Seller", loc: "Australia" },
    { stars: 5, text: "BLACKFOX DIGITAL understands our brand standards perfectly. Every image is consistent across our entire product range.", author: "Chen L.", role: "E-Commerce Director", loc: "Singapore" }
  ];

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://theblackfoxstudio.com",
    "name": "BLACKFOX DIGITAL",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://theblackfoxstudio.com/services?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="w-full bg-[#F8F8F8] text-[#011] min-h-screen font-sans overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* 1. EPIC HERO */}
      <Hero />

      {/* 1.5. BRAND TRUST BAR - UPSCALED AUTHORITY ZONE */}
      <section className="bg-[#011] py-12 relative z-30 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-10 md:gap-4">
            
            <div className="flex items-center gap-4 text-white group">
              <span className="text-[#EE3A39] text-2xl group-hover:scale-125 transition-transform duration-300">★</span>
              <div className="flex flex-col">
                <span className="text-sm md:text-[1rem] font-extrabold uppercase tracking-[3px] leading-tight">10+ Years</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[1px] opacity-80 mt-1">Experience</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10"></div>
            
            <div className="flex items-center gap-4 text-white group">
              <span className="text-[#EE3A39] text-2xl group-hover:scale-125 transition-transform duration-300">★</span>
              <div className="flex flex-col">
                <span className="text-sm md:text-[1rem] font-extrabold uppercase tracking-[3px] leading-tight">500,000+</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[1px] opacity-80 mt-1">Images Edited</span>
              </div>
            </div>

            <div className="hidden lg:block w-px h-10 bg-white/10"></div>
            
            <div className="flex items-center gap-4 text-white group">
              <span className="text-[#EE3A39] text-2xl group-hover:scale-125 transition-transform duration-300">★</span>
              <div className="flex flex-col">
                <span className="text-sm md:text-[1rem] font-extrabold uppercase tracking-[3px] leading-tight">Global Presence</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[1px] opacity-80 mt-1">30+ Countries</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10"></div>
            
            <div className="flex items-center gap-4 text-white group">
              <span className="text-[#EE3A39] text-2xl group-hover:scale-125 transition-transform duration-300">★</span>
              <div className="flex flex-col">
                <span className="text-sm md:text-[1rem] font-extrabold uppercase tracking-[3px] leading-tight">24/7 Support</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[1px] opacity-80 mt-1">Every Time Zone</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 1.55. SOCIAL PROOF STRIP */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "BLACKFOX DIGITAL transformed our entire Amazon product catalog. Turnaround was 24 hours and quality was exceptional.", author: "James R.", role: "E-Commerce Manager", loc: "United States" },
              { text: "We process 2,000+ fashion images monthly. Their ghost mannequin work is the best we have found globally.", author: "Sophie M.", role: "Creative Director", loc: "United Kingdom" },
              { text: "Reliable, fast and pixel-perfect every time. Our jewelry retouching has never looked better.", author: "Lars K.", role: "Brand Manager", loc: "Germany" },
            ].map((t, i) => (
              <div key={i} className="flex gap-4 items-start p-6 bg-[#F8F8F8] rounded-2xl border border-gray-100">
                <span className="text-[#EE3A39] text-2xl leading-none mt-0.5 flex-shrink-0">"</span>
                <div>
                  <p className="text-sm font-bold text-[#011] leading-relaxed mb-3">{t.text}</p>
                  <p className="text-[10px] font-black uppercase tracking-[2px] text-[#EE3A39]">{t.author} — {t.role}, {t.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.6. HOW IT WORKS — WORKFLOW */}
      <section className="py-24 relative overflow-hidden bg-[#F8F8F8]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EE3A39]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#011] mb-5">Our Image Editing Workflow</h2>
            <p className="text-base font-bold text-[#626262] max-w-2xl mx-auto">
              Our 5-step process is engineered for unmatched speed, security, and flawless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[#EE3A39]/20 z-0"></div>

            {workflowSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center text-center">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#EE3A39] text-white font-bold flex items-center justify-center text-sm shadow-md border-2 border-white">
                  {idx + 1}
                </div>
                <div className="w-14 h-14 bg-[#F8F8F8] border border-gray-100 rounded-2xl flex items-center justify-center text-[#EE3A39] mb-5 shadow-sm">
                   <step.icon size={26} />
                </div>
                <h4 className="text-lg font-bold text-[#011] mb-3">{step.title}</h4>
                <p className="text-[#626262] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. FEATURED SERVICES (DYNAMIC) */}
      <section className="py-24 relative z-20 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-[1400px]">
          
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black uppercase text-[#011] tracking-tighter mb-4">Our Image Post-Production Services</h2>
              <p className="text-base font-bold text-[#626262]">
                Professional photo editing and retouching services for e-commerce, fashion and enterprise clients worldwide. Quality is our #1 Priority.
              </p>
            </div>
            <Link href="/services" className="px-6 py-2.5 bg-[#EE3A39]/10 text-[#EE3A39] font-black uppercase tracking-[3px] text-[10px] rounded-xl hover:bg-[#EE3A39] hover:text-white hover:-translate-y-1 transition-all flex items-center gap-2 whitespace-nowrap shadow-sm">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dbServices.map((service) => {
              // Map DB slugs or titles to precise old image paths for the visual Wow factor
              const slug = service.slug || "";
              let imgBefore = service.beforeImage || "/hero-1.jpeg";
              let imgAfter = service.afterImage || "/hero-1.jpg";

              if (!service.beforeImage && !service.afterImage) {
                if (slug.includes("ecommerce") || slug.includes("e-commerce")) { imgBefore = "/ECommerce.jpg"; imgAfter = "/ECommerce-Done.jpg"; }
                else if (slug.includes("background")) { imgBefore = "/bg-removal.jpg"; imgAfter = "/bg-removal-done.jpg"; }
                else if (slug.includes("clipping")) { imgBefore = "/Flatlay-1.jpg"; imgAfter = "/Flatlay-1-Done.jpg"; }
                else if (slug.includes("ghost-mannequin")) { imgBefore = "/Ghost-Mannequin-2-Raw.jpg"; imgAfter = "/Ghost-Mannequin-2-Done.jpg"; }
                else if (slug.includes("beauty") || slug.includes("skin")) { imgBefore = "/Beauty-Retouch-Service-Page.jpg"; imgAfter = "/Beauty-Retouch-Service-Page-Done.jpg"; }
                else if (slug.includes("masking")) { imgBefore = "/Masking-Retouch.jpg"; imgAfter = "/Masking-Retouch-Done.jpg"; }
                else if (slug.includes("shadow") || slug.includes("reflection")) { imgBefore = "/Reflection-Service.jpg"; imgAfter = "/Reflection-Service-Done.jpg"; }
                else if (slug.includes("jewelry")) { imgBefore = "/Jewlery-Retouch-Service-Page.jpg"; imgAfter = "/Jewlery-Retouch-Service-Page-Done.jpg"; }
                else if (slug.includes("product")) { imgBefore = "/Product-Retouch-Service-Page.jpg"; imgAfter = "/Product-Retouch-Service-Page-Done.jpg"; }
              }

              return (
                 <div key={service.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(238,58,57,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden group flex flex-col">
                   {/* Interactive Before/After Slider */}
                   <div className="w-full aspect-[4/3] relative overflow-hidden bg-[#F8F8F8] block">
                     <BeforeAfterSlider beforeImage={imgBefore} afterImage={imgAfter} label={service.title} />
                   </div>

                   {/* Content Container */}
                   <div className="p-8 flex-grow flex flex-col">
                     <Link href={`/services/${slug}`} className="block">
                       <h3 className="text-xl font-extrabold text-[#011] mb-3 uppercase tracking-wide group-hover:text-[#EE3A39] transition-colors">{service.title}</h3>
                     </Link>
                     <p className="text-[#626262] mb-8 leading-relaxed line-clamp-2">
                       {service.shortDescription || "Get high-end precision post-production for volume commercial imagery."}
                    </p>
                     <div className="mt-auto pt-5 border-t border-gray-100 flex justify-between items-center text-sm font-bold text-[#011]">
                       <Link href={`/services/${slug}`} className="text-[#EE3A39] hover:underline underline-offset-4 decoration-2 transition-all">Details</Link>
                       <Link href={`/order?service=${slug}`} className="text-[#EE3A39] flex items-center gap-1 -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100 z-10 hover:underline underline-offset-4 decoration-2">
                         Order Now <ArrowRight size={14} />
                       </Link>
                     </div>
                   </div>
                 </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2.5. PREMIUM SERVICE PRICE BOARD */}
      <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#F8F8F8]/50 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EE3A39]/10 text-[#EE3A39] rounded-full text-[10px] font-black mb-4 uppercase tracking-[3px]">
               Direct Rates
             </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#011] tracking-tighter mb-4">Transparent Pricing Snapshot</h2>
            <p className="text-[#626262] font-bold text-base max-w-2xl mx-auto">Straightforward per-image rates with absolute transparency. No contracts, just results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
               { name: "Background Removal", price: "0.29", sub: "/image", icon: Scissors, popular: true, note: "Perfect for E-commerce" },
               { name: "Clipping Path", price: "0.25", sub: "/image", icon: Target, bestValue: true, note: "Hand-drawn precision" },
               { name: "Ghost Mannequin", price: "0.75", sub: "/image", icon: ImageIcon, note: "Professional 3D effect" },
               { name: "Beauty Retouch", price: "2.00", sub: "/image", icon: Zap, note: "Magazine-quality skin" },
               { name: "Product Retouch", price: "0.99", sub: "/image", icon: Layers, note: "Shadows & Reflections" },
               { name: "Jewelry Retouch", price: "2.50", sub: "/image", icon: Award, note: "High-end brilliance" }
             ].map((row, i) => (
                <div key={i} className="group bg-[#F8F8F8] hover:bg-white border border-transparent hover:border-[#EE3A39]/20 p-6 rounded-[2rem] flex items-center justify-between transition-all duration-400 hover:shadow-2xl hover:-translate-y-1">
                   <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#011] group-hover:text-white group-hover:bg-[#EE3A39] transition-all shadow-sm">
                         <row.icon size={24} />
                      </div>
                      <div>
                         <div className="flex items-center gap-2 mb-0.5">
                            <h3 className="font-extrabold text-lg text-[#011] uppercase tracking-tight">{row.name}</h3>
                            {row.popular && <span className="bg-[#EE3A39] text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest">Popular</span>}
                            {row.bestValue && <span className="bg-[#011] text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest">Best Value</span>}
                         </div>
                         <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{row.note}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="flex items-end justify-end gap-0.5 mb-1">
                         <span className="text-xs font-black text-[#EE3A39] mb-1.5 uppercase tracking-widest">$</span>
                         <span className="text-3xl font-black text-[#011] tracking-tighter group-hover:text-[#EE3A39] transition-colors">{row.price.split('.')[0]}</span>
                         <span className="text-xl font-black text-[#011] tracking-tighter group-hover:text-[#EE3A39] transition-colors">.{row.price.split('.')[1]}</span>
                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[2px] mb-1.5 ml-1">{row.sub}</span>
                      </div>
                      <Link href={`/order?service=${row.name.toLowerCase().replace(/ /g, '-')}`} className="text-[10px] font-black uppercase tracking-[3px] text-[#EE3A39] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-end gap-1 translate-x-4 group-hover:translate-x-0">
                         Start Now <ArrowRight size={10} />
                      </Link>
                   </div>
                </div>
             ))}
          </div>
          
          <div className="mt-16 flex flex-col items-center">
            <Link href="/pricing" className="px-8 py-4 bg-[#011] text-white font-black uppercase tracking-[3px] text-[10px] rounded-2xl hover:bg-[#EE3A39] hover:-translate-y-1 transition-all flex items-center gap-2 group shadow-xl">
              View Detailed Price List <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
              Processing 5,000+ per month? <Link href="/get-quote" className="text-[#EE3A39] hover:underline underline-offset-4">Talk to an Agent</Link>
            </p>
          </div>
        </div>
      </section>

      {/* 2.6. BULK ORDER BANNER */}
      <section className="py-12 bg-[#EE3A39] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">Order 1000+ Images?</h3>
              <p className="text-white text-base font-bold">Get 20% Off on Bulk Orders across all photo editing categories.</p>
            </div>
            <Link href="/contact" className="px-8 py-4 bg-[#011] text-white font-black uppercase tracking-[3px] text-[10px] rounded-2xl shadow-xl hover:bg-white hover:text-[#011] hover:-translate-y-1 transition-all flex items-center gap-2">
              Get Bulk Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. THE BLACKFOX DIGITAL DIFFERENCE */}
      <section className="py-24 bg-white text-[#011] overflow-hidden relative border-t border-gray-100">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EE3A39]/10 text-[#EE3A39] border border-[#EE3A39]/20 rounded-full text-[10px] font-black mb-6 uppercase tracking-[3px]">
                Our Guarantee
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-[#011]">
                Zero Revisions. Zero Surprises. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">Your Catalog, Delivered Perfect.</span>
              </h2>
              <p className="text-base font-bold text-[#626262] mb-10 leading-relaxed">
                80+ specialist editors. Multi-tier QC. 24-hour delivery. We've processed 500,000+ images so your team can focus on growing your business — not managing retouching.
              </p>
              <Link href="/free-trial" className="inline-flex px-8 py-4 bg-[#EE3A39] text-white font-black uppercase tracking-[3px] text-[10px] rounded-2xl shadow-[0_10px_20px_rgba(238,58,57,0.2)] hover:shadow-[0_15px_30px_rgba(238,58,57,0.3)] hover:-translate-y-1 transition-all items-center gap-2">
                Test Our Quality Free <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {differences.map((diff, idx) => (
                 <div key={idx} className="bg-[#F8F8F8] rounded-3xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <diff.icon size={32} className="text-[#EE3A39] mb-6" />
                    <h4 className="text-xl font-bold text-[#011] mb-3">{diff.title}</h4>
                    <p className="text-[#626262] leading-relaxed text-sm">{diff.desc}</p>
                 </div>
               ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. CLIENT RESULTS BY SEGMENT */}
      <section className="py-24 bg-[#011] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white rounded-full text-[10px] font-black mb-4 uppercase tracking-[3px]">
              Proven Results
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">What Clients Achieve With Us</h2>
            <p className="text-gray-400 font-bold text-base max-w-2xl mx-auto">Real outcomes from brands and studios that outsource their photo editing to BLACKFOX DIGITAL.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                segment: "Amazon & E-Commerce Sellers",
                result: "Zero listing rejections",
                detail: "Amazon FBA sellers processing 500–2,000 images/week achieve 100% white background compliance on first delivery — no re-submissions, no delayed launches.",
                stat: "500+ images/week",
                statLabel: "Typical weekly volume",
              },
              {
                segment: "Fashion & Apparel Brands",
                result: "2,000+ images/month at boutique quality",
                detail: "Fashion labels get ghost mannequin, digital ironing, and model retouching across entire seasonal catalogs — consistent brand look, every batch.",
                stat: "24-hour",
                statLabel: "Standard turnaround",
              },
              {
                segment: "Jewelry Retailers",
                result: "Editorial-quality every shot",
                detail: "Jewelry brands get diamond facet enhancement, metal polishing, and focus-stacking alignment — the kind of precision that was previously only available at top agencies.",
                stat: "$2.50/image",
                statLabel: "Starting price",
              },
              {
                segment: "Photo Studios & Agencies",
                result: "Scalable white-label infrastructure",
                detail: "Studios outsource bulk retouching under their own brand, with custom SLAs, dedicated PMs, and API integration — no overhead of hiring in-house editors.",
                stat: "Enterprise SLA",
                statLabel: "Available for 1,000+/mo",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 hover:border-[#EE3A39]/30 transition-all duration-300 group">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[3px] text-[#EE3A39] mb-2">{item.segment}</p>
                    <h4 className="text-xl font-extrabold text-white tracking-tight">{item.result}</h4>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-2xl font-black text-[#EE3A39] tracking-tighter leading-tight">{item.stat}</p>
                    <p className="text-[9px] font-black uppercase tracking-[2px] text-gray-500 mt-0.5">{item.statLabel}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/free-trial" className="inline-flex items-center gap-2 px-8 py-4 bg-[#EE3A39] text-white font-black uppercase tracking-[3px] text-[10px] rounded-2xl shadow-[0_10px_30px_rgba(238,58,57,0.3)] hover:shadow-[0_15px_50px_rgba(238,58,57,0.4)] hover:-translate-y-1 transition-all group">
              Get Your Free Sample Edits <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5.5. TESTIMONIALS SLIDER SECTION */}
      <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
        <div className="absolute left-[-20%] bottom-[-20%] w-[50%] h-[50%] bg-[#EE3A39]/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 md:mb-24 relative">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#011] mb-5">What Our Clients Say</h2>
          </div>
          
          <TestimonialSlider testimonials={homepageTestimonials} />
        </div>
      </section>

      {/* 5.6. BLOG / RESOURCES */}
      <section className="py-24 bg-[#F8F8F8] border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#011] mb-4">Resources & Insights</h2>
              <p className="text-[#626262] font-bold text-base uppercase tracking-widest">Expert guides to help you optimize your visual content.</p>
            </div>
            <Link href="/blog" className="text-[#EE3A39] font-black uppercase tracking-[3px] text-[10px] flex items-center gap-2 group border-b border-transparent hover:border-[#EE3A39] transition-all">
              View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "How to Prepare Images for Amazon", tag: "Guide" },
              { title: "Ghost Mannequin vs Flat Lay", tag: "Comparison" },
              { title: "Why Background Removal Matters", tag: "Strategy" }
            ].map((post, i) => (
              <Link href="/blog" key={i} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm group hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[#011]/20 group-hover:bg-transparent transition-colors z-10"></div>
                   <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white text-[#EE3A39] text-[10px] font-black uppercase tracking-widest rounded-lg">{post.tag}</div>
                </div>
                <div className="p-8">
                   <h4 className="text-xl font-bold text-[#011] mb-4 group-hover:text-[#EE3A39] transition-colors">{post.title}</h4>
                   <span className="text-[#EE3A39] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Read Story <ArrowRight size={14}/></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOMEPAGE FOOTER CTA */}
      <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EE3A39]/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl uppercase font-black text-[#011] mb-5 tracking-tighter leading-tight">
            10 Free Edits. No Credit Card. Results in 24 Hours.
          </h2>
          <p className="text-base font-bold text-[#626262] mb-8 max-w-2xl mx-auto leading-relaxed">
            Send us your images and we'll show you the quality before you commit to anything — no contracts, no risk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Link href="/free-trial" className="px-10 py-5 bg-[#EE3A39] text-white font-black uppercase tracking-[3px] text-[10px] rounded-2xl shadow-[0_10px_30px_rgba(238,58,57,0.3)] hover:shadow-[0_15px_50px_rgba(238,58,57,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              Claim Your Free Trial <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="px-10 py-5 bg-[#011] text-white font-black uppercase tracking-[3px] text-[10px] rounded-2xl shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              Get A Custom Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "BLACKFOX DIGITAL",
            "url": "https://theblackfoxstudio.com",
            "description": "Professional image post-production services including background removal, clipping path, and retouching.",
            "foundingDate": "2016",
            "numberOfEmployees": "80",
            "areaServed": "Worldwide",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "House 560, Road 08",
              "addressLocality": "Dhaka",
              "addressCountry": "BD"
            },
            "telephone": "+8801924482868",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Image Editing Services"
            }
          })
        }}
      />
    </main>
  );
}
