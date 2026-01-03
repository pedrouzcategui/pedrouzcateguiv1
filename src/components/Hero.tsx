"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".hero", {
      y: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 2,
    });
  });

  return (
    <header className="text-center md:text-left hero min-h-[600px] text-secondary flex flex-col justify-center opacity-0 translate-y-10">
      <h1 className="text-6xl lg:text-8xl xl:text-[10rem] font-bold">
        Pedro Uzcátegui
      </h1>
      <h2 className="text-4xl font-light mt-2">A.I Engineer</h2>
    </header>
  );
};

export default Hero;
