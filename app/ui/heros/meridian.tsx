import { bungee } from "../fonts";
import { michroma } from "../fonts";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RotatingText, RotatingTextContainer } from "@/components/animate-ui/primitives/texts/rotating";


export default function Meridian() {
  return (
    <div>
      {
        //<ChevronDown size="30" className="absolute mx-auto bottom-5 left-1/2"></ChevronDown>-->
      }
      <div 
        className={`${bungee.className} max-w-none h-full antialiased text-foreground prose-headings:text-foreground prose prose-headings:font-bold prose-p:font-semibold prose-sm md:prose-2xl relative left-0 top-0 py-16 px-16 md:px-30 w-screen`}
      >
        <div className="relative h-full">
          <div className="flex flex-col md:flex-row md:gap-10">
            <div>
              <h1>
                Introducing<br/>Meridian <span className="animate-blink">|</span>
              </h1>
            </div>
            <div className="flex justify-center items-center p-10 md:p-0">
              <figure className="rotate-330 md:rotate-210 w-sm md:w-xl">
                <img src="/branding/rocket.png"></img>
              </figure>
            </div>
          </div>
          <h4 className="relative bottom-1">
            St Andrew's premier rocket development project.
            <br/>
            <RotatingTextContainer duration={4000} text={["advanced telemetry tracking", "custom avionics", "a g-class solid rocket motor"]}>
              <span className="flex flex-row gap-2">
                Featuring
                <span className="text-red-800"><RotatingText/></span>
              </span>
            </RotatingTextContainer>
          </h4>
        </div>
      </div>
    </div>
  );
}