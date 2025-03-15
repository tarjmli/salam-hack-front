import { BackgroundLines } from "@/components/animation/background-lines"
import ShinyText from "@/components/animation/shinytext"

export const Dashmain=()=>{
    return (
        <div className="mb-12 text-center">
       
         <ShinyText text= "دعونا نبني مشروعا جديدا" disabled={false} speed ={1.5}  className="bg-gradient-to-tr from-gray-800 via-black to-gray-900 font-extrabold text-4xl"/>

     
        <p className="mt-4 text-muted-foreground">
          استورد مستودع غيتهاب لإضافة التدويل باستخدام react-intl أو ابدأ
          باستخدام أحد قوالبنا{" "}
        </p>
      </div>
     
    )
}