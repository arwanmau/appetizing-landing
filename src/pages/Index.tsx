import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Moon, Sun, Shield } from "lucide-react";
import SubscriptionCard from "@/components/SubscriptionCard";
import SpendingSummary from "@/components/SpendingSummary";
import WalletGuard from "@/components/WalletGuard";

const subscriptions = [
  { id: 1, name: "Netflix Premium", price: 22.99, category: "streaming", nextBill: "Mar 15", isUpcoming: true },
  { id: 2, name: "Spotify Family", price: 16.99, category: "music", nextBill: "Mar 20", isUpcoming: true },
  { id: 3, name: "iCloud+ 2TB", price: 9.99, category: "cloud", nextBill: "Apr 1" },
  { id: 4, name: "Xbox Game Pass", price: 14.99, category: "gaming", nextBill: "Apr 5" },
  { id: 5, name: "Kindle Unlimited", price: 11.99, category: "reading", nextBill: "Apr 12" },
  { id: 6, name: "Starlink", price: 120, category: "internet", nextBill: "Apr 15" },
];

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [saved, setSaved] = useState(0);
  const total = subscriptions.reduce((sum, s) => sum + s.price, 0);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen bg-background flex items-center justify-center p-4 transition-colors duration-500`}>
      {/* Phone Mockup */}
      <div className="phone-mockup w-full">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="px-5 pt-12 pb-6 min-h-[700px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <motion.h1
                  className="font-display font-black text-xl text-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  My Subscriptions
                </motion.h1>
                <p className="text-xs text-muted-foreground font-body">
                  {subscriptions.length} active services
                </p>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="clay-icon !p-2 !rounded-full"
                >
                  <Bell className="w-4 h-4 text-muted-foreground" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.85, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={toggleDark}
                  className="clay-icon !p-2 !rounded-full"
                >
                  {isDark ? <Sun className="w-4 h-4 text-warning" /> : <Moon className="w-4 h-4 text-primary" />}
                </motion.button>
              </div>
            </div>

            {/* Savings Banner */}
            <motion.div
              className="clay-card bg-gradient-to-r from-primary to-secondary p-4 rounded-2xl mb-5 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-primary-foreground" />
                  <span className="text-xs font-display font-bold text-primary-foreground/80">Wallet Guard says</span>
                </div>
                <p className="font-display font-black text-lg text-primary-foreground">
                  You could save ${Math.round(total * 0.3)}/mo
                </p>
                <p className="text-[11px] text-primary-foreground/70 font-body">
                  Review your subscriptions below ↓
                </p>
              </div>
              <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-primary-foreground/10" />
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-primary-foreground/5" />
            </motion.div>

            {/* Spending Summary */}
            <SpendingSummary total={Math.round(total)} saved={saved} trend="down" />

            {/* Upcoming Bills Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-block w-2 h-2 rounded-full bg-primary ${isDark ? "animate-glow-pulse" : ""}`} />
              <h2 className="font-display font-bold text-sm text-foreground">Upcoming Bills</h2>
            </div>

            {/* Subscription List */}
            <AnimatePresence>
              {subscriptions.map((sub) => (
                <SubscriptionCard
                  key={sub.id}
                  name={sub.name}
                  price={sub.price}
                  category={sub.category}
                  nextBill={sub.nextBill}
                  isUpcoming={sub.isUpcoming}
                  onCancel={() => setSaved((s) => s + sub.price)}
                  onKeep={() => {}}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mascot */}
      <WalletGuard />
    </div>
  );
};

export default Index;
