import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

const App = () => {
  return (
    <div id="smooth-content" className="min-h-screen bg-primary">
      <div className="w-[95%] mx-auto">
        <Hero />
        <section id="about" className="py-12 md:py-16">
          <div>
            <h3 className="text-3xl font-bold text-[#ECDFCC] mb-8 sm:mb-12 border-l-4 border-terciary pl-4">
              About Me
            </h3>
            <div>
              <p className="text-6xl/20  text-[#ECDFCC]">
                I help businesses transform through software, A.I and systems
                re-design, saving them tens of thousands of dollars (and time).
              </p>
            </div>
          </div>
        </section>

        <Projects />
        <h3 className="text-3xl font-bold text-[#ECDFCC] mb-8 sm:mb-12 border-l-4 border-terciary pl-4">
          Contact
        </h3>
        <ContactForm />

        <footer className="text-center pt-10 pb-4 text-terciary text-sm border-t border-[#3C3D37] mt-12">
          <p>&copy; {new Date().getFullYear()} Pedro Uzcátegui.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
