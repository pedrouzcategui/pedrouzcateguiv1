import { Code, Link, type LucideIcon } from "lucide-react";

type ProjectCardProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
  liveLink?: string;
  codeLink?: string;
};

const ProjectCard = ({
  Icon,
  title,
  description,
  liveLink,
  codeLink,
}: ProjectCardProps) => {
  return (
    <div className="project-card border border-terciary opacity-0  flex flex-col p-12 space-y-4">
      <Icon className="w-8 h-8 text-terciary" />

      <h3 className="text-2xl font-bold text-[#ECDFCC] tracking-tight">
        {title}
      </h3>

      <p className="text-secondary text-md">{description}</p>

      {/* <div className="flex space-x-3 pt-2">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#ECDFCC] bg-terciary rounded-lg transition-colors duration-200 hover:bg-terciary/80 shadow-lg hover:shadow-[#ECDFCC]/30"
        >
          <Link className="w-4 h-4" />
          <span>Live Project</span>
        </a>

        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-terciary border border-terciary rounded-lg transition-colors duration-200 hover:bg-[#1E201E]/40"
        >
          <Code className="w-4 h-4" />
          <span>See Code</span>
        </a>
      </div> */}
    </div>
  );
};

export default ProjectCard;
