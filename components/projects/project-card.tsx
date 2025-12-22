"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Github, ExternalLink, Code2 } from "lucide-react"; // Nowe ikony
import { motion, AnimatePresence } from "framer-motion";

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
  className?: string;
}

export function ProjectCard({
  title,
  category,
  description,
  fullDescription,
  techStack,
  githubUrl,
  liveUrl,
  isFeatured = false,
  className,
}: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
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
      {/* KARTA PROJEKTU */}
      <button
        onClick={() => setIsOpen(true)}
        className={`group relative flex flex-col justify-between p-6 text-left transition-all duration-300 border hover:shadow-xl hover:-translate-y-1 ${className} ${
          isFeatured
            ? "bg-linear-to-br from-[#1a1a1a] to-black border-custom-addition/30"
            : "bg-white/5 border-white/10"
        }`}
      >
        {/* Header Karty */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <div
              className={`p-2 rounded-lg border ${
                isFeatured
                  ? "bg-custom-addition/10 border-custom-addition/50 text-custom-addition"
                  : "bg-white/10 border-white/10 text-gray-400"
              }`}
            >
              <Code2 size={isFeatured ? 28 : 24} />
            </div>
            <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">
              {category}
            </span>
          </div>

          <h3
            className={`font-bold transition-colors group-hover:text-custom-addition ${
              isFeatured ? "text-2xl text-white" : "text-xl text-gray-200"
            }`}
          >
            {title}
          </h3>
          <p className="mt-3 text-sm text-gray-400 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Footer Karty (Tagi) */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-[10px] uppercase tracking-wider text-gray-400 border rounded bg-black/50 border-white/5"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="px-2 py-1 text-[10px] text-gray-500">
                +{techStack.length - 3}
              </span>
            )}
          </div>
          <div className="mt-4 font-mono text-xs transition-opacity opacity-0 text-custom-addition group-hover:opacity-100">
            View Case Study_
          </div>
        </div>
      </button>

      {/* MODAL (PORTAL) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 flex items-center justify-center p-4 z-9999 bg-black/90 backdrop-blur-md"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-3xl bg-[#0f0f0f] border border-custom-addition/30 rounded-xl shadow-2xl flex flex-col max-h-[85vh]"
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                    <div>
                      <span className="font-mono text-xs tracking-widest uppercase text-custom-addition">
                        Project Details
                      </span>
                      <h3 className="mt-1 text-3xl font-bold text-white">
                        {title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 text-gray-400 transition-colors rounded-full hover:text-white hover:bg-white/10"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Modal Content (Scrollable) */}
                  <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                      {/* Lewa kolumna: Opis */}
                      <div className="space-y-6 md:col-span-2">
                        <div>
                          <h4 className="mb-3 text-sm font-bold text-gray-500 uppercase">
                            Overview
                          </h4>
                          <p className="leading-relaxed text-gray-300 whitespace-pre-line">
                            {fullDescription}
                          </p>
                        </div>
                      </div>

                      {/* Prawa kolumna: Detale i Linki */}
                      <div className="space-y-6">
                        {/* Linki */}
                        <div className="flex flex-col gap-3">
                          {liveUrl && (
                            <a
                              href={liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-black transition-transform rounded bg-custom-addition hover:scale-105 active:scale-95"
                            >
                              <ExternalLink size={18} />
                              Live Demo
                            </a>
                          )}
                          {githubUrl && (
                            <a
                              href={githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white transition-colors border rounded border-white/20 bg-white/5 hover:bg-white/10"
                            >
                              <Github size={18} />
                              Source Code
                            </a>
                          )}
                        </div>

                        {/* Stack */}
                        <div>
                          <h4 className="mb-3 text-xs font-bold text-gray-500 uppercase">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs text-gray-300 bg-black border rounded border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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
