import { Briefcase, Code, Link, type LucideIcon } from "lucide-react";
import { ComponentType } from "react";

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
    // Fondo de la tarjeta con el color gris oscuro (#3C3D37)
    <div className="flex flex-col p-6 space-y-4 border-secondary border rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#3C3D37]/80">
      {/* Icono con color verde militar (#697565) */}
      <Icon className="w-8 h-8 text-terciary" />

      {/* Título en color beige (#ECDFCC) */}
      <h3 className="text-2xl font-bold text-[#ECDFCC] tracking-tight">
        {title}
      </h3>

      {/* Descripción en color verde militar (#697565) */}
      <p className="text-secondary text-sm">{description}</p>

      <div className="flex space-x-3 pt-2">
        {/* Botón "Live Project" (Primary) */}
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          // Texto e ícono en beige (#ECDFCC), Fondo en verde militar (#697565), Hover más oscuro
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#ECDFCC] bg-terciary rounded-lg transition-colors duration-200 hover:bg-terciary/80 shadow-lg hover:shadow-[#ECDFCC]/30"
        >
          <Link className="w-4 h-4" />
          <span>Live Project</span>
        </a>

        {/* Botón "See Code" (Secondary) */}
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          // Texto y borde en verde militar (#697565), Hover de fondo sutil
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-terciary border border-terciary rounded-lg transition-colors duration-200 hover:bg-[#1E201E]/40"
        >
          <Code className="w-4 h-4" />
          <span>See Code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
