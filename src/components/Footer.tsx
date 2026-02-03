export default function Footer() {
  return (
    <footer className="relative text-center py-6 pb-4 bg-[var(--background)] text-[var(--foreground)] border-t border-[rgba(255,255,255,0.04)]">
      <p className="text-foreground/80">
        &copy; {new Date().getFullYear()} Pedro Uzcátegui.
      </p>
    </footer>
  );
}
