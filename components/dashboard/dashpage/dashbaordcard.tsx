import { GlowingEffect } from "@/components/animation/glowing_eff";
import ShinyText from "@/components/animation/shinytext";
import { CardContent, CardHeader, CardTitle, Card } from "@/components/ui/card";

export interface DashcardProps {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  thirdtitle?: string;
}

export const Dashcard = (props: DashcardProps) => {
  return (
    <div className="relative group flex items-center justify-center">
    
      
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <GlowingEffect
          className="w-[140%] h-[140%] rounded-3xl border-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-3xl"
          glow={true}
          borderWidth={6}
          spread={100}
          blur={25}
        />
      </div>

      
      <Card className="relative z-10 border rounded-3xl p-8 dark:shadow-[0px_0px_60px_10px_#2D2D2D] bg-background/80 backdrop-blur-lg transition-transform duration-300 hover:scale-105">
   
        <CardHeader className="flex flex-row items-center justify-between pb-4 gap-x-2">
          <ShinyText text={props.title} disabled={false} speed={1.5} className="text-lg font-semibold" />
          <span className="h-6 w-6">{props.icon}</span>
        </CardHeader>

    
        <CardContent className="space-y-3">
          <div className="text-3xl font-extrabold">
            <ShinyText text={props.subtitle || ""} disabled={false} speed={1.2} className="text-4xl font-bold" />
          </div>
          <p className="text-sm text-muted-foreground">
            <ShinyText text={props.thirdtitle || ""} disabled={false} speed={1.1} className="text-base" />
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
