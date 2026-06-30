'use client'

import Image from "next/image";
import MenuIcon from "@/app/ui/primitive/menu-icon";
import Icon from "@/app/ui/primitive/base-icon";
import { useState } from "react";
import clsx from "clsx";

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function TestMenu() {
	const [isOpen, openMenu] = useState(false);

	return (
		<div className="flex flex-wrap gap-2">
			<Sheet>
				<SheetTrigger asChild>
					<span 
						className={clsx("absolute inline-block transition duration-300", isOpen? "rotate-90": "rotate-0")} 
						onClick={() => {openMenu(!isOpen)}}
					>
						<Icon src="/icons/menu.svg" alt="Menu Icon"/>
					</span>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
					showCloseButton={false}
				>

					<div className="no-scrollbar overflow-y-auto px-4">
						<div className="mt-5 flex flex-col gap-5">
							<MenuIcon href="/" name="Home" src="/icons/home.svg" alt="Home Icon" />
							<MenuIcon href="/projects" name="Projects" src="/icons/rocket.svg" alt="Projects Icon" />
							<MenuIcon href="/news" name="News" src="/icons/news.svg" alt="News Icon" />
							<MenuIcon href="/history" name="Launches" src="/icons/launch.svg" alt="History Icon" />
							<MenuIcon href="/track" name="Tracker" src="/icons/tracker.svg" alt="Tracking Icon" />
							<MenuIcon href="https://www.instagram.com/stari.rocketry/" name="Instagram" src="/branding/Instagram_Glyph_Gradient.svg" alt="Instagram" newTab />
						</div>
					</div>
					<SheetFooter>
						<SheetClose asChild>
							<Button onClick={() => {openMenu(false)}} variant="outline">Close</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
}