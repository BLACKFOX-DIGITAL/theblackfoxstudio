import { services as mockServices } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Scissors, Zap, Award, Sparkles } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export const metadata = {
  title: "Image Post Production Services | Blackfox Limited",
  description: "Professional image editing and retouching services for e-commerce, fashion, and commercial photography.",
  openGraph: {
    images: ["/logo.png", "/hero-2.jpg"],
  },
};

export default function ServicesPage() {
  // Use mock services instead of database
  const dbServices = mockServices;

  // A helper map to assign breathtaking placeholder images to dynamic services if they lack explicit ones
  const serviceVisuals = {
    "background-removal": { before: "/bg-removal.jpg", after: "/bg-removal-done.jpg" },
    "clipping-path": { before: "/Flatlay-1.jpg", after: "/Flatlay-1-Done.jpg" },
    "ghost-mannequin": { before: "/Ghost-Mannequin-2-Raw.jpg", after: "/Ghost-Mannequin-2-Done.jpg" },
    "e-commerce-photo-editing": { before: "/ECommerce.jpg", after: "/ECommerce-Done.jpg" },
    "beauty-retouch": { before: "/Beauty-Retouch-Service-Page.jpg", after: "/Beauty-Retouch-Service-Page-Done.jpg" },
    "product-retouch": { before: "/Product-Retouch-Service-Page.jpg", after: "/Product-Retouch-Service-Page-Done.jpg" },
    "jewelry-retouch": { before: "/Jewlery-Retouch-Service-Page.jpg", after: "/Jewlery-Retouch-Service-Page-Done.jpg" },
    "image-masking": { before: "/Masking-Retouch.jpg", after: "/Masking-Retouch-Done.jpg" },
    "shadow-reflection": { before: "/Reflection-Service.jpg", after: "/Reflection-Service-Done.jpg" },
    "color-variants": { before: "/Color-Change.jpg", after: "/Color-Change-Done.jpg" },
    "image-manipulation": { before: "/Image-Manipulation.jpg", after: "/Image-Manipulation-Done.jpg" },
    "flat-lay-editing": { before: "/Flatlay-2.jpg", after: "/Flatlay-2-Done.jpg" },
    "vector-conversion": { before: "/download.png", after: "/logo.png" },
    "real-estate-editing": { before: "/Real-Estate-Before.png", after: "/Real-Estate-After.png" },
    "car-photo-editing": { before: "/Car-Before.png", after: "/Car-After.png" },
    "photo-restoration": { before: "/Photo-Restoration-Before.png", after: "/Photo-Restoration-After.png" },
    "multi-clipping-path": { before: "/bg-removal.jpg", after: "/bg-removal-done.jpg" },
    "image-web-optimization": { before: "/ECommerce.jpg", after: "/ECommerce-Done.jpg" },
    "360-product-editing": { before: "/Product-Retouch-Service-Page.jpg", after: "/Product-Retouch-Service-Page-Done.jpg" },
    "packshot-retouching": { before: "/Jewlery-Retouch-Service-Page.jpg", after: "/Jewlery-Retouch-Service-Page-Done.jpg" },
  };

  return (
    <main className="min-h-screen bg-[#F8F8F8] font-sans text-[#011] overflow-hidden pt-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-white border-b border-gray-200 overflow-hidden">
        <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[100%] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-sm font-bold mb-6 uppercase tracking-widest shadow-sm">
            <Sparkles size={16} /> Image Editing At Its Best
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter text-[#011] drop-shadow-sm leading-tight">
            Retouch In A Way That <br className="hidden md:block" /> Makes You <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-[#ff6b6b]">Stand Out.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#626262] leading-relaxed font-medium mb-12 max-w-4xl mx-auto">
            We are here to retouch your raw images, turning your pictures into the ultimate commercial assets. Explore our comprehensive suite of post-production solutions below.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/portfolio" className="px-8 py-4 bg-white text-[#011] border border-gray-200 font-bold rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              View Our Gallery
            </Link>
            <Link href="/free-trial" className="px-8 py-4 bg-[#EE3A39] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(238,58,57,0.2)] hover:shadow-[0_15px_30px_rgba(238,58,57,0.3)] hover:-translate-y-1 transition-all flex items-center gap-2">
              Start Free Trial <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC SERVICES GRID */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4 max-w-[1400px]">
          
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-[#011] tracking-tight mb-4">Our Processing Pipeline</h2>
            <p className="text-xl text-[#626262] max-w-2xl mx-auto">
              From raw capture to final delivery, we execute complex workflows at scale with surgical precision. 
            </p>
          </div>

          {dbServices.length === 0 ? (
            <div className="text-center py-20 text-[#626262] border-2 border-dashed border-gray-300 rounded-[2rem] bg-white">
              <Scissors size={48} className="mx-auto mb-4 text-gray-300" />
              <h3 className="text-2xl font-bold text-[#011] mb-2">No Services Configured</h3>
              <p>Add services in the CMS Dashboard to see them appear here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dbServices.map((service) => {
                const slug = service.slug || "";
                let imgBefore = service.beforeImage;
                let imgAfter = service.afterImage;

                const fallback = serviceVisuals[slug] || { before: "/hero-1.jpeg", after: "/hero-1.jpg" };
                if (!imgBefore || !imgAfter) {
                  imgBefore = fallback.before;
                  imgAfter = fallback.after;
                }

                return (
                   <div key={service.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(238,58,57,0.08)] transition-all duration-500 overflow-hidden group flex flex-col">
                     {/* Interactive Before/After Slider */}
                     <div className="w-full aspect-[4/3] relative overflow-hidden bg-[#F8F8F8] block">
                       <BeforeAfterSlider beforeImage={imgBefore} afterImage={imgAfter} label={service.title} />
                     </div>
  
                    {/* Content Container */}
                    <div className="p-8 flex-grow flex flex-col">
                      <Link href={`/services/${slug}`} className="block">
                        <h3 className="text-xl font-extrabold text-[#011] mb-3 uppercase tracking-wide group-hover:text-[#EE3A39] transition-colors">{service.title}</h3>
                      </Link>
                      <p className="text-[#626262] mb-8 leading-relaxed line-clamp-3">
                        {service.shortDescription || "Get high-end precision post-production for volume commercial imagery."}
                     </p>
                      
                      <div className="mt-auto grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-gray-100">
                        <div>
                          <p className="text-[10px] text-[#626262] uppercase tracking-[2px] font-black mb-1 leading-normal">Starting At</p>
                          <p className="text-lg font-extrabold text-[#011]">${service.priceStarting?.toFixed(2) || "0.49"}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-[#626262] uppercase tracking-[2px] font-black mb-1 leading-normal">Turnaround</p>
                          <p className="text-lg font-extrabold text-[#011]">{service.turnaround || "24 hrs"}</p>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold text-[#011] mt-6">
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
          )}

        </div>
      </section>

      {/* 3. CTA BOTTOM */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Award size={48} className="mx-auto mb-6 text-[#EE3A39]" />
          <h2 className="text-4xl font-extrabold text-[#011] mb-6 tracking-tight">Ready to scale your studio?</h2>
          <p className="text-xl text-[#626262] mb-10 leading-relaxed">
            Stop turning away clients because you can't edit fast enough. Outsource the heavy lifting to our 24/7 dedicated production lab.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/contact" className="px-10 py-5 bg-[#EE3A39] text-white font-bold rounded-2xl text-lg hover:bg-red-700 hover:-translate-y-1 transition-all shadow-[0_10px_20px_rgba(238,58,57,0.2)] hover:shadow-[0_15px_30px_rgba(238,58,57,0.3)]">
               Talk to Sales
             </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
