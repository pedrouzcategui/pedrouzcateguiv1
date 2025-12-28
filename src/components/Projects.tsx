"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import ProjectCard from "@/components/ProjectCard";
import {
  Dog,
  Hamburger,
  PiggyBank,
  Settings,
  CatIcon,
  SmartphoneIcon,
  Gamepad2,
} from "lucide-react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    icon: PiggyBank,
    title: "Finance Manager",
    description:
      "Track your personal finances easily, and see them evolve over time with detailed visualizations.",
    liveLink: "#",
    codeLink: "#",
  },
  {
    icon: SmartphoneIcon,
    title: "Clash Royale Agent",
    description:
      "Created a Clash Royale Bot that plays autonomously, based on the best decks available.",
    liveLink: "#",
    codeLink: "#",
  },
  {
    icon: Gamepad2,
    title: "GBA Emulator",
    description:
      "Play your favorite Gamebody games! (The emulator was written on Rust)",
    liveLink: "#",
    codeLink: "#",
  },
  {
    icon: CatIcon,
    title: "Meowy",
    description:
      "A robot companion made with Arduino, with autonomous movement, text to speech, computer vision.",
    liveLink: "#",
    codeLink: "#",
  },
  {
    icon: Settings,
    title: "Gym Member Machine Make App",
    description: "Private Make Integration Developed for Gym Member Machine.",
    liveLink: "#",
    codeLink: "#",
  },
  {
    icon: Dog,
    title: "Pokemon Simulation",
    description: "I made a study to find the optimal best pokemon team",
    liveLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  useGSAP(() => {
    gsap.from("#projects", {
      scrollTrigger: "#projects",
      duration: 1,
      opacity: 0,
      y: 400,
    });

    gsap.to(".project-card", {
      opacity: 1,
      stagger: 0.5,
    });
  });

  return (
    <section id="projects" className="py-12 md:py-16">
      <h3 className="text-3xl font-bold text-[#ECDFCC] mb-8 sm:mb-12 border-l-4 border-terciary pl-4">
        Projects
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 border-terciary border">
        {projects.map((project, index) => (
          <ProjectCard
            Icon={project.icon}
            key={index}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
