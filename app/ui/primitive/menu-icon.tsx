import { Button } from "@/components/ui/button";
import React from "react";

interface MenuIconProps {
  children?: React.ReactNode,
  name: string,
  href: string,
  newTab?: boolean
};

export default function MenuIcon({ children, name, href, newTab = false }: MenuIconProps) {

  return (
    <a href={href} target={newTab ? "_blank" : "_self"}>
      <Button variant={"ghost"}>
        {children}
        {name}
      </Button>
    </a>
  );
}