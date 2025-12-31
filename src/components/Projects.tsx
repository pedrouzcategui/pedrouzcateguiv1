import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import SectionLabel from "./SectionLabel";

const projects: ProjectCardProps[] = [
  // {
  //   title: "Finance Manager",
  //   image: "kwik-finance-manager.png",
  //   tags: [
  //     "Docker",
  //     "Laravel",
  //     "ShadCN",
  //     "React.js",
  //     "Inertia.js",
  //     "Tailwind.css",
  //   ],
  //   category: "Full Stack Web Development",
  // },
  {
    title: "Clash Royale A.I Agent",
    image: "clash-royale-automation.webp",
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
    tags: ["Linux", "Arduino", "C++", "Blender"],
    category: "Hardware Programming & 3D Design",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-16">
      <SectionLabel>Latest Projects</SectionLabel>
      <div className="grid md:grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
