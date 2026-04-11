"use client";
import React from "react";
import Link from 'next/link';
import { 
  Calendar, User, Share2, Tag, ArrowLeft, Clock, 
  MessageSquare, ChevronRight, Zap, Target, Layers, 
  BookOpen, Bookmark, TrendingUp, Facebook, 
  Twitter, Linkedin
} from 'lucide-react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BlogPostPage({ params: paramsPromise }) {
  const params = React.use(paramsPromise);
  const posts = [
    { 
      slug: 'future-of-ecommerce-retouching', 
      title: 'The Future of E-commerce Retouching', 
      content: `
        <p class="lead">The landscape of digital commerce is undergoing a seismic shift. As we venture further into 2026, the intersection of human artistry and machine intelligence is redefining what "perfect" looks like in the commercial frame.</p>
        
        <h2>The Rise of AI in Post Production</h2>
        <p>As the volume of e-commerce imagery explodes, studios are forced to adopt faster pipelines. While AI tools can assist with basic extractions, the discerning eye of a professional retoucher remains irreplaceable for high-end fashion and complex products. We are seeing a move toward <strong>"Hybrid Retouching"</strong>, where machine learning handles the heavy lifting of mask generation, while master editors focus on texture preservation and high-frequency skin work.</p>
        
        <blockquote>
          "In the future, the value of a retouching studio won't be measured by its speed, but by its ability to maintain a 'human soul' in an automated world."
        </blockquote>

        <h3>Maintaining Consistency at Scale</h3>
        <p>It is not just about editing one photo perfectly. It is about editing 1,000 photos so they all share the exact same lighting, color grading, and margin styling. That is where a managed pipeline drastically outperforms disjointed freelancer networks. For global brands, 1% inconsistency in a catalog can equate to a 15% drop in consumer trust.</p>
        
        <h3>The 2026 Visual Standard</h3>
        <p>Consumers are demanding more than just "clean" images. They want to see <strong>tactile reality</strong>. This means retouching that doesn't just remove flaws, but enhances the garment's narrative—the way light catches a silk thread or the authentic grain of premium leather.</p>
      `,
      excerpt: 'How AI and manual precision are blending to create the ultimate post-production workflow for massive catalogs.', 
      author: { name: 'Rafiqul Islam', role: 'CEO' }, 
      publishedAt: new Date(), 
      tags: ['Ecommerce', 'Strategy'] 
    }
  ];

  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#F8F8F8] flex flex-col items-center justify-center text-center px-4 py-32">
        <p className="text-[10px] font-black uppercase tracking-[3px] text-[#EE3A39] mb-4">404 — Not Found</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#011] tracking-tighter mb-6 uppercase">This post doesn&apos;t exist yet.</h1>
        <p className="text-base font-bold text-[#626262] mb-10 max-w-md">More expert guides are coming soon. In the meantime, explore our existing resources.</p>
        <Link href="/blog" className="px-8 py-4 bg-[#EE3A39] text-white font-black uppercase tracking-[3px] text-[10px] rounded-2xl hover:-translate-y-1 transition-all flex items-center gap-2">
          Back to Blog <ArrowLeft size={14} />
        </Link>
      </main>
    );
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "BLACKFOX DIGITAL",
      logo: {
        "@type": "ImageObject",
        url: "https://theblackfoxstudio.com/logo.png",
      },
    },
    datePublished: post.publishedAt instanceof Date
      ? post.publishedAt.toISOString()
      : new Date().toISOString(),
    url: `https://theblackfoxstudio.com/blog/${post.slug}`,
    mainEntityOfPage: `https://theblackfoxstudio.com/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="min-h-screen bg-white text-[#011] selection:bg-brandPrimary/10 selection:text-brandPrimary font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* 1. Clean, Minimal Header */}
      <section className="relative pt-40 pb-20 border-b border-gray-100 bg-grayLight/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
             <span className="px-3 py-1 bg-brandPrimary/5 text-brandPrimary rounded-full text-[10px] font-black uppercase tracking-[2px] shadow-sm">
                Knowledge Base
             </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-[#011] leading-tight uppercase"
          >
            {post.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-black uppercase tracking-[2px] text-gray-400"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brandPrimary rounded-full flex items-center justify-center text-white text-[10px] shadow-lg">
                {post.author?.name ? post.author.name[0] : 'R'}
              </div>
              <span className="text-[#011]">{post.author?.name}</span>
            </div>
            <div className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
            <div className="flex items-center gap-2">
               <Calendar size={14} className="text-brandPrimary"/>
               <span>{new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
            <div className="flex items-center gap-2">
               <Clock size={14} className="text-brandPrimary"/>
               <span>8 Min Read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Focused Reading Area */}
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-brandPrimary text-[10px] font-black uppercase tracking-[2px] transition-all group">
             <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Local Knowledge Base
          </Link>
        </motion.div>

        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="prose prose-lg max-w-none prose-brand font-medium"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-[#333] leading-relaxed space-y-10" />
          
          <style dangerouslySetInnerHTML={{__html: `
            .lead { font-size: 1.5rem; color: #011; font-weight: 800; line-height: 1.4; border-left: 4px solid #EE3A39; padding-left: 1.5rem; margin-bottom: 3.5rem; text-transform: uppercase; letter-spacing: -0.04em; }
            article h2 { font-size: 2.25rem; font-weight: 900; color: #011; margin-top: 4.5rem; margin-bottom: 2rem; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1.1; }
            article h3 { font-size: 1.5rem; font-weight: 800; color: #011; margin-top: 3.5rem; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: -0.02em; }
            article p { margin-bottom: 2rem; color: #444; font-weight: 500; line-height: 1.9; font-size: 1.125rem; }
            article strong { color: #011; font-weight: 800; }
            article blockquote { background: #F8F8F8; padding: 2.5rem; border-radius: 1.5rem; border-left: none; margin: 3.5rem 0; text-align: center; quote: none; }
            article blockquote p { font-size: 1.35rem !important; color: #011 !important; font-weight: 800 !important; font-style: italic; margin-bottom: 0 !important; line-height: 1.5 !important; }
            article blockquote::before { content: "“"; font-size: 4rem; color: #EE3A39; opacity: 0.3; display: block; height: 1.5rem; margin-bottom: 0.5rem; font-family: serif; }
          `}} />

          {/* Social Share / Tags */}
          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[2px] text-gray-300">Classified:</span>
                {post.tags?.map(t => (
                  <span key={t} className="px-4 py-1.5 bg-grayLight text-[9px] font-black uppercase tracking-[1px] text-[#011] rounded-lg">
                     {t}
                  </span>
                ))}
             </div>
             <div className="flex items-center gap-4">
                <p className="text-[10px] font-black uppercase tracking-[2px] text-gray-300">Propagate:</p>
                <div className="flex gap-2">
                   {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                     <button key={i} className="w-9 h-9 rounded-full bg-grayLight flex items-center justify-center text-[#011] hover:bg-brandPrimary hover:text-white transition-all shadow-sm">
                        <Icon size={14} />
                     </button>
                   ))}
                </div>
             </div>
          </div>
        </motion.article>

        {/* 3. Simplified CTA */}
        <div className="mt-32 p-12 bg-[#011] rounded-[2.5rem] text-white text-center shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-brandPrimary/10 blur-[60px] rounded-full group-hover:scale-150 transition-all duration-1000" />
           <p className="text-[10px] font-black uppercase tracking-[4px] text-brandPrimary mb-4">End of Report</p>
           <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Need Absolute Scaling?</h3>
           <p className="text-white/60 text-lg font-bold mb-10 max-w-md mx-auto">Skip the theory. Experience the definitive results of a boutique post-production team today.</p>
           <div className="flex flex-wrap justify-center gap-4">
              <Link href="/free-trial" className="bg-brandPrimary hover:bg-white hover:text-brandPrimary text-white px-10 py-5 rounded-2xl font-black text-[10px] tracking-[4px] uppercase transition-all shadow-xl shadow-brandPrimary/20">
                 Request Pilot Batch
              </Link>
           </div>
        </div>
      </div>

    </div>
  );
}

