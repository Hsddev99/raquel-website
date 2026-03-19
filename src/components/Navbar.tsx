"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#listings", label: t.nav.listings },
    { href: "#areas", label: t.nav.areas },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-xl text-white tracking-wide">
          Raquel <span className="text-gold">Rojas Moran</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-white/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLang}
              className="text-[0.72rem] font-bold tracking-[0.1em] uppercase bg-gold/20 text-gold px-3 py-1.5 rounded-full hover:bg-gold/30 transition-colors"
            >
              {lang === "en" ? "🇪🇸 ES" : "🇺🇸 EN"}
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLang}
            className="text-xs font-bold tracking-wider uppercase bg-gold/20 text-gold px-3 py-1.5 rounded-full"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur-md border-t border-white/5 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-white/80 hover:text-gold transition-colors border-b border-white/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
