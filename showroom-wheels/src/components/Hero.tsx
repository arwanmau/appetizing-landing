import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-muted-foreground mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Marketplace Motor Terkurasi · 100% Verified
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            Temukan Motor <br />
            <span className="text-gradient-primary">Idamanmu</span> dengan{" "}
            <span className="text-gradient-accent">Transparan.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Showroom digital untuk motor bekas berkualitas. Setiap unit diperiksa, harga transparan,
            dan langsung terhubung ke penjual via WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Link
              to="/browse"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-glow hover:scale-[1.03] active:scale-95 transition-transform ease-smooth"
            >
              Mulai Jelajah
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur-md px-7 py-3.5 text-sm font-bold text-foreground hover:border-primary/50 transition-colors"
            >
              Bagaimana Cara Kerjanya
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-6 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Penjual Terverifikasi</span>
            <span className="inline-flex items-center gap-2"><Zap className="w-4 h-4 text-accent" /> Respons Cepat WhatsApp</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
