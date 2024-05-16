import { Outlet } from "react-router-dom"

import Topbar from "@/components/custom/Topbar"
import Bottombar from "@/components/custom/Bottombar"
import Sidebar from "@/components/custom/Sidebar"


const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <Sidebar />

      <section className="flex flex-1 h-full"> 
        <Outlet />
      </section>

      <Bottombar />
    </div>
  )
}

export default RootLayout
