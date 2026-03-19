"use client";

import { useLang } from "@/lib/LanguageContext";

const areas = [
  {
    name: "North Shore",
    towns: "Winnetka · Glencoe · Kenilworth · Wilmette",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=520&fit=crop",
  },
  {
    name: "Chicago",
    towns: "Downtown · Lincoln Park · Gold Coast",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=520&fit=crop",
  },
  {
    name: "Northwest Suburbs",
    towns: "Northbrook · Glenview · Northfield · Buffalo Grove",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=520&fit=crop",
  },
  {
    name: "North Suburbs",
    towns: "Highland Park · Deerfield · Evanston · Skokie",
    img: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=600&h=520&fit=crop",
  },
];

export default function Areas() {
  const { t } = useLang();

  return (
    <section id="areas" className="bg-cream py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold mb-2">
            {t.areas.label}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            {t.areas.heading}{" "}
            <em className="italic text-soft-brown">{t.areas.headingHighlight}</em>{" "}
            {t.areas.headingEnd}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((a) => (
            <div
              key={a.name}
              className="group relative rounded-2xl overflow-hidden h-60 md:h-72"
            >
              <img
                src={a.img}
                alt={a.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
                <h3 className="font-serif text-lg md:text-xl text-white font-medium">
                  {a.name}
                </h3>
                <span className="text-[0.68rem] text-white/60 mt-1">{a.towns}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
