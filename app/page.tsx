import { JsonLd } from '@/components/JsonLd';
import { Catalog } from '@/components/sections/Catalog';
import { Contacts } from '@/components/sections/Contacts';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { Pricing } from '@/components/sections/Pricing';
import { Process } from '@/components/sections/Process';
import { Production } from '@/components/sections/Production';
import { Projects } from '@/components/sections/Projects';
import { faqJsonLd, localBusinessJsonLd } from '@/lib/jsonld';

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
      <Contacts />
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={faqJsonLd()} />
    </>
  );
}
