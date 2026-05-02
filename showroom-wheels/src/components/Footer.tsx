export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} MotoVerse · The Digital Showroom</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Syarat</a>
          <a href="#" className="hover:text-foreground transition-colors">Privasi</a>
          <a href="#" className="hover:text-foreground transition-colors">Kontak</a>
        </div>
      </div>
    </footer>
  );
}
