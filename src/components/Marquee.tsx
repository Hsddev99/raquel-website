const towns = [
  "Winnetka", "Glencoe", "Kenilworth", "Wilmette", "Glenview", "Northfield",
  "Northbrook", "Highland Park", "Deerfield", "Evanston", "Skokie",
  "Buffalo Grove", "Chicago",
];

export default function Marquee() {
  return (
    <div className="bg-charcoal overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {[...towns, ...towns].map((t, i) => (
          <span
            key={i}
            className="font-serif text-sm tracking-[0.18em] uppercase text-white/40 px-8"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
