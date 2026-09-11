import { Catalog } from '@/components/sections/Catalog';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Catalog />
      <Projects />
    </>
  );
}
