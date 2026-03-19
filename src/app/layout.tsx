import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Raquel Rojas Moran | REALTOR® | Chicago North Shore Real Estate Expert | Baird & Warner",
  description:
    "Raquel Rojas Moran is your trusted Chicago North Shore REALTOR® at Baird & Warner. 5-star rated with 146+ client reviews. Bilingual (English/Spanish). Specializing in Winnetka, Glencoe, Kenilworth, Wilmette, Northbrook, and Highland Park real estate.",
  keywords:
    "Chicago North Shore realtor, Winnetka real estate, bilingual realtor Chicago, Spanish speaking realtor North Shore, Glencoe homes for sale, Kenilworth luxury homes, Wilmette realtor, Baird Warner, North Shore luxury real estate",
  openGraph: {
    title: "Raquel Rojas Moran — Chicago North Shore REALTOR® | Baird & Warner",
    description:
      "Your trusted Chicago North Shore real estate expert. 5-star rated, 146+ reviews. Bilingual service in English & Spanish. Serving Winnetka, Glencoe, Kenilworth, Wilmette.",
    type: "website",
    url: "https://raquelsellshomes.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Raquel Rojas Moran",
              description:
                "Chicago North Shore REALTOR® at Baird and Warner. Bilingual (English/Spanish).",
              url: "https://raquelsellshomes.com",
              telephone: "(224) 282-4610",
              email: "raquel.moran@bairdwarner.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "594 Green Bay Rd",
                addressLocality: "Winnetka",
                addressRegion: "IL",
                postalCode: "60093",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "146",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
