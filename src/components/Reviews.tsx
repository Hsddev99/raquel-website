"use client";

import { useLang } from "@/lib/LanguageContext";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  const { t } = useLang();

  return (
    <section id="reviews" className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-cream px-5 py-2 rounded-full mb-4">
          <span className="text-gold text-lg tracking-widest">★★★★★</span>
          <span className="text-sm font-semibold">{t.reviews.badge}</span>
        </div>
        <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold mb-2">
          {t.reviews.label}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light">
          {t.reviews.heading}{" "}
          <em className="italic text-soft-brown">{t.reviews.headingHighlight}</em>
        </h2>
      </div>

      {/* Scrollable reviews */}
      <div className="flex gap-5 overflow-x-auto pb-4 hide-scrollbar -mx-6 px-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="min-w-[320px] max-w-[360px] flex-shrink-0 text-left bg-white border border-black/5 rounded-2xl p-6"
          >
            <div className="text-gold text-sm tracking-widest mb-3">★★★★★</div>
            <blockquote className="text-sm text-charcoal/60 leading-relaxed mb-5">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-deep-olive text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                {r.initial}
              </div>
              <div>
                <strong className="text-sm block">{r.author}</strong>
                <span className="text-xs text-charcoal/40">
                  {r.type} · {r.source}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center justify-center flex-wrap gap-3 mt-8">
        <a
          href="https://reviews.birdeye.com/raquel-rojas-moran-real-estate-broker-baird-warner-169831131411732"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold font-semibold text-sm hover:text-soft-brown transition-colors"
        >
          {t.reviews.allReviews} →
        </a>
      </div>
    </section>
  );
}
