import { getProjects } from "@/lib/projects.plugin";
import Card from "@/components/Card";

export type ProjectMetadata = {
  id: string;
  slug: string;
  image: string;
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
      <header className="text-center mb-16">
        <h1 className="text-4xl font-medium mb-6 tracking-tight">Projects</h1>
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {projectsx.map((module: any) => {
          const metadata: ProjectMetadata = module.metadata ?? {};
          const slug = metadata.slug ?? metadata.id;
          const title = metadata.title ?? slug;
          const image = metadata.image ?? "slug";
          const tags = metadata.tech ?? [];
          const category = "Project";

          return (
            <Card
              key={metadata.id ?? slug}
              title={title}
              image={`${image}`}
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
