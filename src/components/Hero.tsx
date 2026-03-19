"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://storage.googleapis.com/msgsndr/JwaYBiD5p82scUtYFy2I/media/694a283a79fc96fe4ced1cbe.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/75 via-deep-olive/55 to-charcoal/65" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-[5vw] max-w-3xl pt-20">
        <p className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-gold mb-4">
          {t.hero.label}
        </p>

        <h1 className="font-serif text-[clamp(2.5rem,6vw,4.2rem)] font-light leading-[1.1] text-white mb-4">
          {t.hero.title}{" "}
          <em className="italic text-gold-light">{t.hero.titleHighlight}</em>{" "}
          {t.hero.titleEnd}
        </h1>

        <p className="text-[0.95rem] text-white/70 max-w-lg mb-6 font-light leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* Bilingual badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <span className="text-sm">🌎</span>
          <span className="text-xs font-medium text-gold tracking-wider uppercase">
            {t.hero.bilingualTag}
          </span>
        </div>

        <div className="block">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-3.5 text-xs font-bold tracking-[0.12em] uppercase rounded-full hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
