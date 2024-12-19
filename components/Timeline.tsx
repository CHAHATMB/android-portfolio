import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-12">
      {items.map((item, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-full bg-primary/30" />
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-background" />
            </div>
          </div>
          <Card className="flex-grow shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">{item.title}</CardTitle>
              <CardDescription className="text-lg font-medium">
                {item.subtitle}
              </CardDescription>
              <CardDescription className="text-sm font-medium text-primary">
                {item.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {item.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
