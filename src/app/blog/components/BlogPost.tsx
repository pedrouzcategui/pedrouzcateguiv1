import Link from "next/link";

type BlogPostProps = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  tags?: string[];
};

const BlogPost = ({ date, title, excerpt, tags, slug }: BlogPostProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group block p-6 sm:p-8 border border-terciary rounded-lg hover:border-secondary hover:shadow-sm transition-all duration-200 ease-in-out cursor-pointer">
        {/* Date */}
        <div className="text-sm mb-3 font-medium">{date}</div>

        {/* Title */}
        <h2 className="text-2xl font-medium  mb-3 transition-colors">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="leading-relaxed">{excerpt}</p>

        {/* Tags */}

        {tags && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-terciary text-secondary text-xs font-semibold tracking-wide uppercase rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
};

export default BlogPost;
