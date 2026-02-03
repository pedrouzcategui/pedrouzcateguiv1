import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { notFound } from "next/navigation";
import { workflows } from "../workflows";

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = (await params) as { slug: string };
  const workflow = workflows.find((item) => item.id === slug);

  if (!workflow) {
    return {
      title: "n8n Template | Pedro Uzcátegui",
      description: "n8n workflow template.",
    };
  }

  return {
    title: `${workflow.title} | Pedro Uzcátegui`,
    description: workflow.description,
    alternates: { canonical: `https://pedrouzcategui.com/n8n/${workflow.id}` },
  };
}

export default async function N8NTemplatePage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = (await params) as { slug: string };
  const workflow = workflows.find((item) => item.id === slug);

  if (!workflow) return notFound();

  return (
    <div>
      <SectionLabel>{workflow.title}</SectionLabel>
      <p className="text-sm md:text-base text-foreground/60 max-w-2xl">
        {workflow.description}
      </p>

      <div className="mt-10 grid gap-8">
        <section className="bg-[var(--card-bg)] p-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-foreground/80">
            Overview
          </h2>
          <p className="mt-4 text-sm md:text-base text-foreground/60">
            {workflow.overview}
          </p>
        </section>

        <section className="bg-[var(--card-bg)] p-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-foreground/80">
            Requirements
          </h2>
          <ul className="mt-4 space-y-2 text-sm md:text-base text-foreground/60">
            {workflow.requirements.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-foreground/70">•</span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {workflow.apps.map((app) => (
              <span
                key={app.id}
                className={`rounded-full border border-[var(--foreground)/10] px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${app.bg}`}
              >
                {app.label}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-[var(--card-bg)] p-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-foreground/80">
            How to use
          </h2>
          <ol className="mt-4 space-y-2 text-sm md:text-base text-foreground/60">
            {workflow.steps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="text-foreground/70">{index + 1}.</span>
                <span className="text-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="flex items-center gap-3">
          <Link
            href="/n8n"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-primary"
          >
            ← Back to templates
          </Link>
        </div>
      </div>
    </div>
  );
}
