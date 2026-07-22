"use client"
import { TextAnimate } from "@/components/ui/text-animate"

export default function AboutMe() {
  return (
    <section className="relative h-screen mt-20 flex flex-col items-end justify-start text-center">
      <h1 className="self-start ml-6 sm:ml-12 lg:ml-15 text-5xl font-bold text-white">
        <TextAnimate animation="slideUp" by="word">Hello, I'm Dega Anjam Piani</TextAnimate>
      </h1>
      <div className="self-start mt-2 max-w-5xl text-lg text-white text-left px-6 sm:px-12 lg:px-15">
        <TextAnimate animation="slideUp" by="word">I am a passionate developer with a love for creating innovative solutions. My journey in the tech world has been fueled by curiosity and a desire to make a positive impact through technology.</TextAnimate>
      </div>
    </section>
  );
}