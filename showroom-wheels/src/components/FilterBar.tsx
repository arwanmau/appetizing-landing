import { SlidersHorizontal } from "lucide-react";
import type { MotorType } from "@/data/motors";

export interface Filters {
  tipe: MotorType | "All";
  minCc: number;
  maxPrice: number;
  minTahun: number;
  minKondisi: number;
}

interface FilterBarProps {
  filters: Filters;
  onChange: (f: Filters) => void;
  resultCount: number;
}

const TYPES: (MotorType | "All")[] = ["All", "Sport", "Matic", "Trail", "Bebek"];

export function FilterBar({ filters, onChange, resultCount }: FilterBarProps) {
  const update = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    onChange({ ...filters, [key]: value });

  return (
    <div className="rounded-2xl bg-gradient-card border border-border p-5 sm:p-6 shadow-card space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
            <SlidersHorizontal className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-display font-extrabold text-base">Filter</h2>
        </div>
        <span className="text-xs text-muted-foreground">
          <span className="text-primary font-bold">{resultCount}</span> motor
        </span>
      </div>

      {/* Type chips */}
      <div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Tipe</div>
        <div className="flex flex-wrap gap-2">
          {TYPES.map((t) => {
            const active = filters.tipe === t;
            return (
              <button
                key={t}
                onClick={() => update("tipe", t)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ease-smooth border ${
                  active
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                    : "bg-surface text-muted-foreground border-border hover:text-foreground hover:border-primary/40"
                }`}
              >
                {t === "All" ? "Semua" : t}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sliders */}
      <RangeRow
        label="Minimum CC"
        value={filters.minCc}
        min={0}
        max={250}
        step={25}
        format={(v) => `${v} cc`}
        onChange={(v) => update("minCc", v)}
      />
      <RangeRow
        label="Maksimum Harga"
        value={filters.maxPrice}
        min={10000000}
        max={60000000}
        step={1000000}
        format={(v) => `Rp ${(v / 1_000_000).toFixed(0)} jt`}
        onChange={(v) => update("maxPrice", v)}
      />
      <RangeRow
        label="Tahun Minimal"
        value={filters.minTahun}
        min={2018}
        max={2024}
        step={1}
        format={(v) => `${v}`}
        onChange={(v) => update("minTahun", v)}
      />
      <RangeRow
        label="Kondisi Mesin Min"
        value={filters.minKondisi}
        min={1}
        max={10}
        step={1}
        format={(v) => `${v}/10`}
        onChange={(v) => update("minKondisi", v)}
      />
    </div>
  );
}

function RangeRow({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="text-xs font-bold text-primary">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-surface rounded-full appearance-none cursor-pointer accent-[oklch(0.72_0.18_240)]"
      />
    </div>
  );
}
