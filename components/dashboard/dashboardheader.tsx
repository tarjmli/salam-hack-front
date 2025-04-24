import Link from "next/link"
import Magnet from "../animation/magnet"
import { Button } from "../ui/button"

export const DashboardHeader = () => {
    return(
        <div>
            <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <Magnet>
            <Link href={"/"}>
            <Button variant="ghost" size="sm" className="font-bold text-xl">
              <span className="hover:opacity-80 text-white">
                ترجملي
              </span>
            </Button>
            </Link>
          </Magnet>
          
          <div className="flex items-center gap-4">
            <Button  variant={"ghost"}  size="sm" className="font-bold text-xl">
              <Link href={"/dashboard"}>
                <span className="hover:opacity-80 text-white">
                  الصفحة الرئيسية
                </span>
              </Link>
            </Button>
            <Link href={"/dashboard/da3m"}>
            <Button variant={"ghost"} size="sm" className="font-bold text-xl">
              <span className="hover:opacity-80 text-white">
                الدعم
              </span>
            </Button>
            </Link>
            <Link href={"/dashboard/settings"}>
              <Button variant="ghost" size="sm" className="font-bold text-xl">
                <span className="hover:opacity-80 text-white">
                  الإعدادات
                </span>
              </Button>
            </Link>
           
          
          </div>
        </div>
      </header>
        </div>
    )

}

