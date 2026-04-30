import { motion } from "framer-motion";
import { useState } from "react";
import { Tv, Music, Cloud, Gamepad2, BookOpen, Wifi, type LucideIcon } from "lucide-react";

const categoryIcons: Record<string, { icon: LucideIcon; gradient: string }> = {
  streaming: { icon: Tv, gradient: "from-primary to-neon-purple" },
  music: { icon: Music, gradient: "from-secondary to-neon-mint" },
  cloud: { icon: Cloud, gradient: "from-primary/80 to-secondary" },
  gaming: { icon: Gamepad2, gradient: "from-destructive to-warning" },
  reading: { icon: BookOpen, gradient: "from-warning to-secondary" },
  internet: { icon: Wifi, gradient: "from-secondary to-primary" },
};

interface SubscriptionCardProps {
  name: string;
  price: number;
  category: string;
  nextBill: string;
  isUpcoming?: boolean;
  onCancel?: () => void;
  onKeep?: () => void;
}

const SubscriptionCard = ({ name, price, category, nextBill, isUpcoming, onCancel, onKeep }: SubscriptionCardProps) => {
  const [action, setAction] = useState<"cancel" | "keep" | null>(null);
  const cat = categoryIcons[category] || categoryIcons.streaming;
  const Icon = cat.icon;

  const handleCancel = () => {
    setAction("cancel");
    onCancel?.();
  };

  const handleKeep = () => {
    setAction("keep");
    onKeep?.();
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: action === "cancel" ? 0.4 : 1, y: 0 }}
      className={`clay-card p-4 mb-3 ${isUpcoming ? "dark:neon-border-purple" : ""} ${action === "cancel" ? "line-through" : ""}`}
    >
      <div className="flex items-center gap-3">
        <div className={`clay-icon bg-gradient-to-br ${cat.gradient}`}>
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-sm text-foreground truncate">{name}</h3>
          <p className="text-xs text-muted-foreground">Next bill: {nextBill}</p>
        </div>
        <div className="text-right">
          <p className="font-display font-black text-lg text-foreground">${price}</p>
          <p className="text-[10px] text-muted-foreground">/month</p>
        </div>
      </div>

      {!action && (
        <motion.div
          className="flex gap-2 mt-3"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={handleCancel}
            className="flex-1 py-2.5 rounded-xl bg-destructive text-destructive-foreground font-display font-bold text-sm"
          >
            Cancel 🚫
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={handleKeep}
            className="flex-1 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-display font-bold text-sm"
          >
            Keep ✅
          </motion.button>
        </motion.div>
      )}

      {action && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`mt-2 text-center text-xs font-display font-bold ${action === "cancel" ? "text-destructive" : "text-secondary"}`}
        >
          {action === "cancel" ? "Marked for cancellation 👋" : "Keeping this one! 💚"}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SubscriptionCard;
