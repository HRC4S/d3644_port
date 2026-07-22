import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import { Cursor } from "@/components/ui/inverted-mouse";
import Aboutme from "@/components/About";


export default function Home() {
  return (
    <main>        
      <Cursor size={60} />
      <Hero/>
      <Marquee/>
      <Aboutme/>
    </main>
  );
}