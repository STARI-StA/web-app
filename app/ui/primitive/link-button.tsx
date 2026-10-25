import { Button } from "@/components/ui/button";
import React from "react";

type ButtonVariant = "ghost" | "destructive" | "link" | "default" | "outline" | "secondary";
type ButtonSize = "default" | "icon" | "xs" | "sm" | "lg" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined 

interface LinkButtonProps {
  children?: React.ReactNode,
  href: string,
  name?: string,
  size?: ButtonSize,
  variant?: ButtonVariant,
  newTab?: boolean
};


export default function LinkButton({ children, href, name = "", variant = "default", size="default", newTab = false }: LinkButtonProps) {

  return (
    <a href={href} target={newTab ? "_blank" : "_self"}>
      <Button variant={variant} size={size}>
        {children}
        {name}
      </Button>
    </a>
  );
}