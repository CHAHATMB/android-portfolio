import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Honors from '../components/Honors'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Background from '../components/Background'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Background />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <div className="space-y-32">
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Honors />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

