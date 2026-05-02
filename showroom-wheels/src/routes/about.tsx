import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, MessageCircle, Search, BadgeCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang MotoVerse — Bagaimana Cara Kerjanya" },
      { name: "description", content: "Pelajari bagaimana MotoVerse menghubungkan pembeli dan penjual motor bekas dengan transparan." },
      { property: "og:title", content: "Tentang MotoVerse" },
      { property: "og:description", content: "Showroom digital untuk motor bekas berkualitas dan terverifikasi." },
    ],
  }),
  component: About,
});

const steps = [
  { icon: Search, title: "Jelajahi & Filter", desc: "Gunakan filter cerdas untuk menemukan motor sesuai tipe, CC, harga, dan kondisi mesin." },
  { icon: BadgeCheck, title: "Lihat Verified Listing", desc: "Setiap penjual terverifikasi memiliki badge khusus, lengkap dengan detail spec sheet & surat-surat." },
  { icon: MessageCircle, title: "Chat via WhatsApp", desc: "Satu klik untuk terhubung langsung ke penjual dengan pesan otomatis yang sopan." },
  { icon: ShieldCheck, title: "Transaksi Aman", desc: "Lakukan inspeksi & test ride sebelum deal. Kami berdiri di sisi pembeli." },
];

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">About</div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
            Marketplace yang <span className="text-gradient-primary">jujur</span>.
          </h1>
          <p className="text-muted-foreground mt-5 text-base sm:text-lg leading-relaxed">
            Kami percaya jual beli motor bekas seharusnya transparan, cepat, dan tanpa drama. MotoVerse
            adalah showroom digital tempat penjual terverifikasi bertemu pembeli yang serius.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-gradient-card border border-border p-6 shadow-card hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${i % 2 === 0 ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent"}`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Step {i + 1}</div>
                  <h3 className="font-display font-extrabold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
