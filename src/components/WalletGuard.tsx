import { motion } from "framer-motion";
import walletGuardImg from "@/assets/wallet-guard.png";

interface WalletGuardProps {
  message?: string;
}

const WalletGuard = ({ message = "I'm watching your subscriptions! 👀" }: WalletGuardProps) => {
  return (
    <motion.div
      className="fixed bottom-6 right-4 z-50 flex items-end gap-2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
    >
      <motion.div
        className="clay-card-sm px-3 py-2 text-xs font-display font-bold max-w-[160px] text-foreground"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {message}
        <div className="absolute -right-1 bottom-3 w-2 h-2 bg-card rotate-45" />
      </motion.div>
      <motion.img
        src={walletGuardImg}
        alt="Wallet Guard mascot"
        className="w-16 h-16 drop-shadow-lg"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default WalletGuard;
