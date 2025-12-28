"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero", {
      y: 100,
      opacity: 0,
      ease: "power3.out",
      duration: 1,
    });
  });

  return (
    <header className="hero min-h-[600px] text-secondary flex flex-col justify-center">
      <h1 className="text-4xl lg:text-[10rem] font-bold">Pedro Uzcátegui</h1>
      <h2 className="text-4xl font-light mt-2">AI & DevOps Engineer</h2>
    </header>
  );
};

export default Hero;
