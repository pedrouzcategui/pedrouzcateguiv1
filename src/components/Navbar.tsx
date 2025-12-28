import {
  Home,
  BookOpenText,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type MenuItem = {
  link: string;
  content: string;
  Icon: LucideIcon;
};

const MENU_ITEMS: MenuItem[] = [
  {
    content: "Home",
    link: "/",
    Icon: Home,
  },
  {
    content: "Blog",
    link: "/blog",
    Icon: BookOpenText,
  },
  {
    content: "Case Studies",
    link: "/case-studies",
    Icon: BriefcaseBusiness,
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-primary w-full border-b border-terciary text-secondary">
      <div className="w-[95%] mx-auto py-6 flex justify-between items-center">
        <div className="flex w-full justify-between font-medium">
          <p className="font-bold">Pedro Uzcátegui</p>
          <MenuItems />
        </div>
      </div>
    </nav>
  );
};

const MenuItems = () => {
  return (
    <div className="flex gap-12">
      {MENU_ITEMS.map(({ link, content }, i) => (
        <Link
          key={`menu-item-${i}`}
          className="flex items-center gap-1"
          href={link}
        >
          {content}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
