import { Link } from "@tanstack/react-router";
import { Bike } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform ease-smooth duration-300">
            <Bike className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="leading-none">
            <div className="font-display font-extrabold text-lg tracking-tight">MotoVerse</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Digital Showroom</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="text-muted-foreground hover:text-foreground transition-colors">
            Beranda
          </Link>
          <Link to="/browse" activeProps={{ className: "text-primary" }} className="text-muted-foreground hover:text-foreground transition-colors">
            Jelajahi
          </Link>
          <Link to="/about" activeProps={{ className: "text-primary" }} className="text-muted-foreground hover:text-foreground transition-colors">
            Tentang
          </Link>
        </nav>

        <Link
          to="/browse"
          className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-accent-glow hover:scale-105 active:scale-95 transition-transform ease-smooth"
        >
          Jual Motor
        </Link>
      </div>
    </header>
  );
}
