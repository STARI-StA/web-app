import Image from "next/image";
import { Socials } from "./socials";

export function Menu() {
    return (
        <div className="absolute flex flex-col gap-5 left-0 top-0 min-w-[6vw] bg-background h-full p-6 md:p-10 lg:p-12 items-center text-center">
            <Image
                className="dark:invert"
                src="icons/menu.svg"
                alt="Menu Icon"
                fill
            />

            <Image
                className="invert dark:invert-0"
                src="icons/rocket.svg"
                alt="Menu Icon"
                width={50}
                height={50}
            />

            <Image
                className="invert dark:invert-0"
                src="icons/news.svg"
                alt="Menu Icon"
                width={50}
                height={50}
            />
            <Socials/>
        </div>
    );
}