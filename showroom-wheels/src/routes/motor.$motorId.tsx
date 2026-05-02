import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, Calendar, Cog, FileText, Gauge, MapPin, MessageCircle, Palette, Receipt } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotorGallery } from "@/components/MotorGallery";
import { FinancingWidget } from "@/components/FinancingWidget";
import { getMotorById, formatRupiah, formatKm } from "@/data/motors";

export const Route = createFileRoute("/motor/$motorId")({
  loader: ({ params }) => {
    const motor = getMotorById(params.motorId);
    if (!motor) throw notFound();
    return { motor };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.motor.merk} ${loaderData.motor.model} — MotoVerse` },
          { name: "description", content: `${loaderData.motor.merk} ${loaderData.motor.model} ${loaderData.motor.tahun}, ${formatKm(loaderData.motor.km_run)}, di ${loaderData.motor.lokasi}.` },
          { property: "og:title", content: `${loaderData.motor.merk} ${loaderData.motor.model}` },
          { property: "og:description", content: `Harga ${formatRupiah(loaderData.motor.harga)} · ${loaderData.motor.lokasi}` },
          { property: "og:image", content: loaderData.motor.image_url },
          { name: "twitter:image", content: loaderData.motor.image_url },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-extrabold mb-3">Motor tidak ditemukan</h1>
        <p className="text-muted-foreground mb-6">Unit ini mungkin sudah terjual atau dihapus.</p>
        <Link to="/browse" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow">
          Kembali jelajahi
        </Link>
      </main>
      <Footer />
    </div>
  ),
  component: MotorDetail,
});

function MotorDetail() {
  const { motor } = Route.useLoaderData();

  const waMessage = encodeURIComponent(
    `Halo, saya tertarik dengan ${motor.merk} ${motor.model} (${motor.tahun}) yang Anda jual.`,
  );
  const waLink = `https://wa.me/${motor.whatsapp}?text=${waMessage}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <Link to="/browse" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Kembali ke daftar
        </Link>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12">
          {/* Left: Gallery + Specs */}
          <div className="space-y-8">
            <MotorGallery images={motor.gallery} alt={`${motor.merk} ${motor.model}`} />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-primary/15 text-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  {motor.tipe} · {motor.cc}cc
                </span>
                {motor.verified && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-success/15 text-success px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    <BadgeCheck className="w-3 h-3" strokeWidth={3} /> Verified Seller
                  </span>
                )}
              </div>
              <div className="text-sm text-muted-foreground">{motor.merk}</div>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
                {motor.model}
              </h1>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {motor.lokasi}</span>
                <span>·</span>
                <span>Dijual oleh {motor.seller}</span>
              </div>
            </div>

            {/* Spec Sheet */}
            <div className="rounded-2xl bg-gradient-card border border-border p-6 shadow-card">
              <h3 className="font-display font-extrabold text-base mb-5">Spesifikasi & Dokumen</h3>
              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
                <SpecItem icon={Calendar} label="Tahun" value={String(motor.tahun)} />
                <SpecItem icon={Gauge} label="Odometer" value={formatKm(motor.km_run)} />
                <SpecItem icon={Cog} label="Kondisi Mesin" value={`${motor.kondisi_mesin}/10`} accent />
                <SpecItem icon={Receipt} label="Pajak" value={motor.pajak} accent={motor.pajak === "Hidup"} />
                <SpecItem icon={FileText} label="Surat" value={motor.surat} />
                <SpecItem icon={Palette} label="Warna" value={motor.warna} />
              </dl>
            </div>
          </div>

          {/* Right: Sticky CTA & Financing */}
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-gradient-card border border-border p-6 shadow-elevated">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Harga</div>
              <div className="font-display font-extrabold text-4xl text-gradient-primary mt-1">
                {formatRupiah(motor.harga)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Nego sopan di tempat</div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-accent-glow hover:scale-[1.02] active:scale-95 transition-transform ease-smooth"
              >
                <MessageCircle className="w-4 h-4" />
                Hubungi via WhatsApp
              </a>
              <button
                type="button"
                className="mt-2 w-full inline-flex items-center justify-center rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-bold hover:border-primary/50 transition-colors"
              >
                Simpan ke Wishlist
              </button>
            </div>

            <FinancingWidget harga={motor.harga} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function SpecItem({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <dt className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
        <Icon className="w-3 h-3" />
        {label}
      </dt>
      <dd className={`font-bold text-sm ${accent ? "text-success" : "text-foreground"}`}>{value}</dd>
    </div>
  );
}
