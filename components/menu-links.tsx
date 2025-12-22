"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";

interface MenuLinksProps {
  menuStatus?: Dispatch<SetStateAction<boolean>>;
}

export default function MenuLinks({ menuStatus }: MenuLinksProps) {
  const pathname = usePathname();

  const categories = [
    { "": "Home" }, // Zmieniłem małą literę na dużą dla estetyki
    { about_me: "About Me" },
    { skills: "Skills" },
    { projects: "Projects" },
    { contact: "Contact" },
  ];

  return (
    <nav className="flex flex-col w-full gap-2 sm:flex-row sm:items-center sm:gap-6">
      {categories.map((category) => {
        const [key, value] = Object.entries(category)[0];
        // Logika dopasowania ścieżki
        const isActive =
          pathname === `/${key}` || (pathname === "/" && key === "");

        // Style dla wersji Tech / Cyber
        const baseStyle =
          "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200";
        const activeStyle =
          "bg-custom-addition/10 text-custom-addition shadow-[0_0_10px_rgba(95,225,155,0.1)]";
        const inactiveStyle = "text-gray-400 hover:text-white hover:bg-white/5";

        return (
          <Link
            href={`/${key}`}
            key={key}
            className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
            onClick={() => menuStatus?.(false)}
          >
            {value}
          </Link>
        );
      })}
    </nav>
  );
}
