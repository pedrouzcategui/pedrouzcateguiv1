"use client";
import clsx from "clsx";
import {
  GithubIcon,
  type LucideIcon,
  MailIcon,
  Menu,
  Moon,
  SquareArrowOutUpRight,
  Sun,
  WorkflowIcon,
  X,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import Announcement from "./Announcement";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

type MenuItem = {
  link: string;
  external?: boolean;
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
    external: true,
  },
  {
    // content: "N8N Templates",
    link: "/n8n",
    content: "n8n Templates",
    Icon: WorkflowIcon,
    is_button: false,
    external: false,
  },
  {
    // content: "Github",
    link: "https://github.com/pedrouzcategui",
    Icon: GithubIcon,
    is_button: true,
    external: true,
  },
  {
    // content: "Github",
    link: "https://www.youtube.com/@curiousvirtuosity",
    Icon: YoutubeIcon,
    is_button: true,
    external: true,
  },
  {
    // content: "Github",
    link: "mailto:hi@pedrouzcategui.com",
    Icon: MailIcon,
    is_button: true,
    external: true,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme =
      stored === "light" || stored === "dark"
        ? stored
        : prefersDark
          ? "dark"
          : "light";

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    if (stored !== "light" && stored !== "dark") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (event: MediaQueryListEvent) => {
        const nextTheme = event.matches ? "dark" : "light";
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const themeLabel = useMemo(
    () => (theme === "dark" ? "Switch to light mode" : "Switch to dark mode"),
    [theme],
  );

  return (
    /* The 'relative' wrapper ensures the space is reserved in the layout */
    <header className="relative h-[120px] w-full">
      <nav className="top-0 left-0 z-50 bg-primary w-full border-b border-terciary text-secondary">
        <Announcement>
          My new <b>FREE</b> n8n course is coming!
        </Announcement>

        <div className="w-[95%] mx-auto py-6 flex justify-between items-center">
          <Link href={"/"} className="font-bold">
            Pedro Uzcátegui
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <MenuItems setIsOpen={setIsOpen} />
            <ThemeToggle
              theme={theme}
              onToggle={toggleTheme}
              label={themeLabel}
            />
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
            <ThemeToggle
              theme={theme}
              onToggle={toggleTheme}
              label={themeLabel}
            />
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
      {MENU_ITEMS.map(({ link, Icon, content, is_button, external }, i) => (
        <Link
          key={`menu-item-${i}`}
          className={clsx(
            "flex items-center gap-2 transition-colors hover:text-opacity-80",
            is_button && "bg-secondary text-primary rounded-4xl p-2 w-fit",
          )}
          href={link}
          target={external ? "_blank" : "_self"}
          onClick={() => setIsOpen(false)}
        >
          {Icon && <Icon size={"16"} />}
          {content}
        </Link>
      ))}
    </div>
  );
};

type ThemeToggleProps = {
  theme: "light" | "dark" | null;
  onToggle: () => void;
  label: string;
};

const ThemeToggle = ({ theme, onToggle, label }: ThemeToggleProps) => {
  const icon = theme === "dark" ? <Sun size={18} /> : <Moon size={18} />;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onToggle}
      className={clsx(
        "flex items-center gap-2 rounded-full border border-terciary px-3 py-2 text-sm transition-colors",
        "hover:bg-terciary/20",
      )}
      disabled={!theme}
    >
      {icon}
      <span className="hidden sm:inline">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
};

export default Navbar;
