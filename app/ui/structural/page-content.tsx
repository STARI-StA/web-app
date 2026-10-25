import { ReactNode } from "react"

export default function PageContent( {children} : { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col justify-center gap-10 px-8 lg:px-32">
      {children}
    </div>
  )
}