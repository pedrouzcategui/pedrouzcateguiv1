import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    root: path.join(__dirname),
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: ["rehype-katex"],
    remarkPlugins: ["remark-math", "remark-gfm", "remark-prism"],
  },
});

export default withMDX(nextConfig);
