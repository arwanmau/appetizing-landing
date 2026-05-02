import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import sport from "@/assets/motor-sport-1.jpg";
import matic from "@/assets/motor-matic-1.jpg";
import trail from "@/assets/motor-trail-1.jpg";
import bebek from "@/assets/motor-bebek-1.jpg";

const cats = [
  { name: "Sport", desc: "Adrenalin di setiap tikungan", img: sport, tone: "primary", className: "sm:col-span-2 sm:row-span-2" },
  { name: "Matic", desc: "Praktis untuk harian", img: matic, tone: "accent", className: "" },
  { name: "Trail", desc: "Off-road tanpa batas", img: trail, tone: "primary", className: "" },
  { name: "Bebek", desc: "Klasik & efisien", img: bebek, tone: "accent", className: "sm:col-span-2" },
];

export function BentoCategories() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="flex items-end justify-between mb-8 sm:mb-12">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">Categories</div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            Pilih gaya <span className="text-gradient-primary">berkendaramu</span>.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
        {cats.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
            className={c.className}
          >
            <Link
              to="/browse"
              className="group relative block w-full h-full overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card hover:shadow-elevated hover:border-primary/40 transition-all ease-smooth duration-500"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                width={1280}
                height={896}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-5">
                <div className={`text-[10px] uppercase tracking-[0.25em] font-bold mb-1 ${c.tone === "primary" ? "text-primary" : "text-accent"}`}>
                  Kategori
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl leading-tight">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
