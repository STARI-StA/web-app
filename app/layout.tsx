import type { Metadata } from "next";
import Image from "next/image";
import { michroma } from "@/app/ui/fonts";
import { bungee } from "@/app/ui/fonts";

import "./globals.css";
import { UstaLogo } from "./ui/usta-logo";
import Banner from "./ui/banner";
import { Geist, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "STARI",
  description: "STARI Web Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${michroma.className} h-full antialiased`}
    >
      <body className="min-h-full select-none">
        <div className="flex flex-col h-screen w-screen">
          <Banner />
          <div className="w-full h-full">
            {children}
          </div>
        </div>
        <UstaLogo/>
      </body>
    </html>
  );
}
