import type { Metadata } from "next";
import Image from "next/image";
import { michroma } from "@/app/ui/fonts";
import { bungee } from "@/app/ui/fonts";

import "./globals.css";
import { UstaLogo } from "./ui/usta-logo";
import Menu from "./ui/menu";
import Banner from "./ui/banner";

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

        <Menu />
        <UstaLogo/>
      </body>
    </html>
  );
}
