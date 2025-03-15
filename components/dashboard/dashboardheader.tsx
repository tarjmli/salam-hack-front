import Link from "next/link"
import Magnet from "../animation/magnet"
import { Button } from "../ui/button"
import ShinyText from "../animation/shinytext"

export const DashboardHeader = () => {
    return(
        <div>
            <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <Magnet>
            <Link href={"/"}>
            <Button variant="ghost" size="sm" >
              <span className="hover:opacity-80">
                <ShinyText  text="ترجملي"  disabled={false} speed ={1.5} className="text-xl font-bold  transition duration-300 ease-in-out hover:underline"/>
              </span>
            </Button>
            </Link>
          </Magnet>
          
          <div className="flex items-center gap-4">
            <Button  variant={"ghost"}  size="sm" >
              <Link href={"/dashboard"}>
                <span className="hover:opacity-80">
                  <ShinyText text="المساعدة"  disabled={false} speed ={1.5}  className="text-xl font-bold  transition duration-300 ease-in-out hover:underline"/>
                </span>
              </Link>
            </Button>
            <Button variant={"ghost"} size="sm">
              <ShinyText text="الدعم"  disabled={false} speed ={1.5}  className="text-xl font-bold transition duration-300 ease-in-out hover:underline"/>
            </Button>
            <Link href={"/dashboard/settings"}>
              <Button variant="ghost" size="sm">
                <ShinyText text="الإعدادات"  disabled={false} speed ={1.5}  className="text-xl font-bold transition duration-300 ease-in-out hover:underline"/>
              </Button>
            </Link>
           
          
          </div>
        </div>
      </header>
        </div>
    )

}


