import type { Metadata } from "next";
import "./globals.css";
import { Poppins,UnifrakturCook } from "next/font/google";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const unifrakturCook = UnifrakturCook({
  variable: "--font-display",
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dega Anjam Piani | Web Developer & Creative Designer",
  description: "Portofolio Dega — Web Developer, Creative Design, dan Game Developer. Lihat project dan karya terbaru saya.",
  keywords: ["web developer", "portfolio", "dega anjam piani", "creative design"],
  openGraph: {
    title: "Dega Anjam Piani | Portofolio",
    description: "Web Developer, Creative Design, Game Developer",
    url: "https://degaanjam.studio",
    siteName: "D3644",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${unifrakturCook.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}