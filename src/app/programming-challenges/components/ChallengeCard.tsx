import Link from "next/link";

type ChallengeCardProps = {
  number: number;
  slug: string;
  title: string;
  difficulty: string;
  excerpt: string;
};

export default function ChallengeCard({
  number,
  slug,
  title,
  difficulty,
  excerpt,
}: ChallengeCardProps) {
  return (
    <Link
      href={`/programming-challenges/${number}/${slug}`}
      className="block mb-6"
    >
      <article className="group block p-6 sm:p-8 border border-terciary rounded-lg hover:border-secondary hover:shadow-sm transition-all duration-200 ease-in-out cursor-pointer">
        <div className="text-sm mb-3 font-medium">
          Challenge {number} • {difficulty}
        </div>

        <h2 className="text-2xl font-medium mb-3 transition-colors">{title}</h2>

        <p className="leading-relaxed">{excerpt}</p>
      </article>
    </Link>
  );
}
