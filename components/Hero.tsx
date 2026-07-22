"use client";
import SpiderParticles from "@/components/effects/spider-particles";

const spiderParticlesProps = {
    particleCount:180,
    gridGap:0,
    particleSize:20.0,
    mouseConnectDist:160,
    spotlightRadius:300,
    particlesGlow:true,
    glowColor:0xffffff,
    particleColor:0xffffff,
    webColor:0xffffff,
    centerColor:0xffffff,
}

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <SpiderParticles {...spiderParticlesProps} />
    </section>
    
  );
}