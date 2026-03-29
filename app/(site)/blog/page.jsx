import Link from 'next/link';
import { ArrowRight, Search, Calendar, User } from 'lucide-react';

export const metadata = {
  title: 'Blog & Resources | Blackfox Digital',
  description: 'Expert insights on image post-production, eCommerce photography, and scaling your visual content.',
};

export default function BlogListPage() {
  // Static content for demonstration
  const posts = [
    { slug: 'future-of-ecommerce-retouching', title: 'The Future of E-commerce Retouching', excerpt: 'How AI and manual precision are blending to create the ultimate post-production workflow for massive catalogs.', author: { name: 'Rafiqul Islam' }, publishedAt: new Date(), tags: ['Ecommerce', 'Industry'] },
    { slug: 'ghost-mannequin-best-practices', title: 'Perfecting the Ghost Mannequin Effect', excerpt: 'Step-by-step guide on shooting and editing apparel for that clean, hollow 3D look retailers love.', author: { name: 'Sarah Jenkins' }, publishedAt: new Date(), tags: ['Tutorial', 'Apparel'] },
    { slug: 'when-to-outsource-editing', title: 'When Should You Outsource Your Photo Editing?', excerpt: 'Signs that your in-house team is bottle-necking your growth, and how to scale painlessly.', author: { name: 'Marcus Thorne' }, publishedAt: new Date(), tags: ['Business', 'Scaling'] },
    { slug: 'clipping-path-vs-masking', title: 'Clipping Path vs. Image Masking: Which One Do You Need?', excerpt: 'A comprehensive breakdown of when to use each technique for the best results in product photography.', author: { name: 'Admin' }, publishedAt: new Date(), tags: ['Technical', 'Tutorial'] },
  ];
  
  const totalPages = 1;
  const page = 1;
  const category = 'All';

  const categories = ['All', 'Ecommerce', 'Tutorial', 'Industry', 'Business', 'Apparel'];

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#011] pb-24">
      
      {/* 1. Header & Search */}
      <section className="relative pt-32 pb-24 border-b border-gray-200 overflow-hidden bg-white">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#EE3A39]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 bg-[#EE3A39]/10 border border-[#EE3A39]/20 text-[#EE3A39] rounded-full text-sm font-bold mb-6 uppercase tracking-widest shadow-sm">
            Blog & Resources
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter text-[#011] drop-shadow-sm leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3A39] to-orange-500">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#626262] leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
            Expert strategies, retouching tutorials, and business advice for scaling your visual content production.
          </p>
          
          <div className="max-w-xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#EE3A39] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white border border-gray-200 rounded-full py-4 pl-14 pr-6 text-[#011] focus:outline-none focus:border-[#EE3A39] focus:ring-4 focus:ring-[#EE3A39]/10 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-sm font-medium"
            />
          </div>
        </div>
      </section>

      {/* 2. Content Area */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-[1400px]">
          
          <div className="flex flex-col max-w-6xl mx-auto">
            
            {/* Grid */}
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                  <Link href={`/blog/${post.slug}`} key={idx} className="group bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_rgba(238,58,57,0.08)] hover:-translate-y-2 border border-gray-100 transition-all duration-500 flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                    
                    {/* Fake Image Container */}
                    <div className="w-full h-56 bg-[#F8F8F8] relative overflow-hidden border-b border-gray-100 flex-shrink-0">
                       <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-lg uppercase tracking-widest group-hover:scale-105 group-hover:text-gray-400 transition-all duration-700">Cover Image</div>
                       {post.tags && post.tags.length > 0 && (
                         <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[0.65rem] font-bold px-3 py-1.5 rounded-full text-[#EE3A39] uppercase tracking-wider shadow-sm border border-gray-200 z-10">
                           {post.tags[0]}
                         </div>
                       )}
                    </div>
                    
                    <div className="p-8 flex flex-col flex-1">
                      <h2 className="text-xl font-extrabold text-[#011] mb-3 group-hover:text-[#EE3A39] transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-[#626262] mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                        {post.excerpt || 'Read this complete guide to understand the industry standards for pristine image retouching...'}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-6 border-t border-gray-100 font-medium">
                        <div className="flex items-center gap-4">
                           <span className="flex items-center gap-1.5"><User size={14} className="text-[#EE3A39]"/> <span className="text-[#626262]">{post.author?.name || 'Admin'}</span></span>
                           <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#EE3A39]"/> <span className="text-[#626262]">{new Date(post.publishedAt || Date.now()).toLocaleDateString()}</span></span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-16 font-medium">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <Link
                      key={i}
                      href={`/blog?page=${i + 1}${category ? '&category=' + category : ''}`}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm transition-all shadow-sm ${
                        page === i + 1 
                          ? 'bg-[#EE3A39] text-white font-bold shadow-md' 
                          : 'bg-white text-[#626262] border border-gray-200 hover:border-[#EE3A39] hover:text-[#EE3A39]'
                      }`}
                    >
                      {i + 1}
                    </Link>
                  ))}
                  {page < totalPages && (
                     <Link href={`/blog?page=${page + 1}${category ? '&category=' + category : ''}`} className="px-5 h-10 rounded-xl bg-white text-[#626262] border border-gray-200 flex items-center hover:border-[#EE3A39] hover:text-[#EE3A39] transition-all text-sm shadow-sm font-bold tracking-wide">
                       Next <ArrowRight size={16} className="ml-2" />
                     </Link>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
