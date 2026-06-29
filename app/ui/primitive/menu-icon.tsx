import Image from "next/image";
import Icon from "@/app/ui/primitive/icon";
import { MenuContext } from "@/app/ui/menu";
import { useContext } from "react";
import { clsx } from "clsx";

interface MenuIconProps {
  src: string,
  alt: string,
  name: string,
  href: string,
  newTab?: boolean
};

export default function MenuIcon({ src, name, alt, href, newTab = false }: MenuIconProps) {
  const isOpen: boolean = useContext(MenuContext)

  return (
    <a href={href} target={newTab ? "_blank" : "_self"}>
      <div className="relative flex flex-row p-0 hover:brightness-50 transition-all items-center gap-2">
        <Icon src={src} alt={alt} invert />
        <span className={clsx("hidden", {"inline-block": isOpen})}>
          {name}
        </span>
      </div>
    </a>
  );
}