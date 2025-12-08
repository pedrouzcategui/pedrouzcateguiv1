import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className={"text-4xl mb-6 font-bold"}>{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className={"text-2xl mb-4 font-bold"}>{children}</h2>
  ),
  ul: ({ children }) => <ul className={"ml-6 mb-6 list-disc"}>{children}</ul>,
  ol: ({ children }) => (
    <ol className={"ml-6 mb-6 list-decimal"}>{children}</ol>
  ),
  li: ({ children }) => <li className={"mb-2"}>{children}</li>,
  p: ({ children }) => <p className={"mb-6"}>{children}</p>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
