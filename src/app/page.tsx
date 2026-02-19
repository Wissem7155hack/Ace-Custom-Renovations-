import { Hero } from '@/components/sections/home/Hero';
import { StatsBar } from '@/components/sections/home/StatsBar';
import { ServicesPreview } from '@/components/sections/home/ServicesPreview';
import { FeaturedProjects } from '@/components/sections/home/FeaturedProjects';
import { WhyChooseUs } from '@/components/sections/home/WhyChooseUs';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { CtaBand } from '@/components/sections/home/CtaBand';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CtaBand />
    </>
  );
}
