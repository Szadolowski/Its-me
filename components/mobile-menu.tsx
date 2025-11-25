"use client";

import { useState } from "react";
import MenuLinks from "./menu-links";

export default function MobileMenu() {
  const [menuView, setMenuView] = useState<boolean>(false);
  return (
    <div className="flex flex-row items-center justify-between w-full h-full px-4">
      <h1 className="text-2xl font-bold ">Rafał Curzydło</h1>
      <div
        className="flex flex-col justify-between w-5 cursor-pointer h-1/2"
        onClick={() => setMenuView((prev) => !prev)}
      >
        <div className="w-full h-1 bg-neutral-100"></div>
        <div className="w-full h-1 bg-neutral-100"></div>
        <div className="w-full h-1 bg-neutral-100"></div>
      </div>
      {menuView && (
        <div className="absolute left-0 z-10 flex flex-col w-full h-screen border-t-4 top-13 bg-neutral-600 border-neutral-700">
          <MenuLinks menuStatus={setMenuView} />
        </div>
      )}
    </div>
  );
}
