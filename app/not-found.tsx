import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="p-8 border rounded-xl border-white/10 bg-white/5 backdrop-blur-md animate-fade-up">
        <div className="flex justify-center mb-6 text-custom-addition opacity-80">
          <AlertTriangle size={64} strokeWidth={1.5} />
        </div>

        <h1 className="mb-2 font-mono text-6xl font-bold tracking-tighter text-white">
          404
        </h1>

        <h2 className="mb-6 text-xl font-bold tracking-widest text-gray-400 uppercase">
          Signal Lost
        </h2>

        <p className="max-w-md mb-8 text-gray-500">
          The coordinates you are trying to access do not exist in this sector.
          The page might have been moved, deleted, or never existed.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 font-bold text-black transition-transform rounded bg-custom-addition hover:scale-105 hover:bg-white"
        >
          <Home size={18} />
          <span>Return to Base</span>
        </Link>
      </div>

      <div className="mt-8 font-mono text-xs text-gray-600">
        ERROR_CODE: PAGE_NOT_FOUND_EXCEPTION
      </div>
    </div>
  );
}
