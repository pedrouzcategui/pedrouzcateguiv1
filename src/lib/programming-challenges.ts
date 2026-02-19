export type ProgrammingChallenge = {
  number: number;
  slug: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  excerpt: string;
  problem: string;
  solution: string;
  explanation: string;
};

const CHALLENGES: ProgrammingChallenge[] = [
  {
    number: 1,
    slug: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    excerpt:
      "Given an array of integers and a target, return the indices of two numbers that add up to the target.",
    problem:
      "You are given an array of integers `nums` and an integer `target`.\n\nReturn indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nExample:\n- Input: nums = [2,7,11,15], target = 9\n- Output: [0,1]",
    solution:
      'function twoSum(nums: number[], target: number): [number, number] {\n  const seen = new Map<number, number>();\n\n  for (let i = 0; i < nums.length; i++) {\n    const value = nums[i];\n    const complement = target - value;\n\n    const j = seen.get(complement);\n    if (j !== undefined) return [j, i];\n\n    seen.set(value, i);\n  }\n\n  // Problem guarantees a solution\n  throw new Error("No solution");\n}',
    explanation:
      "We scan the array once while storing each value’s index in a hash map. For the current value `x`, we check whether `target - x` has already been seen. If yes, we found the pair. This is O(n) time and O(n) space.",
  },
  {
    number: 2,
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    excerpt:
      "Given a string of brackets, determine if the input is valid (properly closed and nested).",
    problem:
      "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1) Open brackets are closed by the same type of brackets.\n2) Open brackets are closed in the correct order.\n\nExample:\n- Input: s = \"()[]{}\"\n- Output: true",
    solution:
      "function isValid(s: string): boolean {\n  const stack: string[] = [];\n  const closingToOpening: Record<string, string> = {\n    ')': '(',\n    ']': '[',\n    '}': '{',\n  };\n\n  for (const ch of s) {\n    if (ch === '(' || ch === '[' || ch === '{') {\n      stack.push(ch);\n      continue;\n    }\n\n    const expected = closingToOpening[ch];\n    if (!expected) return false;\n\n    const top = stack.pop();\n    if (top !== expected) return false;\n  }\n\n  return stack.length === 0;\n}",
    explanation:
      "Use a stack to track opening brackets. When you see a closing bracket, the top of the stack must be its matching opening bracket. If not, the string is invalid. At the end, the stack must be empty.",
  },
  {
    number: 3,
    slug: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    excerpt:
      "Given a list of intervals, merge all overlapping intervals and return the merged list.",
    problem:
      "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.\n\nExample:\n- Input: [[1,3],[2,6],[8,10],[15,18]]\n- Output: [[1,6],[8,10],[15,18]]",
    solution:
      "type Interval = [number, number];\n\nfunction merge(intervals: Interval[]): Interval[] {\n  if (intervals.length === 0) return [];\n\n  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);\n  const merged: Interval[] = [sorted[0]];\n\n  for (let i = 1; i < sorted.length; i++) {\n    const [start, end] = sorted[i];\n    const last = merged[merged.length - 1];\n\n    if (start <= last[1]) {\n      last[1] = Math.max(last[1], end);\n    } else {\n      merged.push([start, end]);\n    }\n  }\n\n  return merged;\n}",
    explanation:
      "Sort intervals by start time. Then iterate and merge into the last interval when there’s an overlap (`start <= lastEnd`), otherwise start a new interval. Sorting dominates: O(n log n) time, O(n) space.",
  },
];

export async function getProgrammingChallenges(): Promise<
  ProgrammingChallenge[]
> {
  return CHALLENGES;
}

export async function getProgrammingChallenge(
  number: number,
  slug: string,
): Promise<ProgrammingChallenge | null> {
  const found = CHALLENGES.find(
    (c) => c.number === number && c.slug.toLowerCase() === slug.toLowerCase(),
  );
  return found ?? null;
}
