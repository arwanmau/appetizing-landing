import { useState } from "react";

interface Props {
  images: string[];
  alt: string;
}

export function MotorGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl bg-surface border border-border group">
        <img
          src={images[active]}
          alt={alt}
          width={1280}
          height={896}
          className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 group-hover:ring-primary/30 transition-all" />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative shrink-0 aspect-[4/3] w-24 sm:w-28 overflow-hidden rounded-xl border-2 transition-all ease-smooth ${
              active === i ? "border-primary shadow-glow" : "border-border hover:border-primary/50"
            }`}
          >
            <img src={src} alt="" loading="lazy" width={400} height={300} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
