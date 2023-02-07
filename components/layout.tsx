import { SiteHeader } from "@/components/site-header"
import Sidebar from "./sidebar"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <div className="flex">
      <Sidebar />
        <div className="flex w-full flex-1 flex-col overflow-x-hidden">
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}
