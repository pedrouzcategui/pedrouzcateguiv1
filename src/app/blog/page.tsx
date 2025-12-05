import Link from "next/link";
import BlogPost from "./components/BlogPost";
import Navbar from "@/components/Navbar";

// 1. Define the data structure to match the image content
const posts = [
  {
    id: 1,
    date: "November 5, 2025",
    title: "How to Implement a MultiWriter logger in Golang",
    excerpt:
      "Learn step by step how to create a MultiWriter logger in Golang to write logs to multiple destinations simultaneously using slog.",
    tags: ["GOLANG"],
  },
  {
    id: 2,
    date: "October 20, 2025",
    title: "Create your first Docker image",
    excerpt:
      "Learn how to containerize your application by building your first Docker image.",
    tags: ["CONTAINERS", "DOCKER", "GOLANG"],
  },
  {
    id: 3,
    date: "October 9, 2025",
    title: "Setting up a Kafka event broker with producers and consumers",
    excerpt:
      "A comprehensive guide on setting up a Kafka environment and connecting your first producers and consumers.",
    tags: ["KAFKA", "GO", "EVENT-DRIVEN"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-primary font-sans text-secondary">
      {/* --- Navbar --- */}
      <Navbar />
      {/* --- Main Content --- */}
      <main className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-medium mb-6 tracking-tight">Blog</h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto">
            Thoughts on development, cloud design, and the ever-evolving
            backend, infrastructure and devops topics
          </p>
        </header>

        {/* Blog Post List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <BlogPost {...post} key={post.id} />
          ))}
        </div>
      </main>
    </div>
  );
}
