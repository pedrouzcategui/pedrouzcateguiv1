import Navbar from "@/components/Navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-primary font-sans text-secondary">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-16 pb-24">{children}</main>
    </div>
  );
}
