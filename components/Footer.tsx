import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0 md:py-4 px-6 sm:px-8 md:px-12">
        {/* Copyright Section */}
        <div className="text-center text-sm md:text-left">
          <p className="leading-loose">
            © 2024 <span className="font-bold">Chahat Baghele</span>. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-sm font-medium">
          <Link 
            href="https://www.linkedin.com/in/chahatmb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </Link>
          <Link 
            href="https://github.com/chahatmb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </Link>
          <Link 
            href="https://www.hackerrank.com/profile/chahatmb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            HackerRank
          </Link>
          <Link 
            href="https://leetcode.com/chahatmb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LeetCode
          </Link>
        </div>
      </div>
    </footer>
  );
}
