import Image from "next/image";

export function Socials() {
    return (
        <a target="_blank" href="https://www.instagram.com/stari.rocketry/">
            <Image
                className="dark:invert absolute left-6 bottom-6"
                src="/Instagram_Glyph_Black.png"
                alt="Instagram Logo"
                width={40}
                height={40}
            />
        </a>
    )
}