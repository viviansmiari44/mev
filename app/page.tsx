import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import Features from "@/components/sections/features";
import Performance from "@/components/sections/performance";
import HowItWorks from "@/components/sections/how-it-works";
import Testimonials from "@/components/sections/testimonials";
import Faq from "@/components/sections/faq";
import Cta from "@/components/sections/cta";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06080F] text-slate-100">
      <Hero />
      <TrustStrip />
      <Features />
      <Performance />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Cta />
    </main>
  );
}