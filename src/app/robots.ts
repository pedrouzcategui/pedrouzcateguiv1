import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"], // Protect your private folders and API routes
    },
    sitemap: "https://pedrouzcategui.com/sitemap.xml",
  };
}
