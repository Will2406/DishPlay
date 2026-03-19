import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatIsDishplay from "@/components/WhatIsDishplay";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <WhatIsDishplay />
      <HowItWorks />
      <Plans />
      <FAQ />
      <Footer />
    </main>
  );
}
