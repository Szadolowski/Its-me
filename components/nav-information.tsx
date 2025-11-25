import Image from "next/image";
import Link from "next/link";

export default function NavInformation({
  img,
  children,
}: {
  img: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={"https://github.com/Szadolowski"} target="_blank">
      <div className="flex flex-row items-center space-x-5 overflow-hidden rounded-lg outline-4 outline-neutral-700 bg-neutral-500">
        <Image
          src={img}
          alt="alt"
          width={50}
          height={10}
          className="p-2 bg-neutral-400"
        />
        <p className="w-full text-lg font-semibold">{children}</p>
      </div>
    </Link>
  );
}
