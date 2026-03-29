import { services as mockServices } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowRight, Lock, UploadCloud, UserCircle2, Info, CheckCircle2, ShieldCheck, CreditCard } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "New Order | Blackfox Studio",
  description: "Start a new retouching order.",
};

export default function OrderPage({ searchParams }) {
  // Extract query parameter if passed from 'Order Now' clicks
  const serviceSlug = searchParams?.service;
  
  const allServices = mockServices;
  const preselectedService = allServices.find(s => s.slug === serviceSlug) || null;

  return (
    <main className="w-full bg-[#F8F8F8] min-h-screen pt-32 pb-24 font-sans text-[#011] relative overflow-hidden">
      
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EE3A39]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs font-bold mb-4 uppercase tracking-[2px] text-gray-500">
              <ShieldCheck size={14} className="text-[#EE3A39]" /> Secure Checkout
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">Setup Your Order</h1>
            <p className="text-lg text-[#626262] max-w-2xl">Upload your assets, specify instructions, and let our dedicated lab handle the rest.</p>
          </div>
          <div className="flex bg-white border border-gray-200 p-1.5 rounded-2xl shadow-sm">
             <div className="flex items-center gap-3 px-4 py-2 opacity-50">
               <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-xs font-bold flex items-center justify-center">1</span>
               <span className="text-sm font-bold text-gray-500">Cart</span>
             </div>
             <div className="flex items-center gap-3 px-4 py-2 bg-[#F8F8F8] rounded-xl border border-gray-100 shadow-sm">
               <span className="w-6 h-6 rounded-full bg-[#EE3A39] text-white text-xs font-bold flex items-center justify-center">2</span>
               <span className="text-sm font-bold text-[#011]">Details</span>
             </div>
          </div>
        </div>

        <div className="mb-8 bg-white border border-blue-100/50 bg-blue-50/30 p-4 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
             <UserCircle2 size={24} className="text-[#EE3A39]" />
             <div>
               <p className="text-sm font-extrabold text-[#011]">Returning Client?</p>
               <p className="text-xs text-[#626262]">Log in to access your saved presets, billing, and past orders.</p>
             </div>
          </div>
          <Link href="/login" className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-bold shadow-sm hover:border-[#EE3A39] transition-all whitespace-nowrap">
            Login to Portal
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Form Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Step 1: Project Scope */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#EE3A39]"></div>
              <h2 className="text-xl font-extrabold mb-6 flex items-center gap-2">Project Scope</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Project/Job Name <span className="text-[#EE3A39]">*</span></label>
                  <input type="text" placeholder="e.g. Summer Collection 2026 - Main Batch" className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all font-medium text-[#011]" />
                </div>
                
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Primary Service Category <span className="text-[#EE3A39]">*</span></label>
                  <select defaultValue={preselectedService?.id || ""} className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all appearance-none cursor-pointer font-bold text-[#011]">
                    <option value="" disabled>Select the primary service required...</option>
                    {allServices.map(sub => (
                      <option key={sub.id} value={sub.id}>{sub.title} (Starting at ${sub.priceStarting?.toFixed(2) || "0.49"})</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Estimated Quantity</label>
                    <input type="number" placeholder="100 Images" className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all font-medium text-[#011]" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Delivery Speed</label>
                    <select className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all appearance-none cursor-pointer font-medium text-[#011]">
                      <option>Standard Delivery (24 Hours)</option>
                      <option>Rush Delivery (12 Hours) +20%</option>
                      <option>Priority Lab (6 Hours) +50%</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Assets & Instructions */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#011]"></div>
              <h2 className="text-xl font-extrabold mb-6 flex items-center gap-2">Assets & Instructions</h2>
              
              <div className="border-2 border-dashed border-gray-200 bg-[#F8F8F8] rounded-2xl p-10 text-center hover:border-[#EE3A39]/50 hover:bg-[#EE3A39]/5 transition-colors cursor-pointer mb-6 group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <UploadCloud size={32} className="text-[#EE3A39]" />
                </div>
                <h3 className="text-lg font-extrabold mb-2 text-[#011]">Upload Raw Files</h3>
                <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">Drag & drop your files here. Supports RAW, TIFF, PSD, JPG, PNG up to 5GB.</p>
                <div className="inline-block px-8 py-3 bg-[#EE3A39] text-white rounded-lg text-sm font-bold shadow-[0_4px_15px_rgba(238,58,57,0.2)]">
                  Browse Files
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">Brief & Requirements <Info size={14} className="text-[#EE3A39]" /></label>
                <textarea rows="5" placeholder="Specify any unique requirements: e.g. Keep natural shadows, crop to 4:5 ratio, match background color to #F2F2F2..." className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all resize-none font-medium text-[#011]"></textarea>
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h2 className="text-xl font-extrabold mb-6">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">First Name <span className="text-[#EE3A39]">*</span></label>
                  <input type="text" className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all font-medium text-[#011]" />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Last Name <span className="text-[#EE3A39]">*</span></label>
                  <input type="text" className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all font-medium text-[#011]" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Email Address <span className="text-[#EE3A39]">*</span></label>
                <input type="email" placeholder="you@studio.com" className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all font-medium text-[#011]" />
              </div>
              
              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Company / Brand Name</label>
                <input type="text" className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all font-medium text-[#011]" />
              </div>
            </div>
            
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-gray-100 sticky top-32">
              <h3 className="text-xl font-extrabold mb-6">Order Summary</h3>
              
              {preselectedService ? (
                <div className="flex gap-4 items-center mb-8 p-4 bg-[#F8F8F8] rounded-2xl border border-gray-100 group cursor-default">
                  <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-gray-200 shadow-sm border border-gray-200 shrink-0">
                    <Image src={preselectedService.afterImage || "/hero-1.jpg"} alt={preselectedService.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm uppercase tracking-wide text-[#011] leading-tight mb-1">{preselectedService.title}</h4>
                    <p className="text-xs text-[#EE3A39] font-bold">Base: ${preselectedService.priceStarting?.toFixed(2) || "0.49"} / img</p>
                  </div>
                </div>
              ) : (
                <div className="mb-8 p-5 bg-[#EE3A39]/5 border border-[#EE3A39]/20 rounded-2xl text-sm font-medium text-[#626262] flex items-start gap-3">
                  <Info size={18} className="shrink-0 mt-0.5 text-[#EE3A39]" />
                  Please select a primary service from the dropdown to see estimated pricing.
                </div>
              )}

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#626262] font-medium">Lab Setup Fee</span>
                  <span className="font-extrabold text-[#011]">$0.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#626262] font-medium">Estimated Delivery</span>
                  <span className="font-extrabold text-[#011]">{preselectedService?.turnaround || "24 Hours"}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-extrabold text-lg text-[#011]">Estimated Total</span>
                  <span className="font-extrabold text-3xl text-[#EE3A39] leading-none">TBD</span>
                </div>
                <p className="text-xs text-[#626262] leading-relaxed mt-3">Final price is calculated based on exact image quantity and complexity after asset review. No charge until approved.</p>
              </div>

              <button className="w-full py-5 bg-[#011] text-white font-extrabold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:bg-[#EE3A39] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                Submit Order <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-6 flex flex-col items-center gap-3 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <Lock size={14} className="text-green-500" /> Secure 256-bit SSL
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <CreditCard size={28} />
                  <span className="text-2xl font-black">VISA</span>
                  <span className="text-xl font-bold italic">PayPal</span>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
