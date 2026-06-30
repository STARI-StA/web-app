import Link from "next/link"
import { FileQuestionMarkIcon } from "lucide-react"
import { CircleQuestionMarkIcon } from "lucide-react"
 
export default function NotFound() {
  return (
    <div className="flex flex-col gap-3 w-full h-full text-center items-center py-32">
      <CircleQuestionMarkIcon size="50"></CircleQuestionMarkIcon>
      <h2>We could not find that resource</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}