import { services as mockServices } from "@/lib/mock-data";
import { ArrowRight, Calculator, UploadCloud, Users, Mail, Image as ImageIcon, Sparkles, Building2, Workflow, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Request a Custom Quote — Image Editing | BLACKFOX DIGITAL",
  description: "Get a custom quote for high-volume image post-production. Background removal, retouching, clipping path and more. Bulk pricing available. Reply within 2 hours.",
  alternates: { canonical: "https://theblackfoxstudio.com/get-quote" },
  openGraph: {
    title: "Request a Custom Quote | BLACKFOX DIGITAL",
    description: "Tailored pricing for high-volume image editing. Submit your requirements and receive a custom quote within 2 hours.",
    url: "https://theblackfoxstudio.com/get-quote",
    type: "website",
  },
};

export default function GetQuotePage() {

  // Fetch all published services to populate options
  const allServices = mockServices;

  return (
    <main className="w-full bg-[#F8F8F8] min-h-screen pt-32 pb-24 font-sans text-[#011] relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-md text-xs font-bold mb-6 uppercase tracking-[2px] text-gray-500 shadow-sm">
            <Calculator size={14} className="text-[#EE3A39]" /> Enterprise Pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">Volume.</span><br/>Priced for Scale.
          </h1>
          <p className="text-xl text-[#626262] leading-relaxed">
            Whether you process 500 or 50,000 images a month, our infrastructure scales with you. Tell us about your workflow to get a custom, volume-adjusted rate card.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Quote Form container */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EE3A39] to-orange-400"></div>
              
              <form className="space-y-10">
                {/* 1. Contact Genesis */}
                <div>
                  <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#EE3A39]"><Users size={16}/></span>
                    Who are you?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">First Name *</label>
                      <input type="text" className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all font-medium" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Last Name *</label>
                      <input type="text" className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all font-medium" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Work Email *</label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="email" placeholder="you@company.com" className="w-full pl-12 pr-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all font-medium" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Company / Brand *</label>
                      <div className="relative">
                        <Building2 size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" className="w-full pl-12 pr-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all font-medium" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-gray-100"></div>

                {/* 2. Volume & Services */}
                <div>
                  <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#EE3A39]"><Workflow size={16}/></span>
                    What are your technical needs?
                  </h3>
                  
                  <div className="mb-8">
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Estimated Monthly Output</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['1-100', '100-500', '500-2000', '2000+'].map((vol) => (
                        <label key={vol} className="cursor-pointer">
                          <input type="radio" name="volume" className="peer sr-only" value={vol} />
                          <div className="text-center px-4 py-4 rounded-xl border border-gray-200 bg-[#F8F8F8] text-sm font-bold text-gray-600 peer-checked:border-[#EE3A39] peer-checked:bg-[#EE3A39]/5 peer-checked:text-[#EE3A39] transition-all">
                            {vol}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Services of Interest (Select all that apply)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {allServices.map(service => (
                        <label key={service.id} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:bg-[#F8F8F8] cursor-pointer transition-colors group">
                           <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#EE3A39] focus:ring-[#EE3A39]" />
                           <span className="font-bold text-sm tracking-wide group-hover:text-[#EE3A39] transition-colors">{service.title}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-gray-100"></div>

                {/* 3. Assets & Style Guide */}
                <div>
                   <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#EE3A39]"><ImageIcon size={16}/></span>
                    Assets & Requirements
                  </h3>

                  <div className="border-2 border-dashed border-gray-200 bg-[#F8F8F8] rounded-2xl p-8 mb-6 hover:border-[#EE3A39]/40 transition-colors flex flex-col items-center justify-center cursor-pointer">
                    <UploadCloud size={32} className="text-gray-400 mb-3" />
                    <p className="font-bold text-sm mb-1">Upload reference images or style guides</p>
                    <p className="text-xs text-gray-500">Optional. Helps us provide a 100% accurate rate.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Project Details & Special Requirements</label>
                    <textarea rows="4" placeholder="e.g. Output in layered PSD. Target turnaround is 12 hours. Backgrounds must be pure white RGB 255..." className="w-full px-5 py-4 bg-[#F8F8F8] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE3A39]/20 focus:border-[#EE3A39] transition-all resize-none font-medium"></textarea>
                  </div>
                </div>

                <button type="button" className="w-full py-5 bg-[#EE3A39] text-white font-extrabold text-lg rounded-2xl shadow-[0_10px_30px_rgba(238,58,57,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(238,58,57,0.4)] transition-all flex items-center justify-center gap-2 group">
                  Request Custom Rate Card <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Information Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#011] p-8 rounded-[2rem] shadow-xl text-white">
               <h4 className="text-2xl font-extrabold mb-6">Why Partner With Us?</h4>
               <ul className="space-y-6">
                 <li className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <Sparkles size={18} className="text-[#EE3A39]" />
                   </div>
                   <div>
                     <p className="font-bold tracking-wide">Dedicated Specialist Team</p>
                     <p className="text-sm text-gray-400 leading-relaxed mt-1">Enterprise accounts get a dedicated team tuned to your brand guidelines — not a random queue.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <Clock size={18} className="text-[#EE3A39]" />
                   </div>
                   <div>
                     <p className="font-bold tracking-wide">Locked SLA Turnaround</p>
                     <p className="text-sm text-gray-400 leading-relaxed mt-1">We commit to a delivery window in writing. If we miss it, the batch is free.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <ShieldCheck size={18} className="text-[#EE3A39]" />
                   </div>
                   <div>
                     <p className="font-bold tracking-wide">Volume Discounts Applied Automatically</p>
                     <p className="text-sm text-gray-400 leading-relaxed mt-1">10% off from 100 images, 15% from 500, 20% from 1,000. No negotiation needed.</p>
                   </div>
                 </li>
               </ul>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm text-center">
              <p className="text-[#626262] font-medium mb-3">Prefer to speak to someone?</p>
              <p className="text-2xl font-black text-[#011] mb-1">(+88) 019 24 482 868</p>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Available 24/7</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
