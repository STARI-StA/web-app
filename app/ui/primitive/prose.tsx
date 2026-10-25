import React from "react";
import { bungee } from "../fonts";
import { NextFont } from "next/dist/compiled/@next/font";

interface ProseProps {
  children: React.ReactNode,
  font: NextFont,
  className?: string
}

export default function Prose( {children, font, className}: ProseProps) {
    return (
      <div className={`${font.className} 
        max-w-8xl h-full w-full
        text-center md:text-left
        antialiased text-foreground 
        prose prose-md md:prose-2xl
        prose-headings:text-foreground prose-headings:font-bold
        prose-p:font-semibold
        prose-h2:text-xl md:prose-h2:text-4xl
        relative left-0 top-0 px-0 ${className || ''}`}>
        {children}
      </div>
    );
}