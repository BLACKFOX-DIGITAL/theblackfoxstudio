import BlogClient from './BlogClient';

export const metadata = {
  title: "Image Editing Blog & Resources | Blackfox Digital",
  description: "Explore Blackfox Digital's image editing blog for expert tutorials, retouching tips and e-commerce photography guides. Learn from 80+ professional editors.",
};

export default function BlogListPage() {
  const posts = [
    { 
      slug: 'future-of-ecommerce-retouching', 
      title: 'The Future of E-commerce Retouching', 
      excerpt: 'How AI and manual precision are blending to create the ultimate post-production workflow for massive catalogs.', 
      author: { name: 'Rafiqul Islam' }, 
      publishedAt: '2023-11-20', 
      tags: ['Ecommerce'],
      readTime: '6 min read',
      image: '/ECommerce-Done.jpg'
    },
    { 
      slug: 'ghost-mannequin-best-practices', 
      title: 'Perfecting the Ghost Mannequin Effect', 
      excerpt: 'Step-by-step guide on shooting and editing apparel for that clean, hollow 3D look retailers love.', 
      author: { name: 'Sarah Jenkins' }, 
      publishedAt: '2023-11-18', 
      tags: ['Tutorial'],
      readTime: '8 min read',
      image: '/Ghost-Mannequin-2-Done.jpg'
    },
    { 
      slug: 'when-to-outsource-editing', 
      title: 'When Should You Outsource Your Photo Editing?', 
      excerpt: 'Signs that your in-house team is bottle-necking your growth, and how to scale painlessly.', 
      author: { name: 'Marcus Thorne' }, 
      publishedAt: '2023-11-15', 
      tags: ['Business'],
      readTime: '5 min read',
      image: '/expert_workflow_1774785408307.png'
    },
    { 
      slug: 'clipping-path-vs-masking', 
      title: 'Clipping Path vs. Image Masking: Which One Do You Need?', 
      excerpt: 'A comprehensive breakdown of when to use each technique for the best results in product photography.', 
      author: { name: 'Admin' }, 
      publishedAt: '2023-11-10', 
      tags: ['Technical'],
      readTime: '7 min read',
      image: '/Masking-Retouch-Done.jpg'
    },
    {
      title: "How to Prepare Product Images for Amazon Listings",
      slug: "amazon-product-image-guide",
      tags: ["Ecommerce"],
      author: { name: "Admin" },
      publishedAt: "2023-11-05",
      readTime: "5 min read",
      excerpt: "Everything you need to know about Amazon's strict image requirements and how to meet them.",
      image: "/ECommerce.jpg"
    },
    {
      title: "Color Correction vs Color Grading: What's the Difference?",
      slug: "color-correction-vs-grading",
      tags: ["Technical"],
      author: { name: "Admin" },
      publishedAt: "2023-11-02",
      readTime: "6 min read",
      excerpt: "Two terms often confused but very different in practice. Learn when to use each technique.",
      image: "/Color-Change-Done.jpg"
    },
    {
      title: "How Much Does Professional Photo Editing Cost in 2025?",
      slug: "photo-editing-cost-guide",
      tags: ["Business"],
      author: { name: "Admin" },
      publishedAt: "2023-10-30",
      readTime: "4 min read",
      excerpt: "A complete pricing guide for background removal, retouching, and post-production services.",
      image: "/photo_editing_pricing_guide_blog_cover_1774826080034.png"
    },
    {
      title: "Ghost Mannequin vs Flat Lay: Which is Better for Fashion?",
      slug: "ghost-mannequin-vs-flat-lay",
      tags: ["Tutorial"],
      author: { name: "Admin" },
      publishedAt: "2023-10-25",
      readTime: "7 min read",
      excerpt: "Comparing two of the most popular fashion photography styles to help you choose the right one.",
      image: "/Flatlay-1-Done.jpg"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blackfox Digital Blog",
    "description": "Image editing tips, tutorials and industry insights",
    "url": "https://theblackfoxstudio.com/blog"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient initialPosts={posts} />
    </>
  );
}
