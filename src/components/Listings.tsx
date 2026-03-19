"use client";

import { useLang } from "@/lib/LanguageContext";
import listingsData from "@/data/listings.json";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function Listings() {
  const { t } = useLang();

  return (
    <section id="listings" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-12">
        <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold mb-2">
          {t.listings.label}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light">
          {t.listings.heading}{" "}
          <em className="italic text-soft-brown">{t.listings.headingHighlight}</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {listingsData.slice(0, 6).map((listing) => (
          <a
            key={listing.id}
            href={listing.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden bg-white border border-black/5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
          >
            <div
              className="h-52 bg-cover bg-center relative bg-cream"
              style={{ backgroundImage: `url(${listing.image})` }}
            >
              <span
                className={`absolute top-3 left-3 text-[0.6rem] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
                  listing.status === "active"
                    ? "bg-deep-olive text-white"
                    : "bg-gold text-charcoal"
                }`}
              >
                {listing.status === "active" ? t.listings.active : t.listings.sold}
              </span>
            </div>
            <div className="p-5">
              <div className="font-serif text-xl font-semibold">
                {formatPrice(listing.price)}
              </div>
              <div className="text-sm text-charcoal/50 mt-1">
                {listing.address}, {listing.city}, {listing.state} {listing.zip}
              </div>
              <div className="text-xs text-charcoal/40 mt-1">
                {listing.beds} bed · {listing.baths} bath
                {listing.sqft ? ` · ${listing.sqft.toLocaleString()} sqft` : ""}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://raquelrojasmoran.bairdwarner.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all"
        >
          {t.listings.viewAll}
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
