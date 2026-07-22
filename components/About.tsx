"use client"
import { TextAnimate } from "@/components/ui/text-animate"

export default function AboutMe() {
  return (
    <section className="relative h-screen mt-20 flex flex-col items-end justify-start text-center overflow-x-hidden px-6 sm:px-12 lg:px-15">
      <h1 className="self-start max-w-full text-7xl font-bold text-white leading-tight font-display">
        <TextAnimate animation="slideUp" by="word">
          Hello World.
        </TextAnimate>
      </h1>
      <div className="self-start mt-4 max-w-2xl text-base sm:text-lg text-white text-left">
        <TextAnimate animation="slideUp" by="word">
          I am a passionate developer with a love for creating innovative solutions. My journey in the tech world has been fueled by curiosity and a desire to make a positive impact through technology.
        </TextAnimate>
      </div>
    </section>
  );
}