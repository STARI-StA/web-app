import Image from "next/image";

interface MenuIconProps {
    src: string,
    alt: string
}

export function MenuIcon( {src, alt}: MenuIconProps) {
    return (
        <div className="w-6 h-6">
            <Image
                src={src}
                alt={alt}
                fill
            />
        </div>
    );
}