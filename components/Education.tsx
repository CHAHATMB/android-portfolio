import { Timeline } from './Timeline'

const education = [
  {
    title: "Bachelor's in Information Technology",
    subtitle: "Veermata Jijabai Technological Institute, Mumbai, India",
    date: "July 2019 - May 2023",
    description: [
      "CGPA: 8.98",
      "Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks"
    ]
  }
]

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-accent/10 rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Education</h2>
        <Timeline items={education} />
      </div>
    </section>
  )
}

