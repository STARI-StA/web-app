import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="top-0 w-full py-6 md:py-10 lg:py-12 bg-background">
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

        <span className="text-subtle">
          St Andrews Aerospace
        </span>
        <div className="w-[50vw] h-[0.5vh] mt-1 bg-foreground mx-auto rounded-md bg-linear-to-r from-background via-foreground to-background"></div>
      </span>
    </div>
  );
}