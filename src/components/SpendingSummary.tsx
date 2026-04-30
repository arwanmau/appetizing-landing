import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, DollarSign } from "lucide-react";

interface SpendingSummaryProps {
  total: number;
  saved: number;
  trend: "up" | "down";
}

const SpendingSummary = ({ total, saved, trend }: SpendingSummaryProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-5">
      {[
        { label: "Monthly", value: `$${total}`, icon: DollarSign, accent: "primary" },
        { label: "Saved", value: `$${saved}`, icon: TrendingDown, accent: "secondary" },
        { label: "Trend", value: trend === "down" ? "↓ 12%" : "↑ 8%", icon: trend === "down" ? TrendingDown : TrendingUp, accent: trend === "down" ? "secondary" : "destructive" },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          className="clay-card-sm p-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i, type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full mb-1 ${
            item.accent === "primary" ? "bg-primary/15 text-primary" :
            item.accent === "secondary" ? "bg-secondary/15 text-secondary" :
            "bg-destructive/15 text-destructive"
          }`}>
            <item.icon className="w-4 h-4" />
          </div>
          <p className="font-display font-black text-base text-foreground">{item.value}</p>
          <p className="text-[10px] text-muted-foreground font-body">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SpendingSummary;
