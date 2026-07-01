import { bungee } from "../fonts";
import { ChevronDown } from "lucide-react";


export default function Meridian() {
  return (
    <div 
      className={`${bungee.className} h-full antialiased text-foreground prose-headings:text-foreground prose prose-headings:font-bold prose-p:font-semibold prose-sm md:prose-2xl relative left-0 top-0 py-16 px-16 md:px-30 w-screen`}
    >
      <div className="flex flex-row gap-10">
        <div>
          <h1>
            Introducing<br/>Meridian <span className="animate-blink">|</span>
          </h1>
        </div>
        <div className="hidden md:inline-block">
          <figure className="rotate-210 md:w-xl">
            <img src="/branding/rocket.png"></img>
          </figure>
        </div>
      </div>

      <p>St Andrew's premier rocket development project.</p>
    </div>
  );
}