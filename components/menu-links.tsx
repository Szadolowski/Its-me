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
    { "": "home" },
    { about_me: "About Me" },
    { skills: "Skills" },
    { projects: "Projects" },
    { contact: "Contact" },
  ];

  return categories.map((category) => {
    const [key, value] = Object.entries(category)[0];
    const isActive = pathname === `/${key}` || (pathname === "/" && key === "");
    let open;
    if (isActive) {
      open =
        "bg-gradient-to-t from-orange-500 to-transparent to-55% text-white font-bold";
    } else {
      open =
        "bg-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white hover:font-bold";
    }
    return (
      <Link
        href={`/${key}`}
        key={key}
        className={`flex flex-col px-4 py-2 text-2xl font-bold sm:text-base sm:font-normal sm:items-center sm:flex-row sm:border-r-2 ${open} border-neutral-700 hover:cursor-pointer`}
        onClick={() => menuStatus?.(false)}
      >
        {value}
      </Link>
    );
  });
}
