import Image from "next/image";
import Link from "next/link";
import { Menu } from "@/app/ui/menu";

export default function Banner() {
  return (
    <div className="top-0 w-full h-auto p-6 md:p-10 lg:p-12 bg-background">
      <span className="mx-auto flex flex-col text-center items-center gap-3">
        <div className="relative w-32 h-5 md:w-48 md:h-7">
          <Image
            className="dark:invert"
            src="/branding/STARI-logo.png"
            alt="STARI LOGO"
            fill
            priority
          />
        </div>

        <span className="text-sm">
          St Andrews Rocketry
        </span>
        <div className="w-[50vw] h-[0.1vh] mt-1 bg-foreground mx-auto"></div>
      </span>
    </div>
  );
}