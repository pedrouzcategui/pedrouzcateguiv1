import path from "path";
import { getBaseDirectory } from "@/utils";
import { readdir } from "fs/promises";

const BlogPostsFolderName = "posts";

export function getPostsFolderPath(): string {
  return path.join(getBaseDirectory(), BlogPostsFolderName);
}

export async function getBlogPostObject(fileName: string): Promise<any> {
  try {
    return await import(`@/posts/${fileName}`);
  } catch (error) {
    console.log(`Error readingg post: ${fileName}`, error);
    return null;
  }
}

export async function getPosts(): Promise<any> {
  const postsFileNames = await readdir(getPostsFolderPath());
  try {
    const postsPromises = postsFileNames.map(
      async (fileName) => await getBlogPostObject(fileName)
    );
    const posts = await Promise.all(postsPromises);

    // Filter out failed imports
    const validPosts = posts.filter(Boolean);

    // Sort by metadata.date descending
    validPosts.sort((a: any, b: any) => {
      const ad = a?.metadata?.date ? new Date(a.metadata.date).getTime() : 0;
      const bd = b?.metadata?.date ? new Date(b.metadata.date).getTime() : 0;
      return bd - ad;
    });

    return validPosts;
  } catch (error) {
    console.log("Error fetching posts: ", error);
    return null;
  }
}
