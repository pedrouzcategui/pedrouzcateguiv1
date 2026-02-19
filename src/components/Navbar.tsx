"use client";
import clsx from "clsx";
import {
  ChevronDown,
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
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type MenuItem = {
  link: string;
  external?: boolean;
  content?: string;
  Icon?: LucideIcon;
  is_button?: boolean;
};

type NavItem =
  | {
      type: "link";
      item: MenuItem;
    }
  | {
      type: "dropdown";
      label: string;
      items: MenuItem[];
    };

const RESOURCES_ITEMS: MenuItem[] = [
  {
    link: "/n8n",
    content: "n8n Workflows",
    Icon: WorkflowIcon,
    external: false,
  },
  {
    link: "/programming-challenges",
    content: "Programming Challenges",
    external: false,
  },
];

const NAV_ITEMS: NavItem[] = [
  {
    type: "link",
    item: {
      content: "Blog",
      link: "/blog",
    },
  },
  {
    type: "link",
    item: {
      content: "Projects",
      link: "/projects",
    },
  },
  {
    type: "dropdown",
    label: "Resources",
    items: RESOURCES_ITEMS,
  },
  {
    type: "link",
    item: {
      content: "Resume",
      link: "/pedro-uzcategui-resume.pdf",
      Icon: SquareArrowOutUpRight,
      external: true,
    },
  },
  {
    type: "link",
    item: {
      link: "https://github.com/pedrouzcategui",
      Icon: GithubIcon,
      content: "GitHub",
      is_button: true,
      external: true,
    },
  },
  {
    type: "link",
    item: {
      link: "https://www.youtube.com/@curiousvirtuosity",
      Icon: YoutubeIcon,
      content: "YouTube",
      is_button: true,
      external: true,
    },
  },
  {
    type: "link",
    item: {
      link: "mailto:hi@pedrouzcategui.com",
      Icon: MailIcon,
      content: "Email",
      is_button: true,
      external: true,
    },
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
      <nav className="fixed top-0 left-0 z-50 bg-primary w-full border-b border-terciary text-secondary">
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
          <div className="md:hidden absolute left-0 right-0 top-full z-40 bg-primary border-t border-terciary shadow-lg">
            <div className="p-4 flex flex-col gap-4 max-h-[calc(100vh-120px)] overflow-y-auto">
              <MenuItems isMobile setIsOpen={setIsOpen} />
              <ThemeToggle
                theme={theme}
                onToggle={toggleTheme}
                label={themeLabel}
              />
            </div>
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
    <div
      className={
        isMobile ? "flex flex-col gap-6" : "flex items-center gap-6"
      }
    >
      {NAV_ITEMS.map((navItem, i) => {
        if (navItem.type === "dropdown") {
          return (
            <ResourcesDropdown
              key={`nav-item-${i}`}
              isMobile={isMobile}
              setIsOpen={setIsOpen}
              label={navItem.label}
              items={navItem.items}
            />
          );
        }

        const { link, Icon, content, is_button, external } = navItem.item;
        return (
          <Link
            key={`nav-item-${i}`}
            className={clsx(
              "inline-flex items-center gap-2 transition-colors hover:text-opacity-80 leading-none",
              is_button
                ? "bg-secondary text-primary rounded-4xl p-2 w-fit"
                : "py-2",
            )}
            href={link}
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener noreferrer" : undefined}
            onClick={() => setIsOpen(false)}
          >
            {Icon && <Icon size={"16"} />}
            {content ? (
              <span className={clsx(is_button && !isMobile && "sr-only")}>
                {content}
              </span>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};

type ResourcesDropdownProps = {
  isMobile: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  label: string;
  items: MenuItem[];
};

const ResourcesDropdown = ({
  isMobile,
  setIsOpen,
  label,
  items,
}: ResourcesDropdownProps) => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isResourcesOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      if (event.target instanceof Node && !el.contains(event.target)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [isResourcesOpen]);

  const dropdownPanelClassName = isMobile
    ? clsx(
        "mt-2 flex flex-col gap-2 pl-4 border-l border-terciary",
        !isResourcesOpen && "hidden",
      )
    : clsx(
        "min-w-[220px] rounded-lg border border-terciary bg-primary p-2 shadow-lg",
        !isResourcesOpen && "hidden",
      );

  return (
    <div
      ref={containerRef}
      className={clsx(!isMobile && "relative", isMobile && "flex flex-col")}
      onMouseEnter={() => {
        if (!isMobile) setIsResourcesOpen(true);
      }}
      onMouseLeave={() => {
        if (!isMobile) setIsResourcesOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isResourcesOpen}
        onClick={() => setIsResourcesOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsResourcesOpen(false);
        }}
        className={clsx(
          "inline-flex items-center gap-2 transition-colors hover:text-opacity-80 leading-none py-2",
          isMobile && "w-fit",
        )}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={clsx(
            "transition-transform translate-y-px",
            isResourcesOpen && "rotate-180",
          )}
        />
      </button>

      {isMobile ? (
        <div className={dropdownPanelClassName} role="menu">
          {items.map(({ link, Icon, content, external }, i) => (
            <Link
              key={`resources-item-${i}`}
              href={link}
              target={external ? "_blank" : "_self"}
              rel={external ? "noopener noreferrer" : undefined}
              role="menuitem"
              className={clsx(
                "flex items-center gap-2 rounded-md px-3 py-2 transition-colors",
                "hover:bg-terciary/20",
              )}
              onClick={() => {
                setIsResourcesOpen(false);
                setIsOpen(false);
              }}
            >
              {Icon && <Icon size={16} />}
              <span>{content}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="absolute left-0 top-full pt-2">
          <div className={dropdownPanelClassName} role="menu">
            {items.map(({ link, Icon, content, external }, i) => (
              <Link
                key={`resources-item-${i}`}
                href={link}
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener noreferrer" : undefined}
                role="menuitem"
                className={clsx(
                  "flex items-center gap-2 rounded-md px-3 py-2 transition-colors",
                  "hover:bg-terciary/20",
                )}
                onClick={() => {
                  setIsResourcesOpen(false);
                  setIsOpen(false);
                }}
              >
                {Icon && <Icon size={16} />}
                <span>{content}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

type ThemeToggleProps = {
  theme: "light" | "dark" | null;
  onToggle: () => void;
  label: string;
};

const ThemeToggle = ({ theme, onToggle, label }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onToggle}
      role="switch"
      aria-checked={theme === "dark"}
      className={clsx(
        "inline-flex w-full md:w-auto items-center rounded-full border border-terciary p-1 text-sm transition-colors",
        "hover:bg-terciary/20",
      )}
      disabled={!theme}
    >
      <span
        className={clsx(
          "flex flex-1 justify-center md:flex-none items-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition-colors",
          theme === "light" ? "bg-secondary text-primary" : "text-secondary/70",
        )}
      >
        <Sun size={14} />
        Light
      </span>
      <span
        className={clsx(
          "flex flex-1 justify-center md:flex-none items-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition-colors",
          theme === "dark" ? "bg-secondary text-primary" : "text-secondary/70",
        )}
      >
        <Moon size={14} />
        Dark
      </span>
    </button>
  );
};

export default Navbar;
