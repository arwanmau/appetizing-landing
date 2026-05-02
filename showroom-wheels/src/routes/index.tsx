import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { BentoCategories } from "@/components/BentoCategories";
import { MotorCard } from "@/components/MotorCard";
import { motors } from "@/data/motors";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MotoVerse — Marketplace Motor Bekas Terverifikasi" },
      { name: "description", content: "Showroom digital untuk motor bekas berkualitas. Filter cerdas, penjual terverifikasi, dan WhatsApp langsung." },
      { property: "og:title", content: "MotoVerse — Digital Showroom Motor" },
      { property: "og:description", content: "Temukan motor idamanmu dengan transparan. 100% Verified Sellers." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = motors.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <BentoCategories />

        <section className="container mx-auto px-4 sm:px-6 pb-16">
          <div className="flex items-end justify-between mb-8 sm:mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-bold mb-2">Featured</div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
                Pilihan <span className="text-gradient-accent">terbaik</span> minggu ini.
              </h2>
            </div>
            <Link to="/browse" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
              Lihat semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((m, i) => (
              <MotorCard key={m.id} motor={m} index={i} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
