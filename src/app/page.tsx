import { HeroSection } from "@/components/sections/hero-section";
import { StatsBar } from "@/components/sections/stats-bar";
import { AboutIntro } from "@/components/sections/about-intro";
import { PopularTours } from "@/components/sections/popular-tours";
import { DestinationsSection } from "@/components/sections/destinations-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TripPlannerCTA } from "@/components/sections/trip-planner-cta";
import { AccreditationBar } from "@/components/sections/accreditation-bar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutIntro />
      <PopularTours />
      <DestinationsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <TripPlannerCTA />
      <AccreditationBar />
    </>
  );
}
