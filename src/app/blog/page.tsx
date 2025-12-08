import { getPosts } from "@/lib/posts.plugin";
import BlogPost from "./components/BlogPost";
import { metadata } from "../layout";

const posts = [
  {
    id: 1,
    date: "November 5, 2025",
    title: "Which pokemons are broken, from a data viewpoint.",
    excerpt:
      "Understanding pseudo-legendaries, and making the best Hoenn team using data.",
    tags: ["Python", "Pandas", "Jupyter Notebook"],
    slug: "broken-pokemon",
  },
  {
    id: 2,
    date: "October 20, 2025",
    title:
      "I am tired of mediocre DJs, so I made a DJ app that automatically shuffles your songs properly",
    excerpt: "I am getting hate for this one",
    tags: ["SFML", "C++", "STRUDEL"],
    slug: "broken-pokemon",
  },
  {
    id: 3,
    date: "October 9, 2025",
    title:
      "Improving your English accent and why is critical to make more money",
    excerpt:
      "If you are not american, or have not been born in Europe, you probably need to read this one.",
    slug: "broken-pokemon",
  },
];

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
