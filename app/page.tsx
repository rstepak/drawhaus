import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import DualAudience from '@/components/sections/DualAudience';
import HowItWorksDetailed from '@/components/sections/HowItWorksDetailed';
import TrustTiles from '@/components/sections/TrustTiles';
import FeaturedPrize from '@/components/sections/FeaturedPrize';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <SocialProof />
      <DualAudience />
      <HowItWorksDetailed />
      <TrustTiles />
      <FeaturedPrize />
      <FinalCTA />
      <Footer />
    </main>
  );
}
