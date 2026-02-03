export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-primary font-sans text-secondary">
      <main className="w-[95%] mx-auto pt-16 pb-24">{children}</main>
    </div>
  );
}
