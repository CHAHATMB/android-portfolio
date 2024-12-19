import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-background/80 rounded-3xl mb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl mb-4">
            Chahat Baghele
          </h1>
          <p className="max-w-[700px] text-xl text-muted-foreground mb-8">
            Android Developer | Software Engineer at Wells Fargo
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="/chahat-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
