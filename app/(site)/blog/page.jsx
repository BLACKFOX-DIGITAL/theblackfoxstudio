import BlogClient from './BlogClient';

export const metadata = {
  title: "Image Editing Blog & Resources | BLACKFOX DIGITAL",
  description: "Explore BLACKFOX DIGITAL's image editing blog for expert tutorials, retouching tips and e-commerce photography guides. Learn from 80+ professional editors.",
  alternates: { canonical: "https://theblackfoxstudio.com/blog" },
  openGraph: {
    title: "Image Editing Blog & Resources | BLACKFOX DIGITAL",
    description: "Expert tutorials, retouching tips and e-commerce photography guides from BLACKFOX DIGITAL's 80+ professional editors.",
    url: "https://theblackfoxstudio.com/blog",
    type: "website",
  },
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
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BLACKFOX DIGITAL Blog",
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
