import React from "react";
import LinkButton from "./link-button";

interface MenuIconProps {
  children?: React.ReactNode,
  name: string,
  href: string,
  newTab?: boolean
};

export default function MenuIcon({ children, name, href, newTab = false }: MenuIconProps) {

  return (
      <LinkButton variant={"ghost"} href={href} newTab={newTab} name={name} children={children}/>
  );
}