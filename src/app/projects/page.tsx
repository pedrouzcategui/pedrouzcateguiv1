import { getProjects } from "@/lib/projects.plugin";
import ProjectCard from "@/components/ProjectCard";
import SectionLabel from "@/components/SectionLabel";

export type ProjectMetadata = {
  id: string;
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
  tech?: string[];
};

export const metadata = {
  title: "Projects | Pedro Uzcátegui",
  description: "Showcase of projects.",
  alternates: { canonical: "https://pedrouzcategui.com/projects" },
};

export default async function ProjectsPage() {
  const projectsx = await getProjects();

  return (
    <>
      <header className="text-center mb-12">
        <SectionLabel>Projects</SectionLabel>
        <p className="mt-4 text-gray-400">A selection of projects and demos.</p>
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectsx.map((module: any) => {
          const metadata: ProjectMetadata = module.metadata ?? {};
          const slug = metadata.slug ?? metadata.id;
          const title = metadata.title ?? slug;
          const tags = metadata.tech ?? [];
          const category = "Project";

          return (
            <ProjectCard
              key={metadata.id ?? slug}
              title={title}
              image={`${slug}.png`}
              href={`/projects/${slug}`}
              tags={tags}
              category={category}
            />
          );
        })}
      </div>
    </>
  );
}
