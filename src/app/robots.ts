import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/privacy-policy",
      },
    ],
    sitemap: "https://herziacademy.com/sitemap.xml",
  };
}
