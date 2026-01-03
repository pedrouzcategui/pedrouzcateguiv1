import { getBlogPostObject } from "@/lib/posts.plugin";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props) {
  // 1. Await the params to get the slug
  const { slug } = await params;
  const fileName = `${slug}.mdx`;

  // 2. Fetch the actual metadata from your MDX file
  // We wrap this in a try/catch in case the file name doesn't exist
  try {
    const { metadata } = await getBlogPostObject(fileName);

    return {
      title: `${metadata.title} | Pedro Uzcátegui`,
      description: metadata.description || `Read more about ${metadata.title}`,
      alternates: {
        canonical: `https://pedrouzcategui.com/blog/${slug}`,
      },
      openGraph: {
        title: metadata.title,
        description: metadata.description,
        type: "article",
        publishedTime: metadata.date, // Uses the date from your MDX frontmatter
        authors: [metadata.author || "Pedro Uzcátegui"],
      },
    };
  } catch (error) {
    // Fallback metadata if the file isn't found
    return {
      title: "Post Not Found | Pedro Uzcátegui",
    };
  }
}

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const fileName = `${slug}.mdx`;

  // This call is cached by Next.js, so it doesn't repeat the file-read
  // performed in generateMetadata
  const { default: Post, metadata } = await getBlogPostObject(fileName);

  return (
    <article className="max-w-2xl mx-auto py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        <div className="text-gray-500 text-sm">
          <span>{metadata.date}</span>
          <span className="mx-2">•</span>
          <span>{metadata.author}</span>
        </div>
      </header>

      {/* The actual MDX content */}
      <div className="prose lg:prose-xl">
        <Post />
      </div>
    </article>
  );
};

export default BlogPage;
