"use Client";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export default function marquee() {
  return (
    <section className="relative flex flex-col items-center justify-baseline text-center px-6">
      <Marquee>
        <span className="text-9xl font-black tracking-widest font-stretch-ultra-expanded">
          <AnimatedShinyText className="transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            D.3.6.4
          </AnimatedShinyText>
        </span>
        <span className="text-9xl font-black tracking-widest font-stretch-ultra-expanded">
          <AnimatedShinyText className="transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            D.3.6.4
          </AnimatedShinyText>
        </span>
        <span className="text-9xl font-black tracking-widest font-stretch-ultra-expanded">
          <AnimatedShinyText className="transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            D.3.6.4
          </AnimatedShinyText>
        </span>
        <span className="text-9xl font-black tracking-widest font-stretch-ultra-expanded">
          <AnimatedShinyText className="transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            D.3.6.4
          </AnimatedShinyText>
        </span>
      </Marquee>
    </section>
  );
}
