import Image from "next/image";

export function Banner() {
    return (
        <div className="absolute top-0 w-full py-16 md:py-20 lg:py-25">
            <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={100}
                height={20}
                priority
            />
        </div>
    );
}