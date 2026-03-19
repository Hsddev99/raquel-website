"use client";

import { useLang } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLang();

  const creds = [
    { icon: "⭐", label: t.about.cred1 },
    { icon: "🎓", label: t.about.cred2 },
    { icon: "🌎", label: t.about.cred3 },
    { icon: "📊", label: t.about.cred4 },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Photos */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl overflow-hidden h-72 md:h-80 bg-cream">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
              alt="Raquel Rojas Moran professional headshot"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-72 md:h-80 bg-cream mt-8">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=500&fit=crop"
              alt="Raquel Rojas Moran showing North Shore property"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold mb-2">
            {t.about.label}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-5">
            {t.about.heading}{" "}
            <em className="italic text-soft-brown">{t.about.headingHighlight}</em>
          </h2>
          <p className="text-sm text-charcoal/60 leading-relaxed mb-4">{t.about.p1}</p>
          <p className="text-sm text-charcoal/60 leading-relaxed mb-4">{t.about.p2}</p>
          <p className="text-sm text-charcoal/60 leading-relaxed mb-6">{t.about.p3}</p>

          <div className="flex flex-wrap gap-3">
            {creds.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 text-xs font-semibold text-soft-brown bg-cream rounded-full px-4 py-2"
              >
                <span>{c.icon}</span> {c.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
