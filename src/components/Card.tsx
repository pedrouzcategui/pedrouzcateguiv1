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
    <Link href={href}>
      <div className="flex flex-col w-full group cursor-pointer bg-[var(--card-bg)] p-4">
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
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold uppercase text-foreground tracking-wider">
                {title}
              </h3>
            </div>

            <div className="flex gap-2 text-foreground/70 text-[10px] font-normal uppercase tracking-widest ">
              <span>{category}</span>
              {" - "}
              <span>2025</span>
            </div>
          </div>

          {/* Tags / Skills - Scrolling effect style */}
          <div className="overflow-hidden whitespace-nowrap text-foreground/60">
            <p className="text-xs md:text-sm uppercase font-light">
              {tags?.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
