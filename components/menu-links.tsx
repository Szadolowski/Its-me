"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface MenuLinksProps {
  menuStatus?: Dispatch<SetStateAction<boolean>>;
}

export default function MenuLinks({ menuStatus }: MenuLinksProps) {
  const categories = [
    { "": "home" },
    { about_me: "About Me" },
    { skills: "Skills" },
    { projects: "Projects" },
    { contact: "Contact" },
  ];

  return categories.map((category) => {
    const [key, value] = Object.entries(category)[0];
    return (
      <Link
        href={`/${key}`}
        key={key}
        className="flex flex-col px-4 py-2 text-2xl font-bold sm:text-base sm:font-normal sm:items-center sm:flex-row sm:border-r-2 hover:bg-neutral-700 hover:font-bold border-neutral-700 hover:cursor-pointer"
        onClick={() => menuStatus?.(false)}
      >
        {value}
      </Link>
    );
  });
}
