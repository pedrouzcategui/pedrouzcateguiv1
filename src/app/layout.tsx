import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-okaidia.min.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body id="smooth-wrapperr" className={`${spaceGrotesk.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
