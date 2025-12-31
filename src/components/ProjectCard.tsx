export type ProjectCardProps = {
  title: string;
  image: string;
  tags: string[];
  category: string;
};

const ProjectCard = ({ title, image, tags, category }: ProjectCardProps) => {
  return (
    <div className="flex flex-col w-full group cursor-pointer bg-secondary p-4">
      {/* Image Container */}
      <div className="overflow-hidden bg-gray-900 aspect-6/3 rounded-lg">
        <img
          src={`/projects/${image}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Area */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold uppercase text-primary tracking-wider">
              {title}
            </h3>
          </div>

          <div className="flex gap-2 text-primary text-[10px] font-normal uppercase tracking-widest ">
            <span>{category}</span>
            {" - "}
            <span>2025</span>
          </div>
        </div>

        {/* Tags / Skills - Scrolling effect style */}
        <div className="overflow-hidden whitespace-nowrap text-gray-400">
          <p className="text-xs md:text-sm uppercase font-light">
            {tags?.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
