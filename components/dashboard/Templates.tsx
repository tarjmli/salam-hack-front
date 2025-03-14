import Image from "next/image";
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: "1",
    title: "Next.js + react-intl",
    description:
      "A starter template with Next.js and react-intl pre-configured",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1200px-Google_Translate_logo.svg.png",
  },
  {
    id: "2",
    title: "React + i18next",
    description: "A React template with i18next for internationalization",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1200px-Google_Translate_logo.svg.png",
  },
  {
    id: "3",
    title: "E-commerce Starter",
    description: "Multi-language e-commerce template with product catalog",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1200px-Google_Translate_logo.svg.png",
  },
  {
    id: "4",
    title: "Blog Platform",
    description: "Multilingual blog platform with content management",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1200px-Google_Translate_logo.svg.png",
  },
];

export default function TemplateSection() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {templates.map((template) => (
        <div
          key={template.id}
          className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
        >
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={
                template.image ||
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1200px-Google_Translate_logo.svg.png"
              }
              alt={template.title}
              width={300}
              height={200}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4 flex flex-col justify-between border border-transparent">
            <h3 className="font-medium">{template.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {template.description}
            </p>
            <Button className="mt-3 w-full" variant="outline" size="sm">
              Use Template
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
