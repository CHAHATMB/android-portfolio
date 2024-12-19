import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const honors = [
  "Winner in UI/UX track at HackFrost",
  "Runner Up in Centenary & Quasar Hackathon",
  "Rank 3 (2022) and Rank 2 (2023) at stock trading competition organized by E-Cell, VJTI",
];

export default function Honors() {
  return (
    <section id="honors" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Honors & Awards
        </h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {honors.map((honor, index) => (
                <li key={index}>{honor}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
