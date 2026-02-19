import { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";
import { getProgrammingChallenges } from "@/lib/programming-challenges";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://pedrouzcategui.com";

  // 1. Get all MDX files
  const postsDirectory = path.join(process.cwd(), "posts");
  let blogPosts: MetadataRoute.Sitemap = [];

  try {
    const filenames = await fs.readdir(postsDirectory);
    blogPosts = filenames
      .filter((file) => file.endsWith(".mdx"))
      .map((filename) => ({
        url: `${baseUrl}/blog/${filename.replace(".mdx", "")}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const, // 'as const' ensures literal type matching
        priority: 0.7,
      }));
  } catch (error) {
    console.error("Could not read posts directory for sitemap", error);
  }

  // 2. Main static routes
  const routes: MetadataRoute.Sitemap = [
    "",
    "/blog",
    "/programming-challenges",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  // 3. Programming challenges
  let programmingChallenges: MetadataRoute.Sitemap = [];
  try {
    const challenges = await getProgrammingChallenges();
    programmingChallenges = challenges.map((c) => ({
      url: `${baseUrl}/programming-challenges/${c.number}/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Could not read programming challenges for sitemap", error);
  }

  return [...routes, ...blogPosts, ...programmingChallenges];
}
