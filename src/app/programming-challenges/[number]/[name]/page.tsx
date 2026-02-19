import { getProgrammingChallenge } from "@/lib/programming-challenges";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ number: string; name: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { number, name } = await params;
  const num = Number(number);

  const challenge = await getProgrammingChallenge(num, name);

  if (!challenge) {
    return {
      title: "Challenge Not Found | Pedro Uzcátegui",
    };
  }

  return {
    title: `${challenge.title} | Programming Challenges | Pedro Uzcátegui`,
    description: challenge.excerpt,
    alternates: {
      canonical: `https://pedrouzcategui.com/programming-challenges/${challenge.number}/${challenge.slug}`,
    },
  };
}

export default async function ProgrammingChallengePage({ params }: Props) {
  const { number, name } = await params;
  const num = Number(number);

  const challenge = await getProgrammingChallenge(num, name);

  if (!challenge) notFound();

  return (
    <article className="max-w-2xl mx-auto py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{challenge.title}</h1>
        <div className="text-secondary/70 text-sm">
          <span>Challenge {challenge.number}</span>
          <span className="mx-2">•</span>
          <span>{challenge.difficulty}</span>
        </div>
      </header>

      <div className="prose lg:prose-xl">
        <h2>Problem</h2>
        <div className="not-prose rounded-lg border border-terciary bg-terciary/10 p-4">
          <div className="whitespace-pre-line leading-relaxed text-secondary">
            {challenge.problem}
          </div>
        </div>

        <details className="not-prose border border-terciary rounded-lg bg-terciary/10 p-4">
          <summary className="cursor-pointer font-medium select-none">
            Show solution
          </summary>
          <div className="mt-4">
            <div className="text-sm font-medium text-secondary mb-3">
              Solution (TypeScript)
            </div>
            <pre className="overflow-x-auto rounded-lg border border-terciary bg-primary p-4 text-sm leading-relaxed">
              <code className="language-ts">{challenge.solution}</code>
            </pre>

            <div className="mt-4 text-sm font-medium text-secondary mb-3">
              Explanation
            </div>
            <div className="rounded-lg border border-terciary bg-primary p-4">
              <div className="whitespace-pre-line leading-relaxed text-secondary">
                {challenge.explanation}
              </div>
            </div>
          </div>
        </details>
      </div>
    </article>
  );
}
