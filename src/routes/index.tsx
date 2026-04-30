import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Leaf, Star, UtensilsCrossed } from "lucide-react";
import heroBowl from "@/assets/hero-bowl.jpg";
import dishBurger from "@/assets/dish-burger.jpg";
import dishPizza from "@/assets/dish-pizza.jpg";
import dishSalad from "@/assets/dish-salad.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lovabel — Warm meals, delivered with love" },
      {
        name: "description",
        content:
          "Lovabel delivers chef-crafted meals from local kitchens to your door. Fresh ingredients, warm flavors, friendly service.",
      },
      { property: "og:title", content: "Lovabel — Warm meals, delivered with love" },
      {
        property: "og:description",
        content: "Chef-crafted meals from local kitchens, delivered fresh to your door.",
      },
    ],
  }),
});

const dishes = [
  { name: "Garden Grain Bowl", price: "$12", img: dishSalad, tag: "Fresh" },
  { name: "Classic Smash Burger", price: "$14", img: dishBurger, tag: "Bestseller" },
  { name: "Wood-Fired Margherita", price: "$16", img: dishPizza, tag: "New" },
];

const testimonials = [
  {
    quote:
      "Honestly the best delivery I've tried. It arrives warm, beautifully packed, and tastes like it came straight out of the kitchen.",
    name: "Amelia R.",
    role: "Food blogger",
  },
  {
    quote:
      "Lovabel feels personal. The dishes are thoughtful and you can tell real care goes into every order.",
    name: "Marcus T.",
    role: "Weekly customer",
  },
  {
    quote:
      "I order Lovabel for my whole team every Friday. Always on time, always delicious. It's become our ritual.",
    name: "Priya N.",
    role: "Studio manager",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <UtensilsCrossed className="h-4 w-4" />
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight">Lovabel</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#menu" className="hover:text-foreground transition-colors">Menu</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#stories" className="hover:text-foreground transition-colors">Stories</a>
          </div>
          <Button variant="default" size="sm" className="rounded-full">
            Order Now
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-10">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Now delivering in your neighborhood
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Warm meals,<br />
              <span className="italic text-primary">delivered with love.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
              Chef-crafted dishes from kitchens nearby. Fresh ingredients, honest flavors,
              at your door in 30 minutes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full px-8 shadow-[var(--shadow-warm)] group">
                Order Now
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="#menu" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                See today's menu →
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                30-min delivery
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-primary" />
                Local & fresh
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-accent/40 blur-3xl" />
            <img
              src={heroBowl}
              alt="Fresh seasonal bowl from Lovabel"
              width={1024}
              height={1024}
              className="relative z-10 aspect-square w-full rounded-3xl object-cover shadow-[var(--shadow-warm)]"
            />
            <div className="absolute -bottom-6 -left-6 z-20 hidden items-center gap-3 rounded-2xl bg-background p-4 shadow-[var(--shadow-soft)] md:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold">4.9 / 5</div>
                <div className="text-xs text-muted-foreground">12k+ happy bellies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">On the menu</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Cooked today,<br />on your table tonight.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A small, rotating menu of seasonal favorites — never frozen, always thoughtful.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {dishes.map((d) => (
            <article key={d.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl bg-card">
                <img
                  src={d.img}
                  alt={d.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {d.tag}
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">{d.name}</h3>
                <span className="font-medium text-primary">{d.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="max-w-2xl font-display text-4xl font-semibold md:text-5xl">
            Three small steps to a really good meal.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              { n: "01", t: "Pick your meal", d: "Browse a curated menu of dishes from chefs in your city." },
              { n: "02", t: "We cook fresh", d: "Your order is prepared the moment you tap order — never before." },
              { n: "03", t: "Warm at your door", d: "Delivered in insulated bags, on bikes, in under 30 minutes." },
            ].map((s) => (
              <div key={s.n} className="border-t border-border pt-6">
                <span className="font-display text-sm text-primary">{s.n}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-14 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Kind words</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Loved by hungry humans.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-10">
        <div
          className="mx-auto flex max-w-7xl flex-col items-center gap-6 rounded-[2.5rem] px-8 py-20 text-center"
          style={{ background: "var(--gradient-primary)" }}
        >
          <h2 className="max-w-2xl font-display text-4xl font-semibold text-primary-foreground md:text-6xl">
            Hungry yet? Let's fix that.
          </h2>
          <p className="max-w-md text-primary-foreground/85">
            Free delivery on your first order. No subscription, no fuss.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8 shadow-[var(--shadow-soft)]">
            Order Now
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:px-10">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <UtensilsCrossed className="h-3.5 w-3.5" />
            </span>
            <span className="font-display text-lg font-semibold text-foreground">Lovabel</span>
          </div>
          <p>© {new Date().getFullYear()} Lovabel. Made with warmth.</p>
        </div>
      </footer>
    </div>
  );
}
