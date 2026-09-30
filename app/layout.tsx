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
      className={`${inter.className} h-full antialiased scrollbar-none overflow-x-hidden`}
    >
      <body className="min-h-full select-none overflow-x-hidden">
        <div className="flex flex-col">
          <Banner />
          <div className="flex flex-col w-full min-h-screen">
            {children}
            <Footer/>
          </div>  
          <Menu/>
        </div>
      </body>
    </html>
  );
}
