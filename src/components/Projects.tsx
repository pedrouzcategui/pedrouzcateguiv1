"use client";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import SectionLabel from "./SectionLabel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const projects: ProjectCardProps[] = [
  {
    title: "Finance Manager",
    image: "kwik-finance-manager.png",
    href: "/projects/project-alpha",
    tags: [
      "Docker",
      "Laravel",
      "ShadCN",
      "React.js",
      "Inertia.js",
      "Tailwind.css",
    ],
    category: "Full Stack Web Development",
  },
  {
    title: "Clash Royale A.I Agent",
    image: "clash-royale-automation.webp",
    href: "/projects/project-gamma",
    tags: ["Python", "Android", "Tensorflow", "Pandas", "OpenCV"],
    category: "A.I Automation",
  },
  // {
  //   title: "GBA Emulator",
  //   image: "gba-emulator-rust.webp",
  //   tags: ["Rust", "Cargo"],
  //   category: "Low Level Systems",
  // },
  {
    title: "Meowy",
    image: "cat-robot.webp",
    href: "/projects/project-beta",
    tags: ["Linux", "Arduino", "C++", "Blender"],
    category: "Hardware Programming & 3D Design",
  },
];

const Projects = () => {
  return (
    <>
      <SectionLabel>Latest Projects</SectionLabel>
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={300}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        id="projects"
        className="py-12 md:py-16"
      >
        {projects.map((project, index) => (
          <SwiperSlide>
            <ProjectCard key={index} {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Projects;
