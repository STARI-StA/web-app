import Image from "next/image";

interface IconProps {
  src: string,
  alt: string,
  invert?: boolean
};

export default function Icon({ src, alt, invert = false }: IconProps) {
  return (
    <div className="relative w-6 h-6 md:w-10 md:h-10">
      <Image
        className={`object-contain ${invert ? "invert dark:invert-0" : "dark:invert"}`}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 720px) 24px, 40px"
        priority
      />
    </div>
  );
}