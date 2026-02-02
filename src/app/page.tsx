'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Attractions from "@/components/Attractions";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Attractions />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
