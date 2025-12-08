import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { getBaseDirectory } from "@/utils";
import { readdir } from "fs/promises";

const BlogPostsFolderName = "posts";

export function getPostsFolderPath(): string {
  return path.join(getBaseDirectory(), BlogPostsFolderName);
}

export async function getBlogPostObject(fileName: string): Promise<any> {
  // 2. Go to the POSTS folder
  try {
    return await import(`@/posts/${fileName}`);
  } catch (error) {
    console.log(`Error readingg post: ${fileName}`, error);
    return null;
  }
}

type Post = {
  slug: string;
  date: string;
  title: string;
};

export async function getPosts(): Promise<any> {
  const postsFileNames = await readdir(getPostsFolderPath());
  try {
    const postsPromises = postsFileNames.map(
      async (fileName) => await getBlogPostObject(fileName)
    );
    const posts = await Promise.all(postsPromises);
    return posts;
  } catch (error) {
    console.log("Error fetching posts: ", error);
    return null;
  }
}
