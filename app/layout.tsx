import type { Metadata } from "next";
import Image from "next/image";
import { michroma } from "./ui/fonts";
import { bungee } from "./ui/fonts";

import "./globals.css";
import { UstaLogo } from "./ui/usta-logo";
import { Menu } from "./ui/menu";

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
      <body className="min-h-full flex flex-col select-none">
        {children}
        
        <Menu/>
        <UstaLogo/>
      </body>
    </html>
  );
}
