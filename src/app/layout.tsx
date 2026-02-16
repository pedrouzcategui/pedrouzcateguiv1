import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-okaidia.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Uzcátegui - A.I Engineer",
  description: "Pedro Uzcátegui Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `(() => {try {const stored = localStorage.getItem("theme");const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;const theme = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");document.documentElement.setAttribute("data-theme", theme);} catch (_) {}})();`,
          }}
        />
        <GoogleTagManager gtmId="GTM-N9GLCL26" />
      </head>
      <body className={`${spaceGrotesk.className} `}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N9GLCL26"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <div className="min-h-screen h-full bg-primary">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
