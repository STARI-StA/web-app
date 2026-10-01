import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";

import "./globals.css";
import Banner from "./ui/banner";
import { Menu } from "./ui/menu";
import Footer from "./ui/footer";

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
      className={`${inter.className} antialiased scrollbar-none overflow-x-hidden`}
    >
      <head>
        <meta name="description" content="STARI is the St Andrews Rocketry Initiative. We develop advanced aerospace solutions with custom hardware."></meta>
      </head>
      <body className="select-none overflow-x-hidden min-h-screen">
        <div className="flex flex-col w-full flex-1 min-h-screen">
          <Banner />

          <main className="flex flex-col w-full flex-1">
            {children}
          </main>

          <Footer/>
          <Menu/>
        </div>
      </body>
    </html>
  );
}
