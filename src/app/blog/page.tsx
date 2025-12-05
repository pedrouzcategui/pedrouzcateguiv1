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

const Page = () => {
  return (
    // Fondo principal con el negro de la paleta
    <div className="min-h-screen bg-linear-to-br from-primary to-[#111010] font-sans text-secondary p-4 sm:p-8">
      <h2 className="text-2xl mb-4s">This is the fucking blog</h2>
      <ul>
        <li>
          <a>How to fine tune an A.I model</a>
        </li>
        <li>
          <a>My journey becoming an A.I Engineer</a>
        </li>
        <li>
          <a>How to solve the value alignment problem</a>
        </li>
      </ul>
    </div>
  );
};

export default Page;
