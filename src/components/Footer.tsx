"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-charcoal text-white/50 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="font-serif text-xl text-white mb-2">
            Raquel <span className="text-gold">Rojas Moran</span>
          </div>
          <p className="text-xs leading-relaxed max-w-xs">{t.footer.description}</p>
          <p className="text-xs mt-2">{t.footer.address}</p>
          <div className="mt-3 pt-3 border-t border-white/8 text-[0.68rem] text-white/30">
            <strong className="text-white/50">Baird & Warner</strong> — Chicago&apos;s #1 Brokerage
          </div>
          {/* Social */}
          <div className="flex gap-2 mt-3">
            {[
              { label: "IG", href: "https://www.instagram.com/raquelrojasmoran_realtor/" },
              { label: "FB", href: "https://www.facebook.com/raquelrojasmoranrealestate" },
              { label: "IN", href: "https://www.linkedin.com/in/raquelrojasmoran/" },
              { label: "YT", href: "https://www.youtube.com/@raquelrojasmoran" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[0.65rem] text-white/50 hover:border-gold hover:text-gold transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-gold mb-4">
            {t.footer.quickLinks}
          </h4>
          {[
            { label: t.nav.about, href: "#about" },
            { label: t.nav.listings, href: "#listings" },
            { label: t.nav.areas, href: "#areas" },
            { label: t.nav.reviews, href: "#reviews" },
            { label: t.nav.contact, href: "#contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-xs text-white/50 hover:text-gold transition-colors mb-2"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-gold mb-4">
            {t.footer.explore}
          </h4>
          {[
            { label: "Baird & Warner", href: "https://raquelrojasmoran.bairdwarner.com/" },
            { label: "Zillow Profile", href: "https://www.zillow.com/profile/raquel%20rojasmoran" },
            { label: "Google Reviews", href: "https://www.google.com/maps/place/Raquel+Rojas+Moran+-+Real+Estate+Broker,+Baird+%26+Warner/" },
            { label: "raquel.moran@bairdwarner.com", href: "mailto:raquel.moran@bairdwarner.com" },
            { label: "(224) 282-4610", href: "tel:2242824610" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block text-xs text-white/50 hover:text-gold transition-colors mb-2"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-5 border-t border-white/8 text-center text-[0.68rem]">
        {t.footer.copyright}
      </div>
    </footer>
  );
}
