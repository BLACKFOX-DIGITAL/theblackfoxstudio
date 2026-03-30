"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Search, Calendar, User, Clock, Star } from "lucide-react";

export default function BlogClient({ initialPosts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tutorial", "Business", "Technical", "Ecommerce"];

  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || post.tags.includes(activeCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, initialPosts]);

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#011] pb-24">
      
      {/* 1. Header & Search Area */}
      <section className="relative pt-24 pb-16 border-b border-gray-200 overflow-hidden bg-white">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#EE3A39] transition-colors">Home</Link>
            <ArrowRight size={10} className="text-gray-300" />
            <span className="text-[#EE3A39]">Blog</span>
          </nav>

          <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-xs font-bold mb-4 uppercase tracking-widest shadow-sm">
            Blog & Resources
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-5 tracking-tighter text-[#011] leading-none uppercase">
            Image Editing Blog — <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">Tips, Tutorials & Insights</span>
          </h1>
          <p className="text-base md:text-lg text-[#011] leading-relaxed font-bold mb-10 max-w-3xl mx-auto">
            Expert image editing tutorials, retouching tips and e-commerce photography guides from our team of 80+ professional editors.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-[2px] transition-all ${
                  activeCategory === cat 
                    ? "bg-[#EE3A39] text-white shadow-md shadow-[#EE3A39]/20 scale-105" 
                    : "bg-white text-[#626262] border border-gray-100 hover:border-[#EE3A39]/30 hover:text-[#EE3A39]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative group">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#EE3A39] transition-colors" size={16} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..." 
              className="w-full bg-white border border-gray-200 rounded-full py-3.5 pl-12 pr-6 text-[#011] focus:outline-none focus:border-[#EE3A39] focus:ring-4 focus:ring-[#EE3A39]/10 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-xs font-bold"
            />
          </div>
        </div>
      </section>

      {/* 2. Content Area */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-[1400px]">
          
          <div className="flex flex-col max-w-7xl mx-auto">
            
            {/* Grid */}
            <div className="w-full">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-gray-200">
                  <Search size={48} className="mx-auto text-gray-200 mb-4" />
                  <h3 className="text-xl font-bold text-[#011]">No articles found</h3>
                  <p className="text-[#626262]">Try adjusting your search or category filter.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, idx) => (
                    <Link href={`/blog/${post.slug}`} key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden hover:shadow-[0_30px_60px_rgba(238,58,57,0.1)] hover:-translate-y-2 border border-gray-100 transition-all duration-500 flex flex-col h-full shadow-sm relative">
                      
                      {/* Image Container */}
                      <div className="w-full h-52 relative overflow-hidden flex-shrink-0">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                        />
                         <div className="absolute top-4 left-4 bg-[#EE3A39] text-[10px] font-black px-3 py-1.5 rounded-full text-white uppercase tracking-wider z-10">
                           {post.tags[0]}
                         </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest"><Clock size={12} className="text-[#EE3A39]"/> {post.readTime}</span>
                        </div>

                        <h2 className="text-xl font-black text-[#011] mb-3 group-hover:text-[#EE3A39] transition-colors leading-tight line-clamp-3 uppercase">
                          {post.title}
                        </h2>
                        <p className="text-[#626262] mb-8 line-clamp-3 text-xs leading-relaxed flex-1 font-medium">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-[10px] text-gray-400 mt-auto pt-6 border-t border-gray-100 font-black uppercase tracking-widest">
                             <span className="flex items-center gap-1.5"><User size={13} className="text-[#EE3A39]"/> {post.author?.name}</span>
                             <span className="flex items-center gap-1.5"><Calendar size={13} className="text-[#EE3A39]"/> {post.publishedAt}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA BOTTOM */}
      <section className="py-24 bg-white border-t border-gray-100 mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[#EE3A39]/5 blur-[150px] rounded-full pointer-events-none translate-x-1/4"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-[#EE3A39]/10 text-[#EE3A39] flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Star size={32} className="fill-[#EE3A39]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#011] mb-6 tracking-tighter uppercase">Ready to transform your images?</h2>
          <p className="text-xl text-[#011] mb-10 font-bold">
            Start with 10 free images — no credit card needed. Experience the quality difference today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/free-trial" className="px-12 py-5 bg-[#EE3A39] text-white font-black rounded-2xl text-sm uppercase tracking-[3px] hover:bg-black hover:-translate-y-1 transition-all shadow-[0_10px_20px_rgba(238,58,57,0.2)] hover:shadow-[0_15px_30px_rgba(238,58,57,0.3)]">
               Start Free Trial
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
