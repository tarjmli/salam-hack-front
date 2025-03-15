import ShinyText from "./animation/shinytext";

export const MyText = ( text: string) => {
    return (
        <ShinyText text= {text}  disabled={false} speed ={1.5}  className="text-xl font-bold  transition duration-300 ease-in-out hover:underline"/>
    );
    }