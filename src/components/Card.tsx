import Link from "next/link";

export type CardProps = {
  title: string;
  image?: string;
  media?: React.ReactNode;
  href: string;
  tags: string[];
  category: string;
};

const Card = ({ title, image, media, href, tags, category }: CardProps) => {
  return (
    <Link href={href} className="block h-full">
      <div className="relative flex h-full flex-col w-full group cursor-pointer bg-[var(--card-bg)] p-4">
        {/* Image Container */}
        <div className="overflow-hidden aspect-6/3 rounded-lg bg-[var(--card-media-bg)]">
          {media ? (
            media
          ) : (
            <img
              src={`/projects/${image}`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>

        {/* Content Area */}
        <div className="mt-4 flex flex-1 flex-col gap-2 pb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 md:max-w-[80%] md:pr-4">
              <h3 className="text-lg font-bold uppercase text-foreground tracking-wider">
                {title}
              </h3>
            </div>

            <div className="flex shrink-0 gap-2 text-foreground/70 text-[10px] font-normal uppercase tracking-widest ">
              <span>{category}</span>
              {" - "}
              <span>2025</span>
            </div>
          </div>
        </div>

        {/* Tags / Skills - anchored bottom-left for equal alignment */}
        <div className="absolute bottom-4 left-4 right-4 overflow-hidden whitespace-nowrap text-foreground/60">
          <p className="text-xs md:text-sm uppercase font-light">
            {tags?.join(", ")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
