import type { Metadata } from "next";
import Image from "next/image";
import { michroma } from "./ui/fonts";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">
        {children}
        <Image
            className="absolute brightness-50 dark:invert right-3 bottom-3"
            src="/USTA-logo.png"
            alt="University of St Andrews Logo"
            width={150}
            height={40}
            priority
        />

        <a target="_blank" href="https://www.instagram.com/stari.rocketry/">
          <Image
              className="dark:invert absolute left-6 bottom-6"
              src="/Instagram_Glyph_Black.png"
              alt="Instagram Logo"
              width={40}
              height={40}
              priority
          />
        </a>
      </body>
    </html>
  );
}
