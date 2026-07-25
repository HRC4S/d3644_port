"use client"
import { TextAnimate } from "@/components/ui/text-animate"
import Image from "next/image";
import { Eye } from "lucide-react";
import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from '@/components/animate-ui/components/animate/cursor';

export default function AboutMe() {
  return (
    <section className="relative min-h-screen mt-20 flex flex-col items-center lg:items-end justify-start text-center px-6 sm:px-12 lg:px-15 overflow-x-hidden">
      <h1 className="self-start max-w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-display">
        <TextAnimate animation="slideUp" by="word">
          Hello World.
        </TextAnimate>
      </h1>
      <div className="self-start mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-white text-left">
        <TextAnimate animation="slideUp" by="word">
          I am a passionate developer with a love for creating innovative solutions. My journey in the tech world has been fueled by curiosity and a desire to make a positive impact through technology.
        </TextAnimate>
      </div>
      <div className="mt-8 lg:-mt-65 w-full max-w-[280px] sm:max-w-[400px] lg:max-w-none lg:w-auto self-center lg:self-end relative font-display">
        <CursorProvider global={false}>
          <CursorFollow side="left" sideOffset={40} align="center" alignOffset={0}>
            <div className="bg-black text-white text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Eye size={14} />
              Me?!
            </div>
          </CursorFollow>
          <Image
            src="/images/profile-1.png"
            alt="Profile"
            loading="eager"
            width={800}
            height={800}
            className="w-full h-auto object-cover [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
          />
        </CursorProvider>
      </div>
    </section>
  );
}