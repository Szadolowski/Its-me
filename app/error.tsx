"use client";

import { useEffect } from "react";
import { AlertOctagon, RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Tutaj możesz logować błąd do zewnętrznego serwisu (np. Sentry)
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="p-8 border border-red-500/30 rounded-xl bg-red-500/5 backdrop-blur-md animate-fade-up">
        <div className="flex justify-center mb-6 text-red-500">
          <AlertOctagon size={64} strokeWidth={1.5} />
        </div>

        <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">
          System Malfunction
        </h1>

        <h2 className="mb-6 font-mono text-sm tracking-widest text-red-400 uppercase">
          Critical Process Failure
        </h2>

        <p className="max-w-md mb-8 text-gray-400">
          An unexpected error has occurred within the application core.
          <br />
          <span className="block mt-2 font-mono text-xs text-gray-600">
            {error.message || "Unknown Error"}
          </span>
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-white transition-colors border rounded bg-white/5 border-white/10 hover:bg-white/10"
          >
            <RefreshCcw size={18} />
            <span>Reboot System</span>
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-black transition-transform rounded bg-custom-addition hover:scale-105 hover:bg-white"
          >
            <Home size={18} />
            <span>Safe Mode (Home)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
