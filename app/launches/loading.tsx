import PageContent from "../ui/structural/page-content";
import Prose from "../ui/primitive/prose";
import { bungee } from "../ui/fonts";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

 
export default function Loading() {

  return (
    <PageContent>
      <Prose font={bungee}>
        <h1 className="mt-10">Upcoming Launches</h1>
      </Prose>
      <Separator/>
      <div className="flex flex-col gap-5 justify-start items-center overflow-y-scroll scrollbar-none">
        <Skeleton className="w-xs md:w-5xl h-30 md:h-20 rounded-xl"/>
        <Skeleton className="w-xs md:w-5xl h-30 md:h-20 rounded-xl"/>
      </div>
    </PageContent>
  );
}
