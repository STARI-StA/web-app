import React from "react";
import { bungee } from "../fonts";
import { NextFont } from "next/dist/compiled/@next/font";

interface ProseProps {
  children: React.ReactNode,
  font: NextFont
}

export default function Prose( {children, font}: ProseProps) {
    return (
      <div className={`${font.className} max-w-8xl h-full antialiased text-foreground prose-headings:text-foreground prose prose-headings:font-bold prose-p:font-semibold prose-sm md:prose-2xl relative left-0 top-0 py-8 px-8 lg:px-24 w-screen`}>
        {children}
      </div>
    );
}