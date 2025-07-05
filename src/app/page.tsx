import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeatureGrid";
import Partners from "@/components/Partner";
import Testimonial from "@/components/Testimonial";
import NewsletterForm from "@/components/NewletterForm";
import Integrate from "@/components/Integrate";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Header />
      <Hero />
      <FeaturesGrid />
      <Partners />
      <Testimonial />
      <NewsletterForm />
      <Integrate />
      <Footer />
    </main>
  );
}
