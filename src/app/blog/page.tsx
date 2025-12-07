import BlogPost from "./components/BlogPost";

// 1. Define the data structure to match the image content
const posts = [
  {
    id: 1,
    date: "November 5, 2025",
    title: "Which pokemons are broken, from a data viewpoint.",
    excerpt:
      "Understanding pseudo-legendaries, and making the best Hoenn team using data.",
    tags: ["Python", "Pandas", "Jupyter Notebook"],
  },
  {
    id: 2,
    date: "October 20, 2025",
    title:
      "I am tired of mediocre DJs, so I made a DJ app that automatically shuffles your songs properly",
    excerpt: "I am getting hate for this one",
    tags: ["SFML", "C++", "STRUDEL"],
  },
  {
    id: 3,
    date: "October 9, 2025",
    title:
      "Improving your English accent and why is critical to make more money",
    excerpt:
      "If you are not american, or have not been born in Europe, you probably need to read this one.",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-medium mb-6 tracking-tight">Blog</h1>
        <p className="text-lg leading-relaxed max-w-xl mx-auto">
          Thoughts on development, cloud design, and the ever-evolving backend,
          infrastructure and devops topics
        </p>
      </header>

      {/* Blog Post List */}
      <div className="space-y-6">
        {posts.map((post) => (
          <BlogPost {...post} key={post.id} />
        ))}
      </div>
    </>
  );
}
