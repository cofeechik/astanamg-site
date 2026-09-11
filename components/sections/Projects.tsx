import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ArrowUpRightIcon } from '@/components/ui/Icons';
import { Media } from '@/components/ui/Media';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects, type Project } from '@/content/projects';
import { ui } from '@/content/ui';
import { formatTenge } from '@/lib/format';
import { Rail } from './Rail';

function ProjectCard({ project }: { project: Project }) {
  const { labels } = projects;
  const price = project.priceFrom
    ? `${ui.price.from} ${formatTenge(project.priceFrom)}${labels.priceUnit}`
    : labels.priceByEstimate;

  const rows = [
    { label: labels.area, value: project.area },
    { label: labels.material, value: project.material },
    { label: labels.leadTime, value: project.leadTime },
    { label: labels.price, value: price },
  ];

  return (
    <article className="flex h-full flex-col">
      <Media src={project.image} alt={project.alt} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 368px, 78vw" />
      <h3 className="mt-5 text-18 font-semibold md:text-24">{project.title}</h3>
      <dl className="mt-4 grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-2 border-t border-line pt-4 text-14">
        {rows.map((row) => (
          <div key={row.label} className="contents">
            <dt className="text-ink-50">{row.label}</dt>
            <dd className={row.value ? 'text-ink' : 'text-ink-50'}>{row.value ?? labels.empty}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        {projects.draft ? (
          // Намеренно вне палитры: баннер должен бросаться в глаза и не выглядеть частью дизайна.
          <p
            role="note"
            className="mb-10 rounded-sm border-2 border-[#C99A00] bg-[#FFE066] px-4 py-3 text-14 font-semibold tracking-wide text-ink uppercase"
          >
            {projects.draftBanner}
          </p>
        ) : null}
        <SectionHeading
          id="projects-title"
          eyebrow={projects.eyebrow}
          title={projects.title}
          lead={projects.lead}
          action={
            <Button href={projects.allHref} variant="outline">
              {projects.allLabel}
              <ArrowUpRightIcon size={18} />
            </Button>
          }
        />
      </Container>

      <div className="mt-12 lg:mt-16">
        <Rail>
          {projects.items.map((project) => (
            <li key={project.id} className="w-[78vw] max-w-[22rem] shrink-0 snap-start sm:w-[20rem] lg:w-[23rem] lg:max-w-none">
              <ProjectCard project={project} />
            </li>
          ))}
        </Rail>
      </div>
    </section>
  );
}
