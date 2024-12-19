import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const projects = [
  {
    title: "VaCart",
    description:
      "Android app for real-time train seat vacancy tracking in Indian Railways",
    technologies: "Compose, Kotlin, Hilt, Kotlin Flow, Coroutines, Retrofit",
    details:
      "Built with a modern UI using Jetpack Compose and Material 3. Utilized Retrofit, Kotlin Flow, and MVVM architecture for efficient API calls and smooth performance.",
    link: "#",
  },
  {
    title: "CoWall",
    description:
      "Android app for real-time lock screen wallpaper updates between users",
    technologies: "Koin, Firebase, Kotlin",
    details:
      "Utilized Firebase Realtime Database, Firebase Storage, and in-app image filters. Followed Event driven architecture with Koin for dependency injection.",
    link: "#",
  },
  {
    title: "Password Manager",
    description: "Secure Android app for managing passwords",
    technologies: "Compose, Material3, Room",
    details:
      "Utilized AES encryption and Room Database for local storage of encrypted data. Designed with Jetpack Compose and Material3, featuring both light and dark modes.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-lg">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-semibold mb-2 text-primary">
                  Technologies: {project.technologies}
                </p>
                <p className="mb-4 text-muted-foreground">{project.details}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={project.link}>View Project</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
