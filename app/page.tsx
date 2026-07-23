"use client";

import Hero from "@/components/Hero";
import { useState } from "react";
import Marquee from "@/components/Marquee";
import { Cursor } from "@/components/ui/inverted-mouse";
import Aboutme from "@/components/About";
import { SplitReveal } from "@/components/animata/preloader/split-reveal";
import Content from "@/components/content";

const PRELOAD_IMAGES: string[] = []; // ← didefinisikan di luar, sekali aja

export default function Home() {
  const [ready, setReady] = useState(false);
  return (
    <>
      <main>
        <Cursor size={60} />
        <Hero />
        <Marquee />
        <Aboutme />
        <Marquee />
        <Content />
      </main>
      <SplitReveal
        images={PRELOAD_IMAGES}
        lockScroll
        onComplete={() => setReady(true)}
      />
    </>
  );
}