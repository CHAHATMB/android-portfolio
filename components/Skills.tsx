import { Badge } from "./ui/badge";

const skills = {
  "Programming Languages": ["C/C++", "JavaScript", "Kotlin", "Java"],
  "Libraries/Frameworks": [
    "Jetpack Compose",
    "LiveData",
    "Retrofit",
    "Room",
    "Coroutines",
    "Dagger",
    "MVVM",
  ],
  "Tools / Platforms": [
    "Kafka",
    "Android Studio",
    "Git",
    "Postman",
    "Jenkins",
    "Jira",
  ],
  Databases: ["RDBMS / SQL", "MongoDB / NoSQL", "Firebase"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-accent/10 rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-background p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1 px-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
