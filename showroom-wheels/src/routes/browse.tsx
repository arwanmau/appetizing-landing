import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FilterBar, type Filters } from "@/components/FilterBar";
import { MotorCard } from "@/components/MotorCard";
import { motors } from "@/data/motors";

export const Route = createFileRoute("/browse")({
  head: () => ({
    meta: [
      { title: "Jelajahi Motor — MotoVerse" },
      { name: "description", content: "Filter motor bekas berdasarkan tipe, CC, harga, tahun, dan kondisi mesin." },
      { property: "og:title", content: "Jelajahi Motor — MotoVerse" },
      { property: "og:description", content: "Temukan motor sesuai kebutuhanmu dengan filter cerdas." },
    ],
  }),
  component: Browse,
});

function Browse() {
  const [filters, setFilters] = useState<Filters>({
    tipe: "All",
    minCc: 0,
    maxPrice: 60_000_000,
    minTahun: 2018,
    minKondisi: 1,
  });

  const filtered = useMemo(
    () =>
      motors.filter(
        (m) =>
          (filters.tipe === "All" || m.tipe === filters.tipe) &&
          m.cc >= filters.minCc &&
          m.harga <= filters.maxPrice &&
          m.tahun >= filters.minTahun &&
          m.kondisi_mesin >= filters.minKondisi,
      ),
    [filters],
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="mb-8 sm:mb-10 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">Browse</div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            Jelajahi <span className="text-gradient-primary">Showroom</span>
          </h1>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Gunakan filter untuk menyaring motor sesuai preferensimu.
          </p>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-8">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <FilterBar filters={filters} onChange={setFilters} resultCount={filtered.length} />
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-border bg-gradient-card p-12 text-center">
                <p className="text-muted-foreground">Tidak ada motor yang cocok dengan filter saat ini.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((m, i) => (
                  <MotorCard key={m.id} motor={m} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
