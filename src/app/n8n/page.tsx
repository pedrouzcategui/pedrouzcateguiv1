import { workflows } from "./workflows";
import Card from "@/components/Card";

export const metadata = {
  title: "n8n Templates | Pedro Uzcátegui",
  description: "Curated n8n workflow templates and automations.",
  alternates: { canonical: "https://pedrouzcategui.com/n8n" },
};

export default function N8NTemplatesPage() {
  return (
    <>
      <header className="text-center mb-16">
        <h1 className="text-4xl text-secondary font-medium mb-6 tracking-tight">
          n8n Templates
        </h1>
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {workflows.map((workflow) => (
          <WorkflowCard key={workflow.id} workflow={workflow} />
        ))}
      </div>
    </>
  );
}

const WorkflowCard = ({
  workflow,
}: {
  workflow: (typeof workflows)[number];
}) => {
  return (
    <Card
      href={`/n8n/${workflow.id}`}
      title={workflow.title}
      category="Template"
      tags={workflow.tags}
      media={
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {workflow.apps.map((app) => (
                <span
                  key={app.id}
                  className={`flex items-center justify-center size-9 rounded-lg ${app.bg}`}
                >
                  <span className="text-base">{app.icon}</span>
                </span>
              ))}
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70">
              {workflow.stat}
            </span>
          </div>
          <p className="mt-4 text-xs md:text-sm text-gray-400">
            {workflow.description}
          </p>
        </div>
      }
    />
  );
};
