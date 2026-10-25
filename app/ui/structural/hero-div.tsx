import { ReactNode } from "react";

export default function HeroDiv( {children}: {children: ReactNode} ) {
  return (
    <div className="relative min-h-[calc(100vh-12rem)] flex flex-col py-0 md:py-8">
      {children}
    </div>
  );
}