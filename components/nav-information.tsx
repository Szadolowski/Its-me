import Link from "next/link";

export default function NavInformation({
  svg,
  children,
  href = "#",
}: {
  svg: React.JSX.Element;
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link href={href} target="_blank" className="w-full group">
      <div className="flex items-center w-full gap-4 p-3 transition-all duration-300 border rounded-xl border-white/5 bg-white/5 hover:bg-white/10 hover:border-custom-addition/30 hover:shadow-[0_0_15px_rgba(95,225,155,0.1)] hover:-translate-y-0.5">
        <div className="flex items-center justify-center p-2 text-gray-400 transition-colors rounded-lg bg-black/40 group-hover:text-custom-addition group-hover:bg-custom-addition/10">
          {svg}
        </div>
        <p className="text-sm font-medium tracking-wide text-gray-300 transition-colors group-hover:text-white">
          {children}
        </p>
      </div>
    </Link>
  );
}
