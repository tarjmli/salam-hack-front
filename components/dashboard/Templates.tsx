import Image from "next/image";
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: "1",
    title: "Next.js + react-intl",
    description:
      "A starter template with Next.js and react-intl pre-configured",
    image:
      "https://mostaql.hsoubcdn.com/uploads/thumbnails/1565655/67a378b4384f2/Screenshot-2025-02-05-154032.png?s=medium",
  },
  {
    id: "2",
    title: "React + i18next",
    description: "A React template with i18next for internationalization",
    image:
      "https://mostaql.hsoubcdn.com/uploads/thumbnails/1565655/67a375c24fabe/Screenshot-2025-02-05-152754.png?s=medium",
  },
  {
    id: "3",
    title: "E-commerce Starter",
    description: "Multi-language e-commerce template with product catalog",
    image:
      "https://mostaql.hsoubcdn.com/uploads/thumbnails/1565655/64a42fba0b3f3/image2023-07-04153738611.png?s=medium",
  },
  {
    id: "4",
    title: "Blog Platform",
    description: "Multilingual blog platform with content management",
    image:
      "https://mostaql.hsoubcdn.com/uploads/thumbnails/1565655/67a377d9ef2a8/1733768749612.jpg?s=medium",
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
