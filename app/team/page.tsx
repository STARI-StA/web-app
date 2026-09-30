import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { bungee } from "../ui/fonts";
import Prose from "../ui/primitive/prose";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { members } from "@/lib/static/members";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 justify-center px-8">
      <div className="prose-h1:mb-0 prose-h4:mt-0 dark:prose-h4:text-gray-400 prose-h4:text-gray-600">
        <Prose font={bungee}>
          <span className="flex flex-row gap-5 items-baseline">
            <h1>Meet The Team</h1>
            <Users size="1.7em"/>
          </span>
          <h4 >Stari is ran by student volunteers.</h4>
        </Prose>
      </div>
      <div className="flex justify-center items-center">
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          orientation="horizontal"
          className="w-full max-w-xs md:max-w-xl lg:max-w-2xl"
        >
          <CarouselContent>
            {members.map((member, idx) => 
              <CarouselItem key={idx} className="min-h-[10vh] lg:min-h-[30vh]">
                <Card style={{borderLeftColor: member.color}} className="w-full border-l-5 h-full">
                  <CardHeader>
                    <CardTitle className="text-3xl">
                      {member.name}
                    </CardTitle>
                    <CardDescription>
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <Separator/>
                  <CardContent>
                    {member.description}
                  </CardContent>
                </Card>
              </CarouselItem>)}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}