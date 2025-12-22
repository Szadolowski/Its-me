"use client";

import { useState } from "react";
import MenuLinks from "./menu-links";
import { Menu, X } from "lucide-react"; // Sugeruję użyć ikon z lucide dla czystości, ale można zostać przy divach

export default function MobileMenu() {
  const [menuView, setMenuView] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between h-16 px-6 border-b border-white/10 bg-custom-main/80 backdrop-blur-md">
      <h1 className="text-xl font-bold tracking-tight text-white">
        Rafał Curzydło
      </h1>

      <button
        className="p-2 text-gray-300 transition-colors rounded-md hover:bg-white/10 hover:text-white"
        onClick={() => setMenuView((prev) => !prev)}
      >
        {/* Prosta animacja ikony lub zamiana X / Menu */}
        {menuView ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Dropdown Menu */}
      {menuView && (
        <div className="absolute left-0 w-full duration-200 border-b shadow-2xl top-16 border-white/10 bg-custom-main/95 backdrop-blur-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-6 space-y-2">
            <MenuLinks menuStatus={setMenuView} />
          </div>
        </div>
      )}
    </div>
  );
}
