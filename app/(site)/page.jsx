import Hero from "@/components/Hero";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { cn } from "@/lib";
import { services } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CloudUpload, Eye, Zap, Image as ImageIcon, CheckCircle, Target, Award, Infinity, MessageSquare, Scissors, Layers } from "lucide-react";

export const metadata = {
  title: "Professional Image Post-Production Services | Blackfox Digital",
  description: "Blackfox Digital offers professional image post-production services including background removal, clipping path, ghost mannequin, beauty retouching and more. Trusted by 500+ global brands. 24-hour delivery. Start your free trial today.",
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

  return (
    <main className="w-full bg-[#F8F8F8] text-[#011] min-h-screen font-sans overflow-hidden">
      
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
               { name: "Clipping Path", price: "0.25", sub: "/image", icon: Target, note: "Hand-drawn precision" },
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

      {/* 3. HIGHLY ACCURATE WORKFLOW - COMPACT HORIZONTAL */}
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
            {/* Optional background connecting line for desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[#EE3A39]/20 z-0"></div>

            {workflowSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center text-center">
                
                {/* Step Number Badge */}
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

      {/* 4. THE BLACKFOX DIFFERENCE */}
      <section className="py-24 bg-white text-[#011] overflow-hidden relative border-t border-gray-100">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EE3A39]/10 text-[#EE3A39] border border-[#EE3A39]/20 rounded-full text-[10px] font-black mb-6 uppercase tracking-[3px]">
                Our Guarantee
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-[#011]">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">Blackfox Digital</span>
              </h2>
              <p className="text-base font-bold text-[#626262] mb-10 leading-relaxed">
                We don't just edit photos; we build backend infrastructures that allow studios, photographers, and e-commerce giants to scale limitlessly.
              </p>
              <Link href="/free-trial" className="inline-flex px-8 py-4 bg-[#EE3A39] text-white font-black uppercase tracking-[3px] text-[10px] rounded-2xl shadow-[0_10px_20px_rgba(238,58,57,0.2)] hover:shadow-[0_15px_30px_rgba(238,58,57,0.3)] hover:-translate-y-1 transition-all items-center gap-2">
                Test Our Infrastructure <ArrowRight size={14} />
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

      {/* 5. INDUSTRIES WE SERVE - LIGHT PREMIUM DIRECTORY */}
      <section className="py-24 bg-[#F8F8F8] text-[#011] relative overflow-hidden border-y border-gray-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EE3A39]/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-5">Industries We Serve</h2>
            <p className="text-base font-bold text-[#626262] max-w-2xl mx-auto leading-relaxed">
              Our infrastructure is engineered to handle the unique technical requirements of global industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.62 1.96v14.16a2 2 0 0 0 1.62 1.96L8 23a4 4 0 0 0 8 0l4.38-1.46a2 2 0 0 0 1.62-1.96V5.42a2 2 0 0 0-1.62-1.96Z"/><path d="M12 2v21"/><path d="M16 2v21"/><path d="M8 2v21"/></svg>, title: "Fashion & Apparel", desc: "Ghost mannequin, high-end model retouching, and flatlay precision." },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>, title: "E-Commerce", desc: "Optimized product images for Amazon, eBay, and enterprise marketplaces." },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: "Real Estate", desc: "Surgical interior, exterior, and HDR aerial property enhancement." },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>, title: "Jewelry", desc: "High-clarity precision retouching for diamonds, gems, and precious metals." },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>, title: "Food & Beverage", desc: "Vibrant, appetizing color correction for commercial food photography." },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>, title: "Automotive", desc: "Advanced car photo editing, background replacement, and color grading." },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>, title: "Beauty", desc: "High-end frequency separation, skin smoothing, and blemish correction." },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>, title: "Photography Studios", desc: "Very high volume clients who outsource bulk editing and workflows." }
            ].map((industry, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-14 h-14 bg-[#F8F8F8] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#EE3A39] transition-all duration-300">
                  <div className="text-[#EE3A39] group-hover:text-white transition-colors duration-300">
                    {industry.icon}
                  </div>
                </div>
                <h4 className="text-xl font-extrabold mb-3 tracking-tight text-[#011]">{industry.title}</h4>
                <p className="text-sm text-[#626262] leading-relaxed font-medium transition-colors">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-3 px-8 py-4 bg-[#011] text-white uppercase font-black tracking-[3px] text-[10px] rounded-2xl hover:bg-[#EE3A39] hover:-translate-y-1 transition-all shadow-xl group cursor-pointer">
              See How We Help Your Industry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5.5. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#011] mb-5">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                stars: 5, 
                text: "Blackfox Digital transformed our entire Amazon product catalog. Turnaround was 24 hours and quality was exceptional.", 
                author: "James R.", 
                role: "E-Commerce Manager", 
                loc: "United States" 
              },
              { 
                stars: 5, 
                text: "We process 2,000+ fashion images monthly with Blackfox. Their ghost mannequin work is the best we have found globally.", 
                author: "Sophie M.", 
                role: "Creative Director", 
                loc: "United Kingdom" 
              },
              { 
                stars: 5, 
                text: "Reliable, fast and pixel-perfect every time. Our jewelry retouching has never looked better.", 
                author: "Lars K.", 
                role: "Brand Manager", 
                loc: "Germany" 
              }
            ].map((t, i) => (
              <div key={i} className="bg-[#F8F8F8] p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex text-orange-400 mb-6">
                  {Array(t.stars).fill(0).map((_, s) => (
                    <span key={s} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-[#011] font-medium leading-relaxed italic mb-8 italic">"{t.text}"</p>
                <div>
                  <div className="font-bold text-[#011]">— {t.author}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#EE3A39] mt-1">{t.role}</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{t.loc}</div>
                </div>
              </div>
            ))}
          </div>
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
            Try Our Image Editing Service Free
          </h2>
          <p className="text-base font-bold text-[#626262] mb-8 max-w-2xl mx-auto leading-relaxed">
            Send us a few test shots and we'll edit them for free — no credit card, no commitment. Just great edits.
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
            "name": "Blackfox Digital",
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
