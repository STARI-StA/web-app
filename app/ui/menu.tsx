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
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { CrosshairIcon, Heading, HomeIcon, NewspaperIcon, RadarIcon, RocketIcon, Users } from "lucide-react";
import { bungee } from "./fonts";

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
					className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh] gap-0"
					showCloseButton={false}
				>
					<SheetHeader>
						<SheetTitle className={`${bungee.className} prose-p:font-extrabold flex text-4xl items-center justify-baseline font-light`}>
							<p>
								Menu
							</p>
						</SheetTitle>
					</SheetHeader>

					<Separator/>

					<div className="no-scrollbar overflow-y-auto px-4">
						<div className="mt-5 flex flex-col gap-7">
							<MenuIcon href="/" name="Home">
								<HomeIcon/>
							</MenuIcon>

							<MenuIcon href="/viewer" name="3D Viewer">
								<RocketIcon/>
							</MenuIcon>

							<MenuIcon href="/news" name="News">
								<NewspaperIcon/>
							</MenuIcon>

							<MenuIcon href="/launches" name="Launches">
								<CrosshairIcon/>
							</MenuIcon>

							<MenuIcon href="/track" name="Tracker">
								<RadarIcon/>
							</MenuIcon>

							<MenuIcon href="https://www.instagram.com/stari.rocketry/" name="Instagram" newTab>
								<SiInstagram/>
							</MenuIcon>

							<MenuIcon href="/team" name="Our Team">
								<Users/>
							</MenuIcon>
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