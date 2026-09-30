import { Separator } from "@/components/ui/separator";
import { CopyrightIcon } from "lucide-react";
import { SiGmail, SiInstagram, SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative w-full mt-auto">
      <Separator/>
      <div className="w-full flex flex-col gap-5 p-5">
        <div className="w-40 flex flex-row gap-10">
          <img className="w-full invert" src="/branding/STARI-logo.png"/>
          <CopyrightIcon/> 
        </div>
        <div className="grow flex flex-row items-center gap-5">
          <div className="flex flex-row gap-1">
            <Button size="icon">
              <SiInstagram/>
            </Button>
            <Button size="icon">
              <SiGmail/>
            </Button>
            <Button size="icon">
              <SiGithub/>
            </Button>
          </div>
          <div className="flex flex-row gap-1">
            <CopyrightIcon/>
            2026
          </div>
          Website by Hamish Hamilton-Smith
        </div>
      </div>
    </footer>
  );
}