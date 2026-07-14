import Image from "next/image";
import MenuIcon from "@/app/ui/primitive/menu-icon";
import Icon from "@/app/ui/primitive/base-icon";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Menu() {

	return (
		<div className="fixed left-10 top-10 flex flex-wrap gap-2">
			<Sheet>
				<SheetTrigger asChild>
					<span className="absolute inline-block transition duration-300">
						<Icon src="/icons/menu.svg" alt="Menu Icon"/>
					</span>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
					showCloseButton={false}
				>
					<SheetHeader>
						<SheetTitle className="text-center">
							Menu
						</SheetTitle>
					</SheetHeader>

					<Separator/>

					<div className="no-scrollbar overflow-y-auto px-4">
						<div className="mt-5 flex flex-col gap-5">
							<MenuIcon href="/" name="Home" src="/icons/home.svg" alt="Home Icon" />
							<MenuIcon href="/projects" name="Projects" src="/icons/rocket.svg" alt="Projects Icon" />
							<MenuIcon href="/news" name="News" src="/icons/news.svg" alt="News Icon" />
							<MenuIcon href="/history" name="Launches" src="/icons/launch.svg" alt="History Icon" />
							<MenuIcon href="/track" name="Tracker" src="/icons/tracker.svg" alt="Tracking Icon" />
							<MenuIcon href="https://www.instagram.com/stari.rocketry/" name="Instagram" src="/branding/Instagram_Glyph_White.svg" alt="Instagram" newTab />
						</div>
					</div>
					<SheetFooter>
						<SheetClose asChild>
							<Button variant="outline">Close</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
}