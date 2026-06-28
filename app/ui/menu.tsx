import Image from "next/image";
import MenuIcon from "@/app/ui/primitive/menu-icon";
import Icon from "@/app/ui/primitive/icon";
import { useState } from "react";
import { createContext } from "react";

export const MenuContext = createContext(false);

export default function Menu() {
	const [isOpen, openMenu] = useState(false);

	return (
		<MenuContext value={isOpen}>
			<div className="absolute flex flex-col gap-5 left-0 top-0 min-w-[3vw] bg-background h-full p-6 md:p-10 lg:p-12">
				<Icon src="/icons/menu.svg" alt="Menu Icon" />
				<MenuIcon href="/" name="Home" src="/icons/home.svg" alt="Home Icon" />
				<MenuIcon href="/projects" name="Projects" src="/icons/rocket.svg" alt="Projects Icon" />
				<MenuIcon href="/news" name="News" src="/icons/news.svg" alt="News Icon" />
				<MenuIcon href="/history" name="Launch History" src="/icons/launch.svg" alt="History Icon" />
				<MenuIcon href="/track" name="Tracker" src="/icons/tracker.svg" alt="Tracking Icon" />
				<MenuIcon href="https://www.instagram.com/stari.rocketry/" name="Instagram" src="/branding/Instagram_Glyph_Gradient.svg" alt="Instagram" newTab />
			</div>
		</MenuContext>
	);
}