import { Catalog } from '@/components/sections/Catalog';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { Pricing } from '@/components/sections/Pricing';
import { Process } from '@/components/sections/Process';
import { Production } from '@/components/sections/Production';
import { Projects } from '@/components/sections/Projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Catalog />
      <Projects />
      <Pricing />
      <Process />
      <Production />
      <Faq />
    </>
  );
}
