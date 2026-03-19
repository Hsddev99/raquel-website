"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Listings from "@/components/Listings";
import Areas from "@/components/Areas";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Marquee />
      <StatsBar />
      <About />
      <Services />
      <Listings />
      <Areas />
      <Reviews />
      <ContactForm />
      <Footer />
      <FloatingCall />
    </LanguageProvider>
  );
}
