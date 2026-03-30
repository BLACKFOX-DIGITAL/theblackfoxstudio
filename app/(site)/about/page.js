"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock, Globe2, ShieldCheck, Zap, Twitter, Linkedin, Globe, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/About/Contact";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#011] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-[#F8F8F8] border-b border-gray-200">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-[10px] font-black mb-4 uppercase tracking-[3px] shadow-sm">
              Our Story
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-5 tracking-tighter text-[#011] leading-none uppercase">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">Blackfox Digital</span> <br className="hidden md:block"/> Narrative Since 2016
            </h1>
            <p className="text-base md:text-lg text-[#011] leading-relaxed font-bold max-w-3xl mx-auto">
              Professional image post-production services for e-commerce brands, fashion houses and global enterprises. Pixel-perfect editing. 24-hour delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                  <Image src="/about_studio_hero_1774785390263.png" fill alt="Blackfox Digital Environment" className="object-cover object-bottom" unoptimized />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
                    <Image src="/expert_workflow_1774785408307.png" fill alt="Expert Precision Workflow" className="object-cover" unoptimized />
                  </div>
                  <div className="bg-[#EE3A39] rounded-3xl p-8 flex flex-col justify-center text-white shadow-xl">
                    <span className="text-5xl font-black mb-1">80+</span>
                    <span className="text-xs font-bold uppercase tracking-[3px] opacity-90">Design Experts</span>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#EE3A39]/5 blur-[80px] rounded-full"></div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-gray-100 text-[#011] rounded-full text-[10px] font-black uppercase tracking-[3px] mb-6">About Blackfox</div>
              <div className="text-[#626262] text-sm font-medium leading-relaxed flex flex-col gap-5">
                <p className="font-bold text-[#011] text-xl mb-2">From a 5-person startup to 80+ specialist editors since 2016</p>
                <p>
                  Blackfox Digital began its journey in 2016 as a boutique image post-production company with a team of 5 specialist retouching experts. Our mission was clear: deliver pixel-perfect <Link href="/services" className="text-[#EE3A39] hover:underline">image editing services</Link> to e-commerce brands and enterprises worldwide — with zero compromise on quality.
                </p>
                <p>
                  Through consistent innovation and an unwavering commitment to quality, we rapidly grew into a team of 80+ professional image editors and retouching specialists. Today, Blackfox Digital delivers high-volume photo editing and retouching services to leading e-commerce brands, fashion houses, and global enterprises — processing 5,000+ images daily from our studio in Dhaka, Bangladesh.
                </p>
                <p>
                  We believe great image editing starts with great people. Our diverse team of <Link href="/services/background-removal-service" className="text-[#EE3A39] hover:underline">background removal specialists</Link>, <Link href="/services/product-retouching-service" className="text-[#EE3A39] hover:underline">retouching artists</Link>, and <Link href="/services/color-correction-service" className="text-[#EE3A39] hover:underline">color correction experts</Link> brings fresh perspectives to every project — consistently delivering results that exceed client expectations, on time, every time.
                </p>
              </div>
              <div className="pt-6">
                <div className="flex items-center gap-4 text-[#011] font-bold text-xl">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#EE3A39]/10 text-[#EE3A39]">
                    <Clock size={28} />
                  </span>
                  Ready & Available 24/7/365
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. WHY US / OUR PROMISE */}
      <section className="py-24 bg-[#F8F8F8] border-y border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#011] mb-5">Why Global Brands Choose Us</h2>
            <p className="text-base font-bold text-[#626262]">We have structured our entire workflow to serve as seamless infrastructure for your business.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Globe2 size={32} />, title: "Human-Centric Precision", desc: "Every image is meticulously edited by a human specialist — never automated software — to ensure surgical accuracy." },
              { icon: <Zap size={32} />, title: "24/7 Global Support", desc: "We are available 24/7 — across all time zones and communication platforms — to assist with your production." },
              { icon: <CheckCircle2 size={32} />, title: "Zero-Revision QC", desc: "Our rigorous multi-tier QC process means we get it right the first time so you rarely need to request revisions." },
              { icon: <ShieldCheck size={32} />, title: "Transparent Partnerships", desc: "We are 100% transparent about our pricing, workflows, and timelines with no hidden costs or surprises." },
              { icon: <Clock size={32} />, title: "Relationship First", desc: "We invest in long-term client relationships and brand consistency, not just one-off transactions." },
              { icon: <Globe2 size={32} />, title: "Scalable Infrastructure", desc: "From small boutiques to global retailers, our 80+ expert team scales with your volume requirements." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
                }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#EE3A39]/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#EE3A39]/10 text-[#EE3A39] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#EE3A39] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-extrabold text-[#011] mb-3">{feature.title}</h3>
                <p className="text-[#626262] leading-relaxed text-sm font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GLOBAL PRESENCE */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-[10px] font-black mb-6 uppercase tracking-[3px] shadow-sm">Global Footprint</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#011] tracking-tighter uppercase mb-8">Professional Photo Editing Services for USA, Europe & Beyond</h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Founded", val: "2016" },
                  { label: "Expert Editors", val: "80+" },
                  { label: "Images Per Day", val: "5,000+" },
                  { label: "Global Clients", val: "500+" }
                ].map((stat, i) => (
                  <div key={i} className="border-l-4 border-[#EE3A39] pl-6 py-2">
                    <div className="text-3xl font-black text-[#011]">{stat.val}</div>
                    <div className="text-xs font-bold uppercase tracking-[2px] text-[#626262]">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-[#626262] leading-relaxed max-w-lg">
                Our operations have expanded globally, providing specialized support for e-commerce giants and boutique photographers across the **USA, Europe, Asia and beyond**.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-[#EE3A39]/5 blur-[100px] rounded-full"></div>
               <div className="relative border-2 border-[#011]/5 rounded-[40px] p-8 bg-gray-50/50 backdrop-blur-sm shadow-2xl">
                 <div className="relative aspect-square w-full rounded-[2rem] bg-[#011] flex items-center justify-center p-12 overflow-hidden group shadow-inner">
                    <Globe className="w-[150%] h-[150%] text-white opacity-[0.03] absolute scale-125 transition-transform duration-1000 group-hover:scale-150 group-hover:rotate-12" strokeWidth={0.5} />
                    <div className="z-10 text-center relative">
                       <div className="text-6xl font-black text-white mb-2">24/7/365</div>
                       <div className="text-[#EE3A39] font-black uppercase tracking-[5px] text-sm">Always Online</div>
                       <div className="mt-8 text-gray-400 text-xs font-medium max-w-[200px] mx-auto opacity-60 leading-relaxed">Seamless infrastructure for the global creative economy.</div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR TEAM SECTION */}
      <section className="py-24 bg-[#F8F8F8] border-y border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-[10px] font-black mb-6 uppercase tracking-[3px] shadow-sm">The Experts</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#011] mb-5">Meet Our Expert Team</h2>
            <p className="text-base font-bold text-[#626262]">Driven by precision, powered by experience. Meet the masters behind your image transformations.</p>
          </motion.div>

          <TeamGrid fadeIn={fadeIn} />
        </div>
      </section>

      {/* 7. CONTACT / REACH OUT */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-[10px] font-black mb-6 uppercase tracking-[3px] shadow-sm">Get In Touch</div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#011] mb-4">Our Studio: Dhaka, Bangladesh</h2>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
              <h3 className="text-xl font-extrabold text-[#011] mb-4 uppercase tracking-tighter text-center">Bangladesh HQ</h3>
              <div className="flex flex-col text-center">
                <span className="text-[#EE3A39] font-bold uppercase text-xs tracking-widest mb-1">Corporate Address</span>
                <span className="text-[#011] font-medium">House 560, Road 08, Adabor, Dhaka 1207, BD</span>
              </div>
              <div className="flex flex-col text-center">
                <span className="text-[#EE3A39] font-bold uppercase text-xs tracking-widest mb-1">Primary Support</span>
                <span className="text-[#011] font-medium">(+88) 019 24 482 868</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. READY TO WORK CTA */}
      <section className="py-24 bg-[#011] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-5">Ready to Work With Us?</h2>
          <p className="text-base font-bold text-gray-400 mb-10 max-w-2xl mx-auto">
            Start with 10 free images — no credit card needed. Experience the boutique quality that global brands trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/free-trial" 
              className="px-12 py-4 bg-[#EE3A39] text-white font-black rounded-2xl shadow-xl shadow-[#EE3A39]/20 hover:bg-black hover:-translate-y-1 transition-all duration-300 tracking-[3px] uppercase text-[10px]"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/contact" 
              className="px-12 py-4 border border-[#EE3A39]/50 text-[#EE3A39] font-black rounded-2xl hover:bg-[#EE3A39] hover:text-white transition-all duration-300 tracking-[3px] uppercase text-[10px]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Blackfox Digital",
            "url": "https://theblackfoxstudio.com",
            "foundingDate": "2016",
            "numberOfEmployees": "80",
            "description": "Professional image post-production studio helping global brands with high-volume photo editing and retouching.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "House 560, Road 08, Adabor",
              "addressLocality": "Dhaka",
              "addressCountry": "BD"
            },
            "telephone": "+8801924482868"
          })
        }}
      />
    </div>
  );
}

function TeamGrid() {
  const teamList = [
    { name: "S.M. Shakkhor", role: "Creative Director", avatar: "/about_studio_hero_1774785390263.png", bio: "Bridging the gap between high-volume production and boutique quality craftsmanship.", social: { twitter: "#", linkedin: "#", web: "#" } },
    { name: "Raihan Ahmed", role: "Production Head", avatar: "/expert_workflow_1774785408307.png", bio: "Defining the standard for pixel-perfect delivery across global e-commerce sectors.", social: { twitter: "#", linkedin: "#", web: "#" } },
    { name: "Nazmul H.", role: "QC Manager", avatar: "/about_studio_hero_1774785390263.png", bio: "Leading the multi-tier quality assurance team to ensure zero-revision accuracy.", social: { twitter: "#", linkedin: "#", web: "#" } },
    { name: "M. Islam", role: "Senior Retoucher", avatar: "/expert_workflow_1774785408307.png", bio: "Specializing in surgical precision for complex jewelry and high-fashion assets.", social: { twitter: "#", linkedin: "#", web: "#" } }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamList.map((member, idx) => (
        <TeamMemberCard key={idx} member={member} idx={idx} />
      ))}
    </div>
  );
}

function TeamMemberCard({ member, idx }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const social = member.social ? (typeof member.social === 'string' ? JSON.parse(member.social) : member.social) : {};

  return (
    <div 
      className="group perspective-1000 h-[450px] relative w-full"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="w-full h-full preserve-3d relative"
      >
        {/* FRONT: Image, Name, Role */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden border border-gray-100 shadow-sm z-20 bg-white"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <Image 
            src={member.avatar || "/logo.png"} 
            alt={member.name} 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            unoptimized
          />
          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#011] via-[#011]/80 to-transparent">
            <h4 className="text-white font-extrabold text-xl mb-1">{member.name}</h4>
            <p className="text-[#EE3A39] text-sm font-black uppercase tracking-[2px]">{member.role}</p>
          </div>
        </div>

        {/* BACK: Bio, Social Links */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#011] rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-[#EE3A39]/30 shadow-2xl z-10"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#EE3A39]/10 blur-[50px] rounded-full"></div>
          
          <h4 className="text-white font-extrabold text-xl mb-1">{member.name}</h4>
          <p className="text-[#EE3A39] text-xs font-black uppercase tracking-[2px] mb-4">{member.role}</p>
          <div className="w-12 h-1 bg-[#EE3A39] rounded-full mb-6"></div>
          
          <p className="text-gray-200 text-sm leading-relaxed mb-8 italic px-2">
            &quot;{member.bio || "Crafting world-class visual content with surgical precision."}&quot;
          </p>

          <div className="flex gap-4 items-center justify-center">
            {social && social.twitter && (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-[#EE3A39] transition-all">
                <Twitter size={18} />
              </a>
            )}
            {social && social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-[#EE3A39] transition-all">
                <Linkedin size={18} />
              </a>
            )}
            {social && social.web && (
              <a href={social.web} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-[#EE3A39] transition-all">
                <Globe size={18} />
              </a>
            )}
            {(!social || (!social.twitter && !social.linkedin && !social.web)) && (
               <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Connect with our team</span>
            )}
          </div>
          
          <div className="mt-8 text-[10px] text-[#EE3A39] font-black uppercase tracking-[3px] opacity-30">
            Blackfox Expert
          </div>
        </div>
      </motion.div>
    </div>
  );
}
