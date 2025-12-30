"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import ProjectCard from "@/components/ProjectCard";
import {
  Dog,
  PiggyBank,
  Settings,
  CatIcon,
  SmartphoneIcon,
  Gamepad2,
} from "lucide-react";
import SectionLabel from "./SectionLabel";

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
    title: "Delivery Drone",
    description:
      "I made a Drone (from scratch), and an app to control distribution routes for said drones.",
    liveLink: "#",
    codeLink: "#",
  },
  {
    icon: Dog,
    title: "Automixer",
    description: "Download for Free, Start To Party",
    liveLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  useGSAP(() => {
    gsap.from("#projects", {
      scrollTrigger: {
        trigger: "#projects",
        toggleActions: "play pause resume resume",
      },
      duration: 1,
      opacity: 0,
      y: 400,
    });

    gsap.to(".project-card", {
      opacity: 1,
      stagger: 0.3,
    });
  });

  return (
    <section id="projects" className="py-12 md:py-16">
      <SectionLabel>Projects</SectionLabel>
      <div className="grid md:grid-cols-2 border-terciary border">
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
