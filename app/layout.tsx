import type { Metadata } from "next";
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
