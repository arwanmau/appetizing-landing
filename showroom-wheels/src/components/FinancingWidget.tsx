import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { formatRupiah } from "@/data/motors";

interface Props {
  harga: number;
}

export function FinancingWidget({ harga }: Props) {
  const [dpPct, setDpPct] = useState(20);
  const [tenor, setTenor] = useState(24);

  const { dp, monthly, totalBunga } = useMemo(() => {
    const dpAmount = (harga * dpPct) / 100;
    const principal = harga - dpAmount;
    const annualRate = 0.085; // 8.5%
    const monthlyRate = annualRate / 12;
    const m =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenor)) /
      (Math.pow(1 + monthlyRate, tenor) - 1);
    return {
      dp: dpAmount,
      monthly: m,
      totalBunga: m * tenor - principal,
    };
  }, [harga, dpPct, tenor]);

  return (
    <div className="rounded-2xl bg-gradient-card border border-border p-6 shadow-card space-y-5">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center">
          <Calculator className="w-4 h-4 text-accent" />
        </div>
        <div>
          <h3 className="font-display font-extrabold text-base">Simulasi Cicilan</h3>
          <p className="text-[11px] text-muted-foreground">Bunga 8.5% / tahun · estimasi</p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Down Payment</span>
          <span className="text-xs font-bold text-accent">{dpPct}% · {formatRupiah(dp)}</span>
        </div>
        <input
          type="range"
          min={10}
          max={50}
          step={5}
          value={dpPct}
          onChange={(e) => setDpPct(Number(e.target.value))}
          className="w-full h-1.5 bg-surface rounded-full appearance-none cursor-pointer accent-[oklch(0.74_0.19_50)]"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Tenor</span>
          <span className="text-xs font-bold text-accent">{tenor} bulan</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[12, 24, 36, 48].map((t) => (
            <button
              key={t}
              onClick={() => setTenor(t)}
              className={`py-2 rounded-lg text-xs font-bold transition-all ease-smooth ${
                tenor === t
                  ? "bg-gradient-accent text-accent-foreground shadow-accent-glow"
                  : "bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-surface-elevated p-4 border border-border">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Cicilan per bulan</div>
        <div className="font-display font-extrabold text-3xl text-gradient-accent mt-1">
          {formatRupiah(Math.round(monthly))}
        </div>
        <div className="text-[11px] text-muted-foreground mt-2">
          Total bunga estimasi: {formatRupiah(Math.round(totalBunga))}
        </div>
      </div>
    </div>
  );
}
