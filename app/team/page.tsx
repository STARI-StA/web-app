import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { bungee, inter } from "../ui/fonts";
import Prose from "../ui/primitive/prose";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { members } from "@/lib/static/members";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <div className="prose-h1:mb-0 prose-h4:mt-0 dark:prose-h4:text-gray-400 prose-h4:text-gray-600">
        <Prose font={bungee}>
          <span className="flex flex-row md:gap-5 gap-2 items-baseline">
            <h1>Meet The Team</h1>
            <Users size="1.7em"/>
          </span>
          <h4 >STARI is ran by student volunteers.</h4>
        </Prose>
      </div>
      <div className="flex justify-center items-center m-5">
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          orientation="horizontal"
          className="w-full max-w-sm md:max-w-xl lg:max-w-2xl"
        >
          <CarouselContent>
            {members.map((member, idx) => 
              <CarouselItem key={idx} className="min-h-[40vh] md:min-h-[20vh] lg:min-h-[30vh]">
                <Card style={{borderLeftColor: member.color}} className="w-full border-l-5 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl">
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
          <CarouselPrevious className="hidden sm:flex"/>
          <CarouselNext className="hidden sm:flex"/>
        </Carousel>
      </div>
    </div>
  );
}