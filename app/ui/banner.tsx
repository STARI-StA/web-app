import Image from "next/image";
import Link from "next/link";

export function Banner() {
  return (
    <div className="absolute top-0 w-full py-6 md:py-10 lg:py-12 bg-background">
      <span className="absolte mx-auto flex flex-col text-center items-center gap-3">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="STARI LOGO"
          width={200}
          height={40}
          priority
        />

        <span className="text-subtle">
          St Andrews Aerospace
        </span>
        <div className="w-[50vw] h-[0.5vh] mt-1 bg-foreground mx-auto rounded-md bg-linear-to-r from-background via-foreground to-background"></div>
      </span>
    </div>
  );
}