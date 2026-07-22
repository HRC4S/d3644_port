"use client";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const items = ["D364", "D364", "D364", "D364"];

export default function MarqueeSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
      <Marquee>
        {items.map((text, i) => (
          <span
            key={i}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-widest font-stretch-ultra-expanded whitespace-nowrap"
          >
            <AnimatedShinyText className="transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              {text}
            </AnimatedShinyText>
          </span>
        ))}
      </Marquee>
    </section>
  );
}