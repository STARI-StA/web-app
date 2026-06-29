'use client'

import Image from "next/image";
import MenuIcon from "@/app/ui/primitive/menu-icon";
import Icon from "@/app/ui/primitive/icon";
import { useState } from "react";
import { createContext } from "react";
import clsx from "clsx";

export const MenuContext = createContext(false);

export default function Menu() {
	const [isOpen, openMenu] = useState(false);

	return (
		<MenuContext value={isOpen}>
			<div className={clsx("absolute flex flex-col left-0 top-0 min-w-[3vw] bg-background h-full p-6 md:p-10 lg:p-12 transition-[max-width] duration-200 ease-in-out overflow-x-hidden whitespace-nowrap scrollbar-thin scrollbar-thumb-foreground",
				isOpen? "max-w-[20rem]" : "max-w-40"
			)}>
				<span className={clsx("absolute inline-block transition duration-300", isOpen? "rotate-90": "rotate-0")} onClick={() => {openMenu(!isOpen)}}>
					<Icon src="/icons/menu.svg" alt="Menu Icon"/>
				</span>

				<div className="w-full flex flex-col items-center">

					<div className="flex flex-col gap-5 mt-30">
						<MenuIcon href="/" name="Home" src="/icons/home.svg" alt="Home Icon" />
						<MenuIcon href="/projects" name="Projects" src="/icons/rocket.svg" alt="Projects Icon" />
						<MenuIcon href="/news" name="News" src="/icons/news.svg" alt="News Icon" />
						<MenuIcon href="/history" name="Launches" src="/icons/launch.svg" alt="History Icon" />
						<MenuIcon href="/track" name="Tracker" src="/icons/tracker.svg" alt="Tracking Icon" />
						<MenuIcon href="https://www.instagram.com/stari.rocketry/" name="Instagram" src="/branding/Instagram_Glyph_Gradient.svg" alt="Instagram" newTab />
					</div>
				</div>
			</div>
		</MenuContext>
	);
}