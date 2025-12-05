import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import {
  Dog,
  Dumbbell,
  Hamburger,
  PiggyBank,
  ScanHeart,
  Settings,
} from "lucide-react";
import Image from "next/image";

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
    icon: Dumbbell,
    title: "Personal Training App",
    description:
      "App created to track and visualize progress on the gym, offering personalized workout plans and historical data.",
    liveLink: "#",
    codeLink: "#",
  },
  {
    icon: Hamburger,
    title: "Restaurant A.I.",
    description:
      "Have you ever had a bad time ordering food through Whatsapp? Not anymore. This AI streamlines the ordering process.",
    liveLink: "#",
    codeLink: "#",
  },
  {
    icon: Settings,
    title: "GMM Make App",
    description: "Private Make Integration Developed for Gym Member Machine.",
    liveLink: "#",
    codeLink: "#",
  },
  {
    icon: Dog,
    title: "Pokemon Simulation",
    description: "I made a study to find the best optimally pokemon team",
    liveLink: "#",
    codeLink: "#",
  },
  {
    icon: ScanHeart,
    title: "Asmha Detector",
    description: "Upload an image, get a % of chance tot have astmha",
    liveLink: "#",
    codeLink: "#",
  },
];

const App = () => {
  return (
    // Fondo principal con el negro de la paleta
    <div className="min-h-screen bg-linear-to-br from-primary to-[#111010] font-sans text-secondary p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Menu */}
        <nav className="flex justify-center sm:justify-end py-4">
          <ul className="flex space-x-6 text-lg">
            <li>
              <a
                href="#about"
                // Enlaces y hover usan el color beige claro
                className="text-secondary transition duration-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-secondary transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-secondary transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-secondary transition duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>

        {/* Header Section */}
        <header className="text-center py-12">
          {/* Título principal con el color beige */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-secondary">
            Pedro Uzcátegui
          </h1>
          {/* Subtítulo con el color verde militar */}
          <h2 className="text-xl sm:text-2xl text-secondary font-light mt-2">
            AI Engineer | DevOps Specialist
          </h2>
        </header>

        {/* About Me Section */}
        <section id="about" className="py-12 md:py-16">
          <div>
            <h3 className="text-3xl font-bold text-[#ECDFCC] mb-8 sm:mb-12 border-l-4 border-terciary pl-4">
              About Me
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Contenedor de la imagen con el color secundario gris oscuro */}
              <div>
                <Image
                  className="rounded-sm"
                  src={"/assets/pedro-uzcategui-profile-pic.png"}
                  alt={"Pedro Uzcátegui"}
                  width={500}
                  height={500}
                />
              </div>
              <div>
                {/* Texto principal con el color beige */}
                <div className="text-lg space-y-4 text-[#ECDFCC]">
                  <p>
                    Hello! I'm <b>Pedro Uzcátegui</b>, an <b>AI Engineer </b>
                    with a strong background in <b>DevOps</b>. I solve
                    infrastructure problems for companies, using either
                    on-premise or cloud technologies.
                  </p>

                  <p>
                    My goal is to transform businesses through automation, A.I,
                    and smart infrastructure. I save thousands of dollars to
                    companies anually through the application of computer
                    science to every day processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-16">
          <h3 className="text-3xl font-bold text-[#ECDFCC] mb-8 sm:mb-12 border-l-4 border-terciary pl-4">
            Projects
          </h3>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              // Asumo que el ProjectCard usa colores de fondo oscuros
              // Si ProjectCard necesita actualización, notifícame
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

        <h3 className="text-3xl font-bold text-[#ECDFCC] mb-8 sm:mb-12 border-l-4 border-terciary pl-4">
          Contact
        </h3>
        <ContactForm />

        {/* Footer/Contact Placeholder */}
        <footer className="text-center pt-10 pb-4 text-terciary text-sm border-t border-[#3C3D37] mt-12">
          <p>&copy; {new Date().getFullYear()} Pedro Uzcátegui.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
