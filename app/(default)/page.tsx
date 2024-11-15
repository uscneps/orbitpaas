export const metadata = {
  title: "Orbit",
  description: "Modular and  automative PaaS for small companies that want scale",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
      <Footer />
    </>
  );
}
