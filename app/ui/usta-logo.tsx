import Image from "next/image";

export function UstaLogo() {
  return (
    <Image
      className="absolute brightness-50 dark:invert right-3 bottom-3"
      src="/USTA-logo.png"
      alt="University of St Andrews Logo"
      width={150}
      height={40}
    />
  );
}