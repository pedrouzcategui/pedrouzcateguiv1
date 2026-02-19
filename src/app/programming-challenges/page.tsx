import ChallengeCard from "./components/ChallengeCard";
import { getProgrammingChallenges } from "@/lib/programming-challenges";

export const metadata = {
  title: "Programming Challenges | Pedro Uzcátegui",
  description:
    "LeetCode-style programming challenges with solutions and explanations.",
  alternates: {
    canonical: "https://pedrouzcategui.com/programming-challenges",
  },
};

export default async function ProgrammingChallengesPage() {
  const challenges = await getProgrammingChallenges();

  return (
    <>
      <header className="text-center mb-16">
        <h1 className="text-4xl font-medium mb-6 tracking-tight">
          Programming Challenges
        </h1>
      </header>

      <div className="space-y-6">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={`${challenge.number}-${challenge.slug}`}
            number={challenge.number}
            slug={challenge.slug}
            title={challenge.title}
            difficulty={challenge.difficulty}
            excerpt={challenge.excerpt}
          />
        ))}
      </div>
    </>
  );
}
