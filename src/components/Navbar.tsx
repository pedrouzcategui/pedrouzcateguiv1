"use client";
import clsx from "clsx";
import { type LucideIcon, Menu, SquareArrowOutUpRight, X } from "lucide-react";
import Link from "next/link";
import Announcement from "./Announcement";
import { useState } from "react";

type MenuItem = {
  link: string;
  content: string;
  Icon?: LucideIcon;
  is_button?: boolean;
};

const MENU_ITEMS: MenuItem[] = [
  {
    content: "Home",
    link: "/",
  },
  {
    content: "Blog",
    link: "/blog",
  },
  {
    content: "Case Studies",
    link: "/case-studies",
  },
  {
    content: "See Resume",
    link: "/pedro-uzcategui-resume.pdf",
    Icon: SquareArrowOutUpRight,
    is_button: true,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    /* The 'relative' wrapper ensures the space is reserved in the layout */
    <header className="relative h-[120px]">
      <nav className="fixed top-0 left-0 z-50 bg-primary w-full border-b border-terciary text-secondary">
        <Announcement>
          My new <b>FREE</b> GSAP course is here!
        </Announcement>

        <div className="w-[95%] mx-auto py-6 flex justify-between items-center">
          <p className="font-bold">Pedro Uzcátegui</p>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <MenuItems isMobile={false} />
          </div>

          {/* Mobile Toggle Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-primary border-b border-terciary p-4 flex flex-col gap-4">
            <MenuItems isMobile />
          </div>
        )}
      </nav>
    </header>
  );
};

const MenuItems = ({ isMobile = false }) => {
  return (
    <div className={isMobile ? "flex flex-col gap-6" : "flex gap-12"}>
      {MENU_ITEMS.map(({ link, Icon, content, is_button }, i) => (
        <Link
          key={`menu-item-${i}`}
          className={clsx(
            "flex items-center gap-2 transition-colors hover:text-opacity-80",
            is_button && "bg-secondary text-primary rounded-4xl px-4 py-1 w-fit"
          )}
          href={link}
        >
          {Icon && <Icon size={"16"} />}
          {content}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
