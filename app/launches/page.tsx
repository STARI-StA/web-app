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
 
export default async function Page() {

  const sql = neon(process.env.POSTGRES_URL!)
  const launches = await sql`SELECT * FROM launches ORDER BY date ASC` as Launch[];

  return (
    <PageContent>
      <Prose font={bungee}>
        <h1 className="mt-10">Upcoming Launches</h1>
      </Prose>
      <Separator/>
        <div className="flex justify-center items-center overflow-y-scroll scrollbar-none">
          {
            launches.map((launch, idx) =>
              <Card key={idx} className="relative pt-0 md:w-5xl max-w-full p-5 border-l-5 border-l-chart-4">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl">
                    {new Date(launch.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric',timeZone: 'UTC', })}
                  </CardTitle>
                  <CardDescription>{launch.location} | {launch.time}</CardDescription>
                </CardHeader>
                <Separator/>
                <CardContent className="text-left">
                  {launch.description}
                </CardContent>
              </Card>
            )
          }
        </div>
    </PageContent>
  );
}
