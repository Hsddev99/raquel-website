"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function ContactForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-deep-olive py-20 md:py-28 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-2">
          {t.contact.heading}{" "}
          <em className="italic text-gold-light">{t.contact.headingHighlight}</em>
        </h2>
        <p className="text-sm text-white/50 mb-8">{t.contact.subtitle}</p>

        {status === "success" ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">✅</div>
            <p className="text-white text-lg font-serif">{t.contact.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <label className="text-[0.7rem] font-semibold tracking-wider uppercase text-white/60 mb-1 block">
                {t.contact.firstName}
              </label>
              <input
                type="text"
                name="firstName"
                required
                placeholder={t.contact.firstName}
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white text-sm placeholder:text-white/30 focus:border-gold outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[0.7rem] font-semibold tracking-wider uppercase text-white/60 mb-1 block">
                {t.contact.lastName}
              </label>
              <input
                type="text"
                name="lastName"
                required
                placeholder={t.contact.lastName}
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white text-sm placeholder:text-white/30 focus:border-gold outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[0.7rem] font-semibold tracking-wider uppercase text-white/60 mb-1 block">
                {t.contact.email}
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white text-sm placeholder:text-white/30 focus:border-gold outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[0.7rem] font-semibold tracking-wider uppercase text-white/60 mb-1 block">
                {t.contact.phone}
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="(xxx) xxx-xxxx"
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white text-sm placeholder:text-white/30 focus:border-gold outline-none transition-colors"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-[0.7rem] font-semibold tracking-wider uppercase text-white/60 mb-1 block">
                {t.contact.interest}
              </label>
              <select
                name="interest"
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white text-sm focus:border-gold outline-none transition-colors appearance-none cursor-pointer"
              >
                {t.contact.interestOptions.map((opt, i) => (
                  <option key={i} value={i === 0 ? "" : opt} className="bg-charcoal text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-[0.7rem] font-semibold tracking-wider uppercase text-white/60 mb-1 block">
                {t.contact.language}
              </label>
              <select
                name="preferredLanguage"
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white text-sm focus:border-gold outline-none transition-colors appearance-none cursor-pointer"
              >
                {t.contact.langOptions.map((opt, i) => (
                  <option key={i} value={opt} className="bg-charcoal text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-[0.7rem] font-semibold tracking-wider uppercase text-white/60 mb-1 block">
                {t.contact.message}
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder={t.contact.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white text-sm placeholder:text-white/30 focus:border-gold outline-none transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="md:col-span-2 bg-gold text-charcoal py-3.5 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "..." : t.contact.submit}
            </button>
            {status === "error" && (
              <p className="md:col-span-2 text-red-300 text-sm text-center">{t.contact.error}</p>
            )}
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-white/10">
          <a href="tel:2242824610" className="text-gold font-serif text-2xl hover:text-gold-light transition-colors">
            (224) 282-4610
          </a>
          <p className="text-xs text-white/35 mt-1">{t.contact.callDirect}</p>
        </div>
      </div>
    </section>
  );
}
