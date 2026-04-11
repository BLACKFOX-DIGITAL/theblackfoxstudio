const BASE_URL = "https://theblackfoxstudio.com";

const posts = [
  {
    slug: "future-of-ecommerce-retouching",
    title: "The Future of E-commerce Retouching",
    excerpt:
      "How AI and manual precision are blending to create the ultimate post-production workflow for massive catalogs.",
    author: "Rafiqul Islam",
    tags: ["Ecommerce", "Strategy"],
  },
];

export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | BLACKFOX DIGITAL Blog",
      description: "This blog post does not exist.",
      robots: { index: false },
    };
  }

  return {
    title: `${post.title} | BLACKFOX DIGITAL Blog`,
    description: post.excerpt,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.slug}`,
      type: "article",
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostLayout({ children }) {
  return children;
}
