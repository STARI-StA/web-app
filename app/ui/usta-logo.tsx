import Image from "next/image";

export function UstaLogo() {
  return (
    <Image
      className="fixed brightness-50 dark:invert right-3 bottom-3"
      src="/branding/USTA-logo.png"
      alt="University of St Andrews Logo"
      width={150}
      height={40}
    />
  );
}