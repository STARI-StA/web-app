import Link from "next/link"
import { Wrench } from "lucide-react"
 
export default function Page() {
  return (
    <div className="flex flex-col gap-3 w-full h-full text-center items-center py-32">
      <Wrench size="80"></Wrench>
      <h1>This page is under construction!</h1>
      <Link href="/">Return Home</Link>
    </div>
  )
}