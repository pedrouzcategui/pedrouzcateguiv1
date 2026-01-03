"use client";
import clsx from "clsx";
import {
  GithubIcon,
  type LucideIcon,
  MailIcon,
  Menu,
  SquareArrowOutUpRight,
  X,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import Announcement from "./Announcement";
import { Dispatch, SetStateAction, useState } from "react";

type MenuItem = {
  link: string;
  content?: string;
  Icon?: LucideIcon;
  is_button?: boolean;
};

const MENU_ITEMS: MenuItem[] = [
  {
    content: "Blog",
    link: "/blog",
  },
  {
    content: "Projects",
    link: "/projects",
  },
  // {
  //   content: "Case Studies",
  //   link: "/case-studies",
  // },
  {
    content: "Resume",
    link: "/pedro-uzcategui-resume.pdf",
    Icon: SquareArrowOutUpRight,
  },
  {
    // content: "Github",
    link: "https://github.com/pedrouzcategui",
    Icon: GithubIcon,
    is_button: true,
  },
  {
    // content: "Github",
    link: "https://www.youtube.com/@rowancodes",
    Icon: YoutubeIcon,
    is_button: true,
  },
  {
    // content: "Github",
    link: "mailto:hi@pedrouzcategui.com",
    Icon: MailIcon,
    is_button: true,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    /* The 'relative' wrapper ensures the space is reserved in the layout */
    <header className="relative h-[120px] w-full">
      <nav className="top-0 left-0 z-50 bg-primary w-full border-b border-terciary text-secondary">
        <Announcement>
          My new <b>FREE</b> GSAP course is here!
        </Announcement>

        <div className="w-[95%] mx-auto py-6 flex justify-between items-center">
          <Link href={"/"} className="font-bold">
            Pedro Uzcátegui
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <MenuItems setIsOpen={setIsOpen} />
          </div>

          {/* Mobile Toggle Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-primary border-b border-terciary p-4 flex flex-col gap-4">
            <MenuItems isMobile setIsOpen={setIsOpen} />
          </div>
        )}
      </nav>
    </header>
  );
};

type MenuItemsProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isMobile?: boolean;
};

const MenuItems = ({ setIsOpen, isMobile = false }: MenuItemsProps) => {
  return (
    <div className={isMobile ? "flex flex-col gap-6" : "flex gap-6"}>
      {MENU_ITEMS.map(({ link, Icon, content, is_button }, i) => (
        <Link
          key={`menu-item-${i}`}
          className={clsx(
            "flex items-center gap-2 transition-colors hover:text-opacity-80",
            is_button && "bg-secondary text-primary rounded-4xl p-2 w-fit"
          )}
          href={link}
          onClick={() => setIsOpen(false)}
        >
          {Icon && <Icon size={"16"} />}
          {content}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
