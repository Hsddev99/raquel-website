"use client";

import { useLang } from "@/lib/LanguageContext";

const stats = [
  { num: "146+", key: "reviews" as const },
  { num: "5.0", key: "rating" as const },
  { num: "$20M+", key: "listings" as const },
  { num: "6+", key: "experience" as const },
];

export default function StatsBar() {
  const { t } = useLang();

  return (
    <section className="bg-deep-olive py-8">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.key} className="text-center">
            <div className="font-serif text-3xl md:text-4xl font-light text-gold">
              {s.num}
            </div>
            <div className="text-[0.65rem] tracking-[0.12em] uppercase text-white/50 mt-1">
              {t.stats[s.key]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
