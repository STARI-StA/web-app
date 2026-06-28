import Image from "next/image";

export function Socials() {
    return (
        <a target="_blank" href="https://www.instagram.com/stari.rocketry/">
            <Image
                src="/branding/Instagram_Glyph_Gradient.svg"
                alt="Instagram Logo"
                width={40}
                height={40}
            />
        </a>
    )
}