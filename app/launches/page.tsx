import PageContent from "../ui/structural/page-content";
import Prose from "../ui/primitive/prose";
import { bungee } from "../ui/fonts";
import { Separator } from "@/components/ui/separator";
import { neon } from "@neondatabase/serverless";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ClockIcon, CloudLightningIcon, TruckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
 
export default async function Page() {

  const sql = neon(process.env.STORAGE_POSTGRES_URL!)
  const launches = await sql`SELECT * FROM launches ORDER BY date DESC` as Launch[];

  return (
    <PageContent>
      <Prose font={bungee}>
        <h1 className="mt-10">Upcoming Launches</h1>
      </Prose>
      <Separator/>
      <div className="flex flex-col items-center gap-5 max-h-70 overflow-y-auto scrollbar-none pb-10 mask-b-from-80%">
        {
          launches.map((launch, idx) =>
            <Card key={idx} className="md:w-5xl shrink-0 max-w-full pt-5 border-l-5 border-l-chart-4">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl">
                  {new Date(launch.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric',timeZone: 'UTC', })}
                </CardTitle>
                <CardDescription>
                  {launch.location} | {launch.time} 
                </CardDescription>
              </CardHeader>
              <Separator/>
              <CardContent className="text-left">
                {launch.description}
              </CardContent>
              <CardFooter>
                <span className={cn("flex flex-row ml-1 gap-1 items-center", {'text-red-400': launch.delayed})}>
                  {(launch.delayed)? <p>Cancelled due to {launch.delayCause}</p> : <>On Schedule <ClockIcon/></>}
                  {launch.delayCause == "Weather" && <CloudLightningIcon/>}
                  {launch.delayCause == "Logistics" && <TruckIcon/>}  
                </span>
              </CardFooter>
            </Card>
          )
        }
      </div>
    </PageContent>
  );
}
