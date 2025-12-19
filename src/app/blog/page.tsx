import { getPosts } from "@/lib/posts.plugin";
import BlogPost from "./components/BlogPost";

export type PostMetadata = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export default async function BlogPage() {
  const postsx = await getPosts();
  console.log(postsx);
  return (
    <>
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-medium mb-6 tracking-tight">Blog</h1>
      </header>

      {/* Blog Post List */}
      <div className="space-y-6">
        {postsx.map(
          ({
            default: _,
            metadata,
          }: {
            default: any;
            metadata: PostMetadata;
          }) => (
            <BlogPost {...metadata} key={metadata.id} />
          )
        )}
      </div>
    </>
  );
}
