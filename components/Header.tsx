import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6 sm:px-8 md:px-12">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-wide">Chahat Baghele</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
            <Link href="#education" className="hover:text-primary transition-colors">Education</Link>
            <Link href="#honors" className="hover:text-primary transition-colors">Honors</Link>
          </nav>
        </div>

        {/* Theme Toggle and Contact Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="#contact" className="text-sm font-medium">Contact Me</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
