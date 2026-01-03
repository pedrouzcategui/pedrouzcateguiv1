import SectionLabel from "@/components/SectionLabel";
import { getProjectBySlug } from "@/lib/projects.plugin";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { project: string } | Promise<{ project: string }>;
}) {
  const { project } = (await params) as { project: string };
  const projectModule = await getProjectBySlug(project);
  if (!projectModule) return notFound();

  const ProjectContent = projectModule.default;
  const metadata = projectModule.metadata ?? {};

  return (
    <div>
      <SectionLabel>{metadata.title ?? project}</SectionLabel>
      {metadata.excerpt && <p>{metadata.excerpt}</p>}
      <div className="mt-6">
        <ProjectContent />
      </div>
    </div>
  );
}
