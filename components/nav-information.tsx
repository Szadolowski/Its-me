import Image from "next/image";
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
    <Link href={href} target="_blank">
      <div className="flex flex-row items-center w-full h-full space-x-5 overflow-hidden border border-black rounded-lg bg-custom-secend">
        <div className="p-1 border-r border-black  bg-custom-addition">
          {svg}
        </div>
        <p className="w-full text-lg font-bold text-black">{children}</p>
      </div>
    </Link>
  );
}
