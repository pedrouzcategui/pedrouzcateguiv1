import { getBlogPostObject } from "@/lib/posts.plugin";

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const fileName = `${slug}.mdx`;
  const { default: Post, metadata } = await getBlogPostObject(fileName);

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">{metadata.title}</h1>
      <span className="block mb-6">{metadata.date}</span>
      <span className="block mb-6">{metadata.author}</span>
      <Post />
    </>
  );
};

export default BlogPage;
