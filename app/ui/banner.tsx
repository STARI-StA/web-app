import Image from "next/image";

export function Banner() {
    return (
        <div className="absolute top-0 w-full py-10 md:py-14 lg:py-19 bg-background">
            <span className="absolte mx-auto flex flex-col text-center items-center gap-3">
                <Image
                    className="dark:invert"
                    src="/logo.png"
                    alt="STARI LOGO"
                    width={200}
                    height={40}
                    priority
                />
                <span className="text-subtle">
                    St Andrews Aerospace
                </span>
            </span>
        </div>
    );
}