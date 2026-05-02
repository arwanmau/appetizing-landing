import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Gauge, Calendar, BadgeCheck } from "lucide-react";
import { type Motor, formatRupiah, formatKm } from "@/data/motors";

interface MotorCardProps {
  motor: Motor;
  index?: number;
}

export function MotorCard({ motor, index = 0 }: MotorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3), ease: [0.32, 0.72, 0, 1] }}
    >
      <Link
        to="/motor/$motorId"
        params={{ motorId: motor.id }}
        className="group relative block overflow-hidden rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-elevated hover:border-primary/40 transition-all duration-500 ease-smooth"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          <img
            src={motor.image_url}
            alt={`${motor.merk} ${motor.model}`}
            loading="lazy"
            width={1280}
            height={896}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-smooth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
            <span className="inline-flex items-center rounded-full bg-success/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-success-foreground">
              ● Tersedia
            </span>
            {motor.verified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow">
                <BadgeCheck className="w-3 h-3" strokeWidth={3} />
                Verified
              </span>
            )}
          </div>

          {/* Type chip */}
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center rounded-md bg-background/80 backdrop-blur-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground border border-border">
              {motor.tipe} · {motor.cc}cc
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-3">
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{motor.merk}</div>
            <h3 className="font-display font-extrabold text-lg leading-tight group-hover:text-primary transition-colors">
              {motor.model}
            </h3>
          </div>

          <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
            <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" /> {motor.tahun}</span>
            <span className="inline-flex items-center gap-1"><Gauge className="w-3 h-3" /> {formatKm(motor.km_run)}</span>
            <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" /> {motor.lokasi}</span>
          </div>

          <div className="flex items-end justify-between pt-3 border-t border-border">
            <div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Harga</div>
              <div className="font-display font-extrabold text-xl text-gradient-primary">
                {formatRupiah(motor.harga)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Mesin</div>
              <div className="font-bold text-sm">{motor.kondisi_mesin}/10</div>
            </div>
          </div>
        </div>

        {/* Hover glow accent */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/0 group-hover:ring-primary/30 transition-all duration-500" />
      </Link>
    </motion.div>
  );
}
