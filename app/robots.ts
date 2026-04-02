import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/order", "/get-quote", "/api/"],
      },
    ],
    sitemap: "https://theblackfoxstudio.com/sitemap.xml",
    host: "https://theblackfoxstudio.com",
  };
}
