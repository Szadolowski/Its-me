"use client";

import { useState } from "react";
import { Mail, MapPin, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactInfo() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "rafalcurzydlo.biz@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section className="space-y-8 animate-fade-up animate-delay-100">
      {/* Status Card */}
      <div className="p-6 border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm">
        <h3 className="mb-4 font-mono text-sm tracking-widest text-gray-500 uppercase">
          Current Status
        </h3>
        <div className="flex items-center gap-3">
          <span className="relative flex w-3 h-3">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-custom-addition"></span>
            <span className="relative inline-flex w-3 h-3 rounded-full bg-custom-addition"></span>
          </span>
          <span className="text-xl font-bold text-white">
            Available for Commission
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-400">
          Open to freelance projects, consulting, and full-time opportunities.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {/* Email z funkcją kopiowania */}
        <button
          onClick={handleCopyEmail}
          className="relative flex items-center w-full gap-4 p-4 text-left transition-all duration-300 border group rounded-xl border-white/10 bg-white/5 hover:bg-white/10 hover:border-custom-addition/30"
        >
          <div className="p-3 text-white transition-colors rounded-lg bg-black/40 group-hover:text-custom-addition">
            <Mail size={24} />
          </div>
          <div className="flex-1">
            <p className="font-mono text-xs text-gray-500 uppercase">
              Direct Email channel
            </p>
            <p className="text-lg font-medium text-white transition-colors group-hover:text-custom-addition">
              {email}
            </p>
          </div>
          <div className="p-2 text-gray-500 transition-colors rounded-md group-hover:text-white bg-white/5">
            {emailCopied ? (
              <Check size={20} className="text-custom-addition" />
            ) : (
              <Copy size={20} />
            )}
          </div>

          {/* Tooltip 'Copied' */}
          <AnimatePresence>
            {emailCopied && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute px-2 py-1 text-xs font-bold text-black rounded right-4 -top-8 bg-custom-addition"
              >
                Copied to clipboard!
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* Lokalizacja */}
        <div className="flex items-center gap-4 p-4 border rounded-xl border-white/10 bg-white/5">
          <div className="p-3 text-gray-400 rounded-lg bg-black/40">
            <MapPin size={24} />
          </div>
          <div>
            <p className="font-mono text-xs text-gray-500 uppercase">
              Base of Operations
            </p>
            <p className="text-lg font-medium text-white">Remote, Poland</p>
          </div>
        </div>
      </div>
    </section>
  );
}
