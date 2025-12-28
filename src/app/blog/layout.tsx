export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-primary font-sans text-secondary">
      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">{children}</main>
    </div>
  );
}
