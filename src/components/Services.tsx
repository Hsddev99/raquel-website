"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Services() {
  const { t } = useLang();

  const services = [
    { icon: "🏠", ...t.services.buying },
    { icon: "📈", ...t.services.selling },
    { icon: "✈️", ...t.services.relocation },
  ];

  return (
    <section id="services" className="bg-cream py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold mb-2">
            {t.services.label}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            {t.services.heading}{" "}
            <em className="italic text-soft-brown">{t.services.headingHighlight}</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 rounded-2xl border border-black/5 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-cream flex items-center justify-center text-2xl">
                {s.icon}
              </div>
              <h3 className="font-serif text-lg font-medium mb-3">{s.title}</h3>
              <p className="text-sm text-charcoal/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
