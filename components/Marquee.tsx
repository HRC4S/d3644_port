"use client";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const items = ["Passion", "Pain", "Patience", "Persistence"];

export default function MarqueeSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
      <Marquee>
        {items.map((text, i) => (
          <span
            key={i}
            className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-widest font-stretch-ultra-expanded whitespace-nowrap text-transparent [-webkit-text-stroke:1px_white]">
              {text}
          </span>
        ))}
      </Marquee>
      
    </section>
  );
}