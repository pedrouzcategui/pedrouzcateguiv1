export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-primary font-sans text-secondary">
      <main className="w-[80%] mx-auto pt-16 pb-24">{children}</main>
    </div>
  );
}
