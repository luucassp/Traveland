import { HeroBanner } from "@/components/sections/hero-banner";
import { ExploreModes } from "@/components/sections/explore-modes";
import { ExploreInterests } from "@/components/sections/explore-interests";
import { TourCards } from "@/components/sections/tour-cards";
import { PackageComparison } from "@/components/sections/package-comparison";
import { SocialProof } from "@/components/sections/social-proof";
import { StatsSection } from "@/components/sections/stats-section";
import { RouteMap } from "@/components/sections/route-map";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FAQSection } from "@/components/sections/faq-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { ContactBar } from "@/components/sections/contact-bar";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ExploreModes />
      <ExploreInterests />
      <TourCards />
      <PackageComparison />
      <SocialProof />
      <StatsSection />
      <RouteMap />
      <HowItWorks />
      <FAQSection />
      <NewsletterSection />
      <ContactBar />
    </>
  );
}
