"use client"
import { TextAnimate } from "@/components/ui/text-animate"

export default function Content() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-bold text-white leading-tight font-display">
        <TextAnimate animation="slideUp" by="word">
          404
        </TextAnimate>
      </h1>
      <div className="mt-4 text-base sm:text-lg text-white text-left">
        <TextAnimate animation="slideUp" by="word">
          The page you are looking for does not exist. It might have been moved or deleted. 
        </TextAnimate>
      </div>
    </section>
  );
}