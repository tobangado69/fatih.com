"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/5 sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-3">
        <div className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
        <Link href="/" className="text-base md:text-lg font-semibold text-white tracking-tight cursor-pointer">
          Fatih
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 text-sm font-medium text-white/80 tracking-tight items-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-white transition-colors duration-200 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
        <div className="h-5 w-px bg-white/10" />
        <div className="flex gap-4 text-white/70 items-center">
          <a
            href="#"
            aria-label="X"
            className="hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Dribbble"
            className="hover:text-white transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
              <path d="M8.56 2.75c4.37 6 6.5 11.65 7.5 21" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM18.91 18.74h-3v-4.26c0-1.08-.43-1.58-1.28-1.58-.93 0-1.44.62-1.44 1.58v4.26h-3v-9h3v1.3a3.15 3.15 0 0 1 2.71-1.49c1.69 0 3.01 1.03 3.01 3.16Z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile toggle */}
      <button
        className="md:hidden inline-flex hover:bg-white/10 transition-all active:scale-95 z-50 text-sm text-white/90 bg-white/5 border border-white/10 rounded-full px-3 py-2 backdrop-blur-sm items-center justify-center"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-zinc-950/98 backdrop-blur-3xl z-40 flex flex-col pt-28 px-4">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-white tracking-tight hover:text-blue-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
