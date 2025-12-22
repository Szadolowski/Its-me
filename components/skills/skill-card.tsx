"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillProps {
  title: string;
  category: string;
  description: string;
  evidence: string;
  techDetails?: string;
  className?: string;
  children: React.ReactNode;
}

export function SkillCard({
  title,
  category,
  description,
  evidence,
  techDetails,
  className,
  children,
}: SkillProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* TRIGGER (KAFELEK) */}
      <button
        onClick={() => setIsOpen(true)}
        className={`group relative flex flex-col justify-between p-6 text-left transition-all duration-300 border hover:shadow-lg hover:-translate-y-1 ${className} ${
          isOpen ? "border-custom-addition z-10" : "border-white/10 bg-white/5"
        }`}
      >
        <div className="flex items-start justify-between w-full">
          <div className="p-3 transition-colors border rounded-lg bg-custom-main border-white/10 group-hover:border-custom-addition/50">
            {children}
          </div>
          <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">
            {category}
          </span>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-custom-addition">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-400 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="mt-4 text-xs transition-opacity opacity-0 text-custom-addition group-hover:opacity-100">
          Click to see details_
        </div>
      </button>

      {/* 3. UŻYCIE PORTALU - Przenosi modal do body */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 flex items-center justify-center p-4 z-9999 bg-black/80 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-2xl bg-[#0f0f0f] border border-custom-addition rounded-lg shadow-2xl overflow-hidden"
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                    <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
                      {children} {title}
                    </h3>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <div>
                      <h4 className="mb-2 font-mono text-sm uppercase text-custom-addition">
                        My Approach
                      </h4>
                      <p className="leading-relaxed text-gray-300">
                        {description}
                      </p>
                    </div>

                    <div className="p-4 font-mono text-sm border rounded bg-black/50 border-white/5">
                      <h4 className="mb-2 text-xs text-gray-500 uppercase">
                        Real World Evidence
                      </h4>
                      <p className="pl-3 text-white border-l-2 border-custom-addition">
                        {evidence}
                      </p>
                    </div>

                    {techDetails && (
                      <div>
                        <h4 className="mb-2 text-xs text-gray-500 uppercase">
                          Tech Specs / Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {techDetails.split(",").map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs text-gray-300 rounded bg-white/10"
                            >
                              {tag.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 text-right border-t border-white/10 bg-white/5">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Close [ESC]
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
