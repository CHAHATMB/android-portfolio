import { Timeline } from './Timeline'

const experiences = [
  {
    title: "Software Engineer (Android)",
    subtitle: "Wells Fargo, Bengaluru, India",
    date: "June 2024 - Present",
    description: [
      "Revamped UI by adding a gradient look, improving the application's visual appeal.",
      "Upgrading the MiSnap SDK to its latest version, re-implementing screens and workflows using Clean Architecture for seamless integration and scalable code.",
      "Resolved critical bugs to improve app stability and enhance the user experience.",
      "Collaborated with cross-functional teams to implement solutions, ensuring integration of new features."
    ]
  },
  {
    title: "Program Associate",
    subtitle: "Wells Fargo, Bengaluru, India",
    date: "July 2023 - June 2024",
    description: [
      "Created a tool to capture/modify API calls b/w mobile apps and servers for debugging and testing.",
      "Developed fuzzing logic to generate templates for modifying API responses and engineered a system to use multiple templates in a single session, streamlining and enhancing testing efficiency.",
      "As a part of tool, built a web app to display, modify and set config for real-time JSON responses, providing insights and control over data.",
      "Used by over 15 scrum teams and 50+ testers, demonstrating its effectiveness."
    ]
  },
  {
    title: "Nodejs Developer",
    subtitle: "Picostone, Mumbai, India",
    date: "Sep 2022 - Oct 2022",
    description: [
      "Enhanced backend architecture to optimize performance and scalability.",
      "Developed a centralized command center for IoT devices, leveraging Mosquitto and MQTT protocols."
    ]
  },
  {
    title: "Technology Intern",
    subtitle: "Wells Fargo, Remote",
    date: "May 2022 - July 2022",
    description: [
      "Architected and implemented a real-time streaming analytics pipeline utilizing Apache Kafka for data ingestion and distribution.",
      "Leveraged Apache Spark and Python Dashboard to analyze transaction data and visualize results in real-time"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-accent/10 rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Experience</h2>
        <Timeline items={experiences} />
      </div>
    </section>
  )
}

