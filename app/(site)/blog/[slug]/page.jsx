import Link from 'next/link';
import { Calendar, User, Share2, Tag, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }) {
  return {
    title: `${params.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} | Blackfox Digital`,
    description: 'Expert insights on image post-production and eCommerce photography.',
  };
}

export default function BlogPostPage({ params }) {
  const posts = [
    { 
      slug: 'future-of-ecommerce-retouching', 
      title: 'The Future of E-commerce Retouching', 
      content: `<h2>The Rise of AI in Post Production</h2>\n<p>As the volume of e-commerce imagery explodes, studios are forced to adopt faster pipelines. While AI tools can assist with basic extractions, the discerning eye of a professional retoucher remains irreplaceable for high-end fashion and complex products.</p>\n<h3>Maintaining Consistency</h3>\n<p>It is not just about editing one photo perfectly. It is about editing 1,000 photos so they all share the exact same lighting, color grading, and margin styling. That is where a managed pipeline drastically outperforms disjointed freelancer networks.</p>`,
      excerpt: 'How AI and manual precision are blending to create the ultimate post-production workflow for massive catalogs.', 
      author: { name: 'Rafiqul Islam', role: 'CEO' }, 
      publishedAt: new Date(), 
      tags: ['Ecommerce', 'Industry'] 
    },
    { 
      slug: 'ghost-mannequin-best-practices', 
      title: 'Perfecting the Ghost Mannequin Effect', 
      content: `<h2>Mastering the Invisible Mannequin</h2>\n<p>Ghost mannequin editing is essential for any modern apparel retailer. It provides a clean, 3D look that helps customers visualize the garment on themselves without the distraction of a physical mannequin.</p>`,
      excerpt: 'Step-by-step guide on shooting and editing apparel for that clean, hollow 3D look retailers love.', 
      author: { name: 'Sarah Jenkins', role: 'Quality Lead' }, 
      publishedAt: new Date(), 
      tags: ['Tutorial', 'Apparel'] 
    },
  ];

  const post = posts.find(p => p.slug === params.slug) || posts[0];
  const related = posts.filter(p => p.slug !== params.slug);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20">
      
      {/* 1. Article Header */}
      <div className="container mx-auto px-4 max-w-4xl mb-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        
        <div className="flex gap-2 mb-6">
          {post.tags && post.tags.map(tag => (
            <span key={tag} className="text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.15]">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/10 text-gray-400 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center font-bold text-orange-500">
              {post.author?.name ? post.author.name[0] : 'U'}
            </div>
            <div>
              <p className="font-bold text-white leading-none mb-1">{post.author?.name || 'BFS Editor'}</p>
              <p className="text-xs">{post.author?.role || 'Staff'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <Calendar size={16} className="text-gray-500"/>
             <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
          <button className="flex items-center gap-2 ml-auto text-white hover:text-orange-500 transition-colors bg-white/5 px-4 py-2 rounded-lg font-medium border border-white/5">
             <Share2 size={16} /> Share
          </button>
        </div>
      </div>

      {/* 2. Article Body */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          
          {/* Main Content */}
          <article className="w-full lg:w-2/3 prose prose-invert prose-orange max-w-none">
            {/* Using dangerouslySetInnerHTML for raw HTML content from standard WYSIWYG editors */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-gray-300 leading-relaxed space-y-6 text-lg" />
            
            {/* Standard styles conceptually applying to the raw HTML tags via pure Tailwind / CSS nesting */}
            <style dangerouslySetInnerHTML={{__html: `
              article h2 { font-size: 2rem; font-weight: 800; color: white; margin-top: 2.5rem; margin-bottom: 1.5rem; }
              article h3 { font-size: 1.5rem; font-weight: 700; color: white; margin-top: 2rem; margin-bottom: 1rem; }
              article p { margin-bottom: 1.5rem; color: #a1a1aa; }
              article ul { list-style-type: disc; padding-left: 1.5rem; color: #a1a1aa; margin-bottom: 1.5rem; }
              article li { margin-bottom: 0.5rem; }
            `}} />
            
            <div className="mt-16 pt-8 border-t border-white/10">
               <div className="flex items-center gap-3 text-gray-400">
                 <Tag size={18} />
                 <span className="font-bold text-white text-sm">Tags:</span>
                 {post.tags?.map(t => <span key={t} className="text-sm cursor-pointer hover:text-orange-500 transition-colors">{t}</span>)}
               </div>
            </div>
          </article>

          {/* Sidebar / TOC */}
          <aside className="w-full lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              
              {/* Table of Contents Box */}
              <div className="bg-[#111] border border-white/5 p-8 rounded-2xl">
                <h3 className="font-bold text-xl text-white mb-6 border-b border-white/10 pb-4">In This Article</h3>
                <ul className="space-y-3 text-sm font-medium text-gray-400">
                  <li className="hover:text-orange-500 cursor-pointer transition-colors">The Rise of AI in Post Production</li>
                  <li className="hover:text-orange-500 cursor-pointer transition-colors">Maintaining Consistency</li>
                  <li className="hover:text-orange-500 cursor-pointer transition-colors">Scaling the Catalog Operations</li>
                  <li className="hover:text-orange-500 cursor-pointer transition-colors">Final Thoughts</li>
                </ul>
              </div>

              {/* Related Posts Widget */}
              <div className="bg-[#1A1A1A] border border-white/5 p-6 rounded-2xl shadow-xl">
                <h3 className="font-bold text-white mb-6">Related Reads</h3>
                <div className="space-y-6 text-sm">
                  {related.map((rel, idx) => (
                    <Link key={idx} href={`/blog/${rel.slug}`} className="block group">
                      <h4 className="font-semibold text-gray-300 group-hover:text-orange-500 transition-colors leading-tight mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-gray-500 text-xs">By {rel.author?.name} • {new Date(rel.publishedAt).toLocaleDateString()}</p>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* 3. Bottom CTA */}
      <section className="container mx-auto px-4 max-w-4xl mt-32">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
           <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Stop reading. Start scaling.</h2>
              <p className="text-lg mb-8 font-medium text-white/90">Experience the difference a professional post-production team can make. Try our service loop today, totally free.</p>
              <Link href="/free-trial" className="inline-block bg-white text-orange-600 font-extrabold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105 active:scale-95 text-lg">
                Try Our Service Free
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
}
