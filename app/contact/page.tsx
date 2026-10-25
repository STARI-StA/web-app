import { Wrench } from "lucide-react"
import LinkButton from "../ui/primitive/link-button"
 
export default function Page() {
  return (
    <div className="flex flex-col gap-3 w-full h-full text-center items-center py-32">
      <Wrench size="80"></Wrench>
      <h1>This page is under construction!</h1>
      <LinkButton href="/" variant="ghost">Return Home</LinkButton>
    </div>
  )
}